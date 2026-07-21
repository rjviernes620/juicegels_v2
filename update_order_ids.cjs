const { createClient } = require('@sanity/client');

const token = 'skf0BXs8tuM5kyHPhuV1KyGrFeA345cjlUjdLd3pz40cBZqbZJA5LsCJtZGSHXYdOoon61gJuUu5FukZd';

const client = createClient({
  projectId: '5co5ooqr',
  dataset: 'production',
  token: token,
  useCdn: false,
  apiVersion: '2021-10-21',
});

async function updateOrders() {
  console.log("Starting Order ID mapping migration...");
  try {
    const orders = await client.fetch('*[_type == "order"]');
    console.log(`Found ${orders.length} order documents in Sanity DB.`);

    for (const order of orders) {
      const currentOrderId = order.orderId;
      const currentOrderNumber = order.orderNumber;

      console.log(`Processing Order document ${order._id}:`);
      console.log(`  Current orderId: "${currentOrderId}"`);
      console.log(`  Current orderNumber: "${currentOrderNumber}"`);

      const patches = {};

      if (currentOrderNumber) {
        patches.orderId = currentOrderNumber;
      }

      if (currentOrderId && currentOrderId.startsWith('cs_')) {
        patches.stripeSessionId = currentOrderId;
      }

      if (Object.keys(patches).length > 0) {
        console.log(`  Applying patches:`, patches);
        await client.patch(order._id).set(patches).commit();
        console.log(`  Successfully updated ${order._id}.`);
      } else {
        console.log(`  No updates needed for ${order._id}.`);
      }
    }

    console.log("Order ID mapping migration complete!");
  } catch (err) {
    console.error("Migration failed:", err.message);
  }
}

updateOrders();
