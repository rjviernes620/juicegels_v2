const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const { createClient } = require('@sanity/client');

// Sanity client configuration
const token = 'skf0BXs8tuM5kyHPhuV1KyGrFeA345cjlUjdLd3pz40cBZqbZJA5LsCJtZGSHXYdOoon61gJuUu5FukZd';
const client = createClient({
  projectId: '5co5ooqr',
  dataset: 'production',
  token: token,
  useCdn: false,
  apiVersion: '2021-10-21',
});

const VIDEO_SETS = [
  { id: "starlit", productId: 1202, videoUrl: "https://www.tiktok.com/@juice.gels/video/7573010535969606934" },
  { id: "bowcrush", productId: 1127, videoUrl: "https://www.tiktok.com/@juice.gels/video/7604969643811310870" },
  { id: "popstartips", productId: 872, videoUrl: "https://www.tiktok.com/@juice.gels/video/7630491166462561558" },
  { id: "mochabluemuse", productId: 1142, videoUrl: "https://www.tiktok.com/@juice.gels/video/7603120562440785174" },
  { id: "evergreensparkles", productId: 1187, videoUrl: "https://www.tiktok.com/@juice.gels/video/7575994342922292502" },
  { id: "ghoulglam", productId: 9999, videoUrl: "https://www.tiktok.com/@juice.gels/video/7565493075104091414" },
  { id: "sparklescream", productId: 1247, videoUrl: "https://www.tiktok.com/@juice.gels/video/7562995151417691414" },
  { id: "pinkoween", productId: 1277, videoUrl: "https://www.tiktok.com/@juice.gels/video/7559654195863751958" },
  { id: "cocoaquilt", productId: 1292, videoUrl: "https://www.tiktok.com/@juice.gels/video/7557040622951992598" },
  { id: "burgundybling", productId: 1352, videoUrl: "https://www.tiktok.com/@juice.gels/video/7554021380258319638" },
  { id: "dolcedot", productId: 1367, videoUrl: "https://www.tiktok.com/@juice.gels/video/7552227357973581078" },
  { id: "velourembre", productId: 1382, videoUrl: "https://www.tiktok.com/@juice.gels/video/7549300417667108118" },
  { id: "terraflora", productId: 287, videoUrl: "https://www.tiktok.com/@juice.gels/video/7545456016683453718" },
  { id: "pinkeclipse", productId: 1427, videoUrl: "https://www.tiktok.com/@juice.gels/video/7542877318243421463" },
  { id: "petalpearl", productId: 302, videoUrl: "https://www.tiktok.com/@juice.gels/video/7528096243143249174" },
  { id: "sunsethaze", productId: 422, videoUrl: "https://www.tiktok.com/@juice.gels/video/7513300972421106966" },
  { id: "sundownshine", productId: 407, videoUrl: "https://www.tiktok.com/@juice.gels/video/7512531788359650582" },
  { id: "petalflora", productId: 211, videoUrl: "https://www.tiktok.com/@juice.gels/video/7506225963399679254" },
  { id: "pinkopulence", productId: 241, videoUrl: "https://www.tiktok.com/@juice.gels/video/7502077568544214274" },
  { id: "chromamuse", productId: 256, videoUrl: "https://www.tiktok.com/@juice.gels/video/7502077568544214274" },
  { id: "kittyconstellation", productId: 1502, videoUrl: "https://www.tiktok.com/@juice.gels/video/7493865208012786966" },
  { id: "kanrojikisses", productId: 9998, videoUrl: "https://www.tiktok.com/@juice.gels/video/7489878567422070038" },
  { id: "tropicalblush", productId: 662, videoUrl: "https://www.tiktok.com/@juice.gels/video/7487260231391628566" },
  { id: "rubybling", productId: 1532, videoUrl: "https://www.tiktok.com/@juice.gels/video/7481641416083524886" },
  { id: "gildedgeode", productId: 542, videoUrl: "https://www.tiktok.com/@juice.gels/video/7479159660667358486" }
];

