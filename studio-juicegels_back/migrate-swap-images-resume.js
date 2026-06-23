const fs = require('fs');
const { createClient } = require('@sanity/client');

const token = 'skf0BXs8tuM5kyHPhuV1KyGrFeA345cjlUjdLd3pz40cBZqbZJA5LsCJtZGSHXYdOoon61gJuUu5FukZd';

const client = createClient({
  projectId: '5co5ooqr',
  dataset: 'production',
  token: token,
  useCdn: false,
  apiVersion: '2021-10-21',
});

const logFilePath = 'C:/Users/rjvie/.gemini/antigravity/brain/d4416777-660f-4c18-8456-f0515e13a052/.system_generated/tasks/task-34.log';

async function run() {
  const successIds = new Set();
  
  if (fs.existsSync(logFilePath)) {
    console.log(`Parsing log file at ${logFilePath}...`);
    const logContent = fs.readFileSync(logFilePath, 'utf8');
    const matches = [...logContent.matchAll(/Swapping images for: "([^"]+)" \(([^)]+)\)/g)];
    const successTitles = new Set([...logContent.matchAll(/Successfully swapped images for "([^"]+)"/g)].map(m => m[1]));

    for (const match of matches) {
      const title = match[1];
      const id = match[2];
      if (successTitles.has(title)) {
        successIds.add(id);
      }
    }
    console.log(`Found ${successIds.size} products already successfully swapped in the previous run.`);
  } else {
    console.log("No previous log file found, starting fresh.");
  }

  console.log("Fetching all products...");
  const products = await client.fetch('*[_type == "product"]');
  console.log(`Found ${products.length} products to check.`);

  let updatedCount = 0;
  for (const prod of products) {
    if (successIds.has(prod._id)) {
      console.log(`Skipping "${prod.title}" (${prod._id}) - already swapped in previous run.`);
      continue;
    }

    const oldImage2 = prod.image2;
    const oldImage3 = prod.image3;

    // Check if we actually need to change anything
    const hasImage2 = !!oldImage2;
    const hasImage3 = !!oldImage3;

    if (!hasImage2 && !hasImage3) {
      console.log(`Skipping "${prod.title}" (${prod._id}) - neither image2 nor image3 is defined.`);
      continue;
    }

    console.log(`Swapping images for: "${prod.title}" (${prod._id})`);
    if (hasImage2) {
      console.log(`  Current Image 2 asset ref: ${oldImage2.asset?._ref}`);
    } else {
      console.log(`  Current Image 2: undefined`);
    }
    if (hasImage3) {
      console.log(`  Current Image 3 asset ref: ${oldImage3.asset?._ref}`);
    } else {
      console.log(`  Current Image 3: undefined`);
    }

    const setObj = {};
    const unsetArr = [];

    if (oldImage3) {
      setObj.image2 = oldImage3;
    } else {
      unsetArr.push('image2');
    }

    if (oldImage2) {
      setObj.image3 = oldImage2;
    } else {
      unsetArr.push('image3');
    }

    let patch = client.patch(prod._id);
    if (Object.keys(setObj).length > 0) {
      patch = patch.set(setObj);
    }
    if (unsetArr.length > 0) {
      patch = patch.unset(unsetArr);
    }

    await patch.commit();
    console.log(`  Successfully swapped images for "${prod.title}".`);
    updatedCount++;
  }

  console.log(`Migration done! Successfully swapped images on ${updatedCount} products.`);
}

run().catch(err => {
  console.error("Migration failed:", err);
});
