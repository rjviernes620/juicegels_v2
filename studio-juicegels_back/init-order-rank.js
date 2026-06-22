const { createClient } = require('@sanity/client');
const { LexoRank } = require('lexorank');

const token = 'skf0BXs8tuM5kyHPhuV1KyGrFeA345cjlUjdLd3pz40cBZqbZJA5LsCJtZGSHXYdOoon61gJuUu5FukZd';

const client = createClient({
  projectId: '5co5ooqr',
  dataset: 'production',
  token: token,
  useCdn: false,
  apiVersion: '2021-10-21',
});

async function migrate() {
  console.log("Fetching all products from Sanity...");
  // Order by productId asc so the initial rank preserves the current sequence (newer/higher IDs at the end)
  const products = await client.fetch('*[_type == "product" && !(_id in path("drafts.**"))] | order(productId asc)');
  console.log(`Found ${products.length} products.`);

  let rank = LexoRank.middle();
  const transaction = client.transaction();

  for (const prod of products) {
    const rankStr = rank.toString();
    console.log(`Setting orderRank for "${prod.title}" (${prod._id}) to "${rankStr}"`);
    transaction.patch(prod._id, p => p.set({ orderRank: rankStr }));
    rank = rank.genNext();
  }

  console.log(`Committing transaction to update ${products.length} products...`);
  await transaction.commit();
  console.log("Migration complete!");
}

migrate().catch(err => {
  console.error("Migration failed:", err);
  process.exit(1);
});
