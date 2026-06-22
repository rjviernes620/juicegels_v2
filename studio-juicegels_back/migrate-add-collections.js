const { createClient } = require('@sanity/client');

const token = 'skf0BXs8tuM5kyHPhuV1KyGrFeA345cjlUjdLd3pz40cBZqbZJA5LsCJtZGSHXYdOoon61gJuUu5FukZd';

const client = createClient({
  projectId: '5co5ooqr',
  dataset: 'production',
  token: token,
  useCdn: false,
  apiVersion: '2021-10-21',
});

// Mapping of product names to their collections
const collectionMap = {
  // Kamado Collection
  "hinokami tanjiro": "Kamado Collection",
  "blood moon nezuko": "Kamado Collection",
  
  // Stargirl Collection
  "stargirl dawn": "Stargirl Collection",
  "stargirl dusk": "Stargirl Collection",
  
  // Bloom Collection
  "bluebell bloom": "Bloom Collection",
  "meadow bloom": "Bloom Collection",
  "citrus bloom": "Bloom Collection",
  
  // Stardust Collection
  "kitty stardust": "Stardust Collection",
  "kuromi stardust": "Stardust Collection"
};

async function migrate() {
  console.log("Fetching all products from Sanity...");
  const products = await client.fetch('*[_type == "product" && !(_id in path("drafts.**"))]');
  console.log(`Found ${products.length} products.`);

  let updatedCount = 0;
  const transaction = client.transaction();

  for (const prod of products) {
    const title = (prod.title || "").trim().toLowerCase();
    const targetCollection = collectionMap[title];

    if (targetCollection) {
      if (prod.collection !== targetCollection) {
        console.log(`Setting collection for "${prod.title}" (${prod._id}) to "${targetCollection}"`);
        transaction.patch(prod._id, p => p.set({ collection: targetCollection }));
        updatedCount++;
      } else {
        console.log(`"${prod.title}" is already in "${targetCollection}"`);
      }
    } else {
      // If a product has a collection set but is not in our map, we don't clear it unless requested.
      // But let's verify if they have it.
      if (prod.collection) {
        console.log(`Product "${prod.title}" has collection "${prod.collection}" but is not in the migration map.`);
      }
    }
  }

  if (updatedCount === 0) {
    console.log("All products already up-to-date. No updates needed.");
    return;
  }

  console.log(`Committing transaction to update ${updatedCount} products...`);
  await transaction.commit();
  console.log("Migration complete!");
}

migrate().catch(err => {
  console.error("Migration failed:", err);
  process.exit(1);
});
