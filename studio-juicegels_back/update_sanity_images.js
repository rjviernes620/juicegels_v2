const fs = require('fs');
const path = require('path');
const { createClient } = require('@sanity/client');

const token = 'skf0BXs8tuM5kyHPhuV1KyGrFeA345cjlUjdLd3pz40cBZqbZJA5LsCJtZGSHXYdOoon61gJuUu5FukZd';

const client = createClient({
  projectId: '5co5ooqr',
  dataset: 'production',
  token: token,
  useCdn: false,
  apiVersion: '2021-10-21',
});

const rootDir = path.resolve(__dirname, '..');
const imagesDir = path.join(rootDir, 'images');

const nail2Path = path.join(imagesDir, 'Nail 2.jpeg');
const coin2Path = path.join(imagesDir, 'coin 2.jpeg');

async function migrate() {
  console.log("Starting Image Update Migration...");
  console.log("Images directory resolved to:", imagesDir);

  if (!fs.existsSync(nail2Path)) {
    console.error(`ERROR: Nail 2.jpeg not found at: ${nail2Path}`);
    process.exit(1);
  }
  if (!fs.existsSync(coin2Path)) {
    console.error(`ERROR: coin 2.jpeg not found at: ${coin2Path}`);
    process.exit(1);
  }

  try {
    console.log("Uploading Nail 2.jpeg...");
    const nail2Asset = await client.assets.upload('image', fs.createReadStream(nail2Path), {
      filename: 'Nail 2.jpeg'
    });
    console.log("Uploaded Nail 2.jpeg as asset:", nail2Asset._id);

    console.log("Uploading coin 2.jpeg...");
    const coin2Asset = await client.assets.upload('image', fs.createReadStream(coin2Path), {
      filename: 'coin 2.jpeg'
    });
    console.log("Uploaded coin 2.jpeg as asset:", coin2Asset._id);

    const products = await client.fetch('*[_type == "product"]');
    console.log(`Found ${products.length} product entries in Sanity database to update.`);

    for (const prod of products) {
      console.log(`Updating product: "${prod.title}" (${prod._id})`);
      
      await client.patch(prod._id)
        .set({
          image2: {
            _type: 'image',
            asset: {
              _type: 'reference',
              _ref: nail2Asset._id
            }
          },
          image3: {
            _type: 'image',
            asset: {
              _type: 'reference',
              _ref: coin2Asset._id
            }
          }
        })
        .unset(['image4'])
        .commit();
      
      console.log(`  Successfully updated "${prod.title}" (${prod._id}).`);
    }

    console.log("Sanity DB Image Migration complete!");
  } catch (err) {
    console.error("Migration failed:", err);
    process.exit(1);
  }
}

migrate();
