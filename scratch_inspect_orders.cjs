const { createClient } = require('@sanity/client');

const token = 'skf0BXs8tuM5kyHPhuV1KyGrFeA345cjlUjdLd3pz40cBZqbZJA5LsCJtZGSHXYdOoon61gJuUu5FukZd';

const client = createClient({
  projectId: '5co5ooqr',
  dataset: 'production',
  token: token,
  useCdn: false,
  apiVersion: '2021-10-21',
});

async function inspectAllOrders() {
  try {
    const orders = await client.fetch('*[_type == "order"]');
    console.log(`Found ${orders.length} order documents in Sanity DB.`);
    orders.forEach(o => {
      console.log("ID:", o._id);
      console.log("  orderId:", o.orderId);
      console.log("  orderNumber:", o.orderNumber);
      console.log("  stripeSessionId:", o.stripeSessionId);
      console.log("------------------");
    });
  } catch (err) {
    console.error("Fetch orders failed:", err.message);
  }
}

inspectAllOrders();
