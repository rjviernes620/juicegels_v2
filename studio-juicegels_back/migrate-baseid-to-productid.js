const { createClient } = require('@sanity/client');

const token = 'skf0BXs8tuM5kyHPhuV1KyGrFeA345cjlUjdLd3pz40cBZqbZJA5LsCJtZGSHXYdOoon61gJuUu5FukZd';

const client = createClient({
  projectId: '5co5ooqr',
  dataset: 'production',
  token: token,
  useCdn: false,
  apiVersion: '2021-10-21',
});

async function migrate() {
  console.log("Fetching all products with baseId defined...");
  const products = await client.fetch('*[_type == "product" && defined(baseId)]');
  console.log(`Found ${products.length} products to migrate.`);

  for (const prod of products) {
    console.log(`Migrating product: "${prod.title}" (${prod._id})`);
    
    // Copy baseId to productId, and unset baseId
    await client.patch(prod._id)
      .set({ productId: prod.baseId })
      .unset(['baseId'])
      .commit();
      
    console.log(`  Successfully migrated "${prod.title}". (productId = ${prod.baseId})`);
  }

  console.log("Database migration complete!");
}

migrate().catch(err => {
  console.error("Migration failed:", err);
});