// Absolute path to yt-dlp in python venv
const rootDir = path.resolve(__dirname, '..');
const ytDlpPath = path.join(rootDir, '.venv', 'Scripts', 'yt-dlp.exe');
const tempDir = path.join(__dirname, 'temp-videos');

// Helper function to run a command as a promise
function runCommand(command, args) {
  return new Promise((resolve, reject) => {
    const process = spawn(command, args);
    let stdout = '';
    let stderr = '';

    process.stdout.on('data', (data) => { stdout += data; });
    process.stderr.on('data', (data) => { stderr += data; });

    process.on('close', (code) => {
      if (code === 0) {
        resolve(stdout);
      } else {
        reject(new Error(`Command failed with code ${code}. Stderr: ${stderr}`));
      }
    });
  });
}

async function migrate() {
  console.log("Starting Video Migration...");

  // Ensure temp folder exists
  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir);
  }

  // Fetch all products once to map by productId
  console.log("Fetching existing products from Sanity...");
  const products = await client.fetch('*[_type == "product" && defined(productId)]');
  console.log(`Found ${products.length} products in Sanity.`);

  const productMap = new Map();
  for (const p of products) {
    productMap.set(p.productId, p);
  }

  for (let i = 0; i < VIDEO_SETS.length; i++) {
    const set = VIDEO_SETS[i];
    console.log(`\n[${i + 1}/${VIDEO_SETS.length}] Processing Set: ${set.id} (Product ID: ${set.productId})`);

    const product = productMap.get(set.productId);
    if (!product) {
      console.warn(`⚠️ Product not found in Sanity for ID: ${set.productId}. Skipping.`);
      continue;
    }

    // Check if video is already uploaded and tiktokUrl is set
    if (product.video && product.video.asset && product.tiktokUrl) {
      console.log(`✅ Video is already uploaded for "${product.title}" (${product._id}). Skipping.`);
      continue;
    }

    console.log(`Downloading video for "${product.title}" (${product._id}) from ${set.videoUrl}...`);
    const tempFileName = `temp-${set.id}.mp4`;
    const tempFilePath = path.join(tempDir, tempFileName);

    try {
      // Use yt-dlp to download the video in mp4 format
      // Note: we use -f b[ext=mp4] to select mp4 format and avoid warnings
      await runCommand(ytDlpPath, [
        '-f', 'b[ext=mp4]',
        '-o', tempFilePath,
        set.videoUrl
      ]);

      if (!fs.existsSync(tempFilePath)) {
        throw new Error("Downloaded file not found at " + tempFilePath);
      }

      const fileSize = fs.statSync(tempFilePath).size;
      console.log(`  Downloaded video successfully. Size: ${(fileSize / (1024 * 1024)).toFixed(2)} MB. Uploading to Sanity...`);

      // Upload file asset to Sanity
      const asset = await client.assets.upload('file', fs.createReadStream(tempFilePath), {
        filename: `${set.id}.mp4`,
        contentType: 'video/mp4'
      });

      console.log(`  Uploaded asset successfully: ${asset._id}. Updating product document...`);

      // Update product document in Sanity
      await client.patch(product._id)
        .set({
          video: {
            _type: 'file',
            asset: {
              _type: 'reference',
              _ref: asset._id
            }
          },
          tiktokUrl: set.videoUrl
        })
        .commit();

      console.log(`  Successfully updated "${product.title}" with video and TikTok URL!`);

      // Delete the local temp video file
      fs.unlinkSync(tempFilePath);
    } catch (err) {
      console.error(`  ❌ Failed processing video for ${set.id}:`, err.message);
      if (fs.existsSync(tempFilePath)) {
        try { fs.unlinkSync(tempFilePath); } catch (e) {}
      }
    }
  }

  // Cleanup temp folder
  try {
    fs.rmdirSync(tempDir);
  } catch (e) {}

  console.log("\nMigration completed successfully!");
}

migrate().catch(err => {
  console.error("Migration failed:", err);
});
