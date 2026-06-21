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

const coinPath = path.join(imagesDir, 'coin.jpeg');
const nailsizePath = path.join(imagesDir, 'nailsize.jpg');
const tapePath = path.join(imagesDir, 'tape.jpg');

async function migrate() {
  console.log("Starting Extra Images Migration...");
  console.log("Images directory resolved to:", imagesDir);

  if (!fs.existsSync(coinPath)) {
    console.error(`ERROR: coin.jpeg not found at: ${coinPath}`);
    return;
  }
  if (!fs.existsSync(nailsizePath)) {
    console.error(`ERROR: nailsize.jpg not found at: ${nailsizePath}`);
    return;
  }
  if (!fs.existsSync(tapePath)) {
    console.error(`ERROR: tape.jpg not found at: ${tapePath}`);
    return;
  }

  try {
    console.log("Uploading coin.jpeg...");
    const coinAsset = await client.assets.upload('image', fs.createReadStream(coinPath), {
      filename: 'coin.jpeg'
    });
    console.log("Uploaded coin.jpeg as asset:", coinAsset._id);

    console.log("Uploading nailsize.jpg...");
    const nailsizeAsset = await client.assets.upload('image', fs.createReadStream(nailsizePath), {
      filename: 'nailsize.jpg'
    });
    console.log("Uploaded nailsize.jpg as asset:", nailsizeAsset._id);

    console.log("Uploading tape.jpg...");
    const tapeAsset = await client.assets.upload('image', fs.createReadStream(tapePath), {
      filename: 'tape.jpg'
    });
    console.log("Uploaded tape.jpg as asset:", tapeAsset._id);

    const products = await client.fetch('*[_type == "product"]');
    console.log(`Found ${products.length} products to update.`);

    for (const prod of products) {
      console.log(`Updating product: "${prod.title}" (${prod._id})`);
      
      await client.patch(prod._id)
        .set({
          image2: {
            _type: 'image',
            asset: {
              _type: 'reference',
              _ref: coinAsset._id
            }
          },
          image3: {
            _type: 'image',
            asset: {
              _type: 'reference',
              _ref: nailsizeAsset._id
            }
          },
          image4: {
            _type: 'image',
            asset: {
              _type: 'reference',
              _ref: tapeAsset._id
            }
          }
        })
        .commit();
      
      console.log(`  Updated "${prod.title}" successfully.`);
    }

    console.log("Migration complete!");
  } catch (err) {
    console.error("Migration failed:", err);
  }
}

migrate();
