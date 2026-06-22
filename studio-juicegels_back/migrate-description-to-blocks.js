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

function stringToBlocks(text) {
  if (!text) return [];
  const paragraphs = text.split(/\n\n+/);
  return paragraphs.map(para => ({
    _key: generateKey(),
    _type: 'block',
    style: 'normal',
    children: [
      {
        _key: generateKey(),
        _type: 'span',
        text: para,
      }
    ]
  }));
}

function addKeysToBlocks(blocks, outStatus) {
  if (!Array.isArray(blocks)) return { blocks: [], changed: false };
  let changed = false;
  const updatedBlocks = blocks.map(block => {
    const newBlock = { ...block };
    if (!newBlock._key) {
      newBlock._key = generateKey();
      changed = true;
    }
    if (Array.isArray(newBlock.children)) {
      newBlock.children = newBlock.children.map(child => {
        const newChild = { ...child };
        if (!newChild._key) {
          newChild._key = generateKey();
          changed = true;
        }
        return newChild;
      });
    }
    return newBlock;
  });
  return { blocks: updatedBlocks, changed };
}

async function migrate() {
  console.log("Fetching all products...");
  const products = await client.fetch('*[_type == "product" && defined(description)]');
  console.log(`Found ${products.length} products to check.`);

  let migratedCount = 0;
  for (const prod of products) {
    if (typeof prod.description === 'string') {
      console.log(`Migrating string description to blocks with keys for: "${prod.title}" (${prod._id})`);
      const blocks = stringToBlocks(prod.description);
      
      await client.patch(prod._id)
        .set({ description: blocks })
        .commit();
        
      console.log(`  Successfully migrated "${prod.title}".`);
      migratedCount++;
    } else if (Array.isArray(prod.description)) {
      const { blocks, changed } = addKeysToBlocks(prod.description);
      if (changed) {
        console.log(`Adding missing keys to blocks for: "${prod.title}" (${prod._id})`);
        await client.patch(prod._id)
          .set({ description: blocks })
          .commit();
        console.log(`  Successfully added keys for "${prod.title}".`);
        migratedCount++;
      } else {
        console.log(`Skipping "${prod.title}" (${prod._id}) - already has all keys.`);
      }
    } else {
      console.log(`Unknown format for "${prod.title}" (${prod._id}).`);
    }
  }

  console.log(`Database key addition/migration complete! Updated ${migratedCount} products.`);
}

migrate().catch(err => {
  console.error("Migration failed:", err);
});
