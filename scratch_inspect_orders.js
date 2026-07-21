const { createClient } = require('@sanity/client');

const token = 'skf0BXs8tuM5kyHPhuV1KyGrFeA345cjlUjdLd3pz40cBZqbZJA5LsCJtZGSHXYdOoon61gJuUu5FukZd';

const client = createClient({
  projectId: '5co5ooqr',
  dataset: 'production',
  token: token,
  useCdn: false,
  apiVersion: '2021-10-21',
});

async function inspectOrders() {
  try {
    const orders = await client.fetch('*[_type == "order"]{_id, orderId, orderNumber, testOrder, createdAt}');
    console.log(`Found ${orders.length} order documents in Sanity DB.`);
    console.log("Sample order documents:");
    console.log(JSON.stringify(orders.slice(0, 15), null, 2));
  } catch (err) {
    console.error("Fetch orders failed:", err.message);
  }
}

inspectOrders();
