const { createClient } = require('@sanity/client');

const token = 'skf0BXs8tuM5kyHPhuV1KyGrFeA345cjlUjdLd3pz40cBZqbZJA5LsCJtZGSHXYdOoon61gJuUu5FukZd';

const client = createClient({
  projectId: '5co5ooqr',
  dataset: 'production',
  token: token,
  useCdn: false,
  apiVersion: '2021-10-21',
});

function generateKey() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

function cloneBlocksWithNewKeys(blocks) {
  if (!Array.isArray(blocks)) return [];
  return blocks.map(block => {
    const newBlock = { ...block };
    newBlock._key = generateKey();
    if (Array.isArray(newBlock.children)) {
      newBlock.children = newBlock.children.map(child => {
        const newChild = { ...child };
        newChild._key = generateKey();
        return newChild;
      });
    }
    return newBlock;
  });
}

async function run() {
  console.log("Fetching description from 'Hinokami Tanjiro'...");
  const sourceProducts = await client.fetch('*[_type == "product" && title == "Hinokami Tanjiro"]');
  
  if (sourceProducts.length === 0) {
    console.error("Error: Could not find product with title 'Hinokami Tanjiro'.");
    return;
  }
  
  const sourceProduct = sourceProducts[0];
  const sourceDescription = sourceProduct.description;
  
  if (!Array.isArray(sourceDescription)) {
    console.error("Error: 'Hinokami Tanjiro' does not have a rich text description array.");
    return;
  }
  
  console.log("Successfully retrieved source description blocks.");
  console.log(JSON.stringify(sourceDescription, null, 2));

  console.log("Fetching all other products...");
  const allProducts = await client.fetch('*[_type == "product"]');
  console.log(`Found ${allProducts.length} total products.`);

  let updatedCount = 0;
  for (const prod of allProducts) {
    if (prod._id === sourceProduct._id) {
      console.log(`Skipping source product "${prod.title}" (${prod._id}).`);
      continue;
    }

    console.log(`Copying description to: "${prod.title}" (${prod._id})...`);
    const copiedBlocks = cloneBlocksWithNewKeys(sourceDescription);

    await client.patch(prod._id)
      .set({ description: copiedBlocks })
      .commit();
      
    console.log(`  Successfully updated "${prod.title}".`);
    updatedCount++;
  }

  console.log(`Done! Duplicated description to ${updatedCount} products.`);
}

run().catch(err => {
  console.error("Operation failed:", err);
});
