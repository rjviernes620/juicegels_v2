import fs from 'fs';
import path from 'path';
import { createClient } from '@sanity/client';

// 1. Configure your Sanity credentials
// Get your token from https://www.sanity.io/manage -> select project -> API -> Add API token (Write permission)
const token = process.env.SANITY_WRITE_TOKEN || 'YOUR_SANITY_WRITE_TOKEN';

if (!token || token === 'YOUR_SANITY_WRITE_TOKEN') {
  console.error("ERROR: Please provide a Sanity Write Token.");
  console.error("You can generate one in https://www.sanity.io/manage -> select project -> API -> Tokens (create a token with Write permissions).");
  console.error("Either set the SANITY_WRITE_TOKEN environment variable or edit sanity-migration.js and replace 'YOUR_SANITY_WRITE_TOKEN' with your token.");
  process.exit(1);
}

const client = createClient({
  projectId: '5co5ooqr',
  dataset: 'production',
  token: token,
  useCdn: false,
  apiVersion: '2021-10-21',
});

const csvPath = './content.csv';
const imagesDir = './images';

// Simple CSV line parser
function parseCSVLine(line) {
  const fields = [];
  let cur = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      if (inQuotes && line[i + 1] === '"') {
        cur += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (ch === "," && !inQuotes) {
      fields.push(cur);
      cur = "";
    } else {
      cur += ch;
    }
  }
  fields.push(cur);
  return fields;
}

async function migrate() {
  console.log("Starting Sanity Migration...");
  
  if (!fs.existsSync(csvPath)) {
    console.error(`CSV file not found at: ${csvPath}`);
    return;
  }

  const rawData = fs.readFileSync(csvPath, 'utf-8');
  const lines = rawData.split(/\r?\n/).filter(line => line.trim());
  
  // Find where the headers start
  let headerIdx = lines.findIndex(l => l.startsWith("id,TITLE"));
  if (headerIdx === -1) {
    console.error("Invalid CSV structure: header row starting with 'id,TITLE' not found.");
    return;
  }
  
  const headers = parseCSVLine(lines[headerIdx]);
  const rows = [];
  for (let i = headerIdx + 1; i < lines.length; i++) {
    const values = parseCSVLine(lines[i]);
    const row = {};
    headers.forEach((header, idx) => {
      row[header] = values[idx]?.trim() || "";
    });
    if (row.id) rows.push(row);
  }

  // Group rows by unique TITLE to find distinct product sets
  const groups = {};
  for (const row of rows) {
    const title = row.TITLE;
    if (!groups[title]) {
      groups[title] = [];
    }
    groups[title].push(row);
  }

  console.log(`Found ${Object.keys(groups).length} unique product sets to import.`);

  // Fetch all existing products to map baseId to existing _id to prevent duplicates
  const existingMap = new Map();
  try {
    console.log("Fetching existing products from database to prevent duplicate creation...");
    const existing = await client.fetch('*[_type == "product" && defined(baseId)]{_id, baseId}');
    for (const p of existing) {
      existingMap.set(p.baseId, p._id);
    }
    console.log(`Mapped ${existingMap.size} existing products.`);
  } catch (fetchErr) {
    console.warn("Failed to fetch existing products, fallback to default ID format:", fetchErr.message);
  }

  for (const [title, groupRows] of Object.entries(groups)) {
    // Sort rows by ID numerical value to find the base ID
    const sorted = groupRows.sort((a, b) => {
      const aNum = parseInt(a.id.replace("JUICEGELS-", ""), 10);
      const bNum = parseInt(b.id.replace("JUICEGELS-", ""), 10);
      return aNum - bNum;
    });

    const firstRow = sorted[0];
    const baseId = parseInt(firstRow.id.replace("JUICEGELS-", ""), 10);
    const price = parseFloat(firstRow.PRICE) || 0;
    const description = firstRow.DESCRIPTION.replace(/\s+/g, ' ').trim();
    const tags = firstRow.TAGS ? firstRow.TAGS.split(',').map(t => t.trim()).filter(Boolean) : [];

    console.log(`Processing: "${title}" (Base ID: ${baseId})`);

    const existingId = existingMap.get(baseId);
    const docId = existingId || `product-${baseId}`;

    const doc = {
      _id: docId,
      _type: 'product',
      title: title,
      baseId: baseId,
      price: price,
      description: description,
      tags: tags,
    };

    // Upload the local image to Sanity's CDN if it exists
    const imageFilename = `JUICEGELS-${baseId.toString().padStart(4, '0')}.jpg`;
    const imagePath = path.join(imagesDir, imageFilename);

    if (fs.existsSync(imagePath)) {
      try {
        console.log(`  Uploading image asset: ${imageFilename}...`);
        const imageAsset = await client.assets.upload('image', fs.createReadStream(imagePath), {
          filename: imageFilename
        });
        
        doc.image = {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: imageAsset._id
          }
        };
      } catch (imgErr) {
        console.error(`  Failed to upload image for ${title}:`, imgErr.message);
      }
    } else {
      console.warn(`  Image not found locally: ${imagePath}`);
    }

    // Create or update document in Sanity
    try {
      await client.createOrReplace(doc);
      console.log(`  Successfully imported/updated: "${title}"`);
    } catch (docErr) {
      console.error(`  Failed to import product "${title}":`, docErr.message);
    }
  }

  console.log("Migration complete!");
}

migrate();
