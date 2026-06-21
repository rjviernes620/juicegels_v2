const { createClient } = require('@sanity/client');

const token = 'skf0BXs8tuM5kyHPhuV1KyGrFeA345cjlUjdLd3pz40cBZqbZJA5LsCJtZGSHXYdOoon61gJuUu5FukZd';

const client = createClient({
  projectId: '5co5ooqr',
  dataset: 'production',
  token: token,
  useCdn: false,
  apiVersion: '2021-10-21',
});

async function clean() {
  console.log("Fetching all products...");
  const products = await client.fetch('*[_type == "product"]');
  console.log(`Found ${products.length} products total.`);

  // Group by baseId
  const groups = {};
  for (const prod of products) {
    const bid = prod.baseId;
    if (bid === undefined || bid === null) continue;
    if (!groups[bid]) {
      groups[bid] = [];
    }
    groups[bid].push(prod);
  }

  const toDelete = [];
  for (const [bid, list] of Object.entries(groups)) {
    if (list.length > 1) {
      console.log(`Duplicate found for baseId ${bid}:`);
      // Find the structured ID one (starts with 'product-')
      const structured = list.find(p => p._id.startsWith('product-'));
      if (structured) {
        // Keep the structured one, delete the other(s)
        for (const p of list) {
          if (p._id !== structured._id) {
            console.log(`  Flagged for deletion: "${p.title}" (${p._id})`);
            toDelete.push(p._id);
          }
        }
      } else {
        // Keep the first one, delete the rest
        const keep = list[0];
        for (let i = 1; i < list.length; i++) {
          console.log(`  Flagged for deletion: "${list[i].title}" (${list[i]._id})`);
          toDelete.push(list[i]._id);
        }
      }
    }
  }

  if (toDelete.length === 0) {
    console.log("No duplicates found to delete.");
    return;
  }

  console.log(`Deleting ${toDelete.length} duplicate documents...`);
  const transaction = client.transaction();
  for (const id of toDelete) {
    transaction.delete(id);
  }
  await transaction.commit();
  console.log("Cleanup complete!");
}

clean();
