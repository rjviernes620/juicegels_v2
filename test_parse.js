const SANITY_PROJECT_ID = "5co5ooqr";
const SANITY_DATASET = "production";

function buildSanityImageUrl(ref) {
  if (!ref) return "";
  const parts = ref.split("-");
  if (parts.length < 4) return "";
  const id = parts[1];
  const dims = parts[2];
  const ext = parts[3];
  return `https://cdn.sanity.io/images/${SANITY_PROJECT_ID}/${SANITY_DATASET}/${id}-${dims}.${ext}`;
}

function intValue(val) {
  const parsed = parseInt(val, 10);
  return isNaN(parsed) ? 0 : parsed;
}

function floatValue(val) {
  const parsed = parseFloat(val);
  return isNaN(parsed) ? 0 : parsed;
}

function blocksToPlainText(blocks) {
  if (!Array.isArray(blocks)) {
    return typeof blocks === 'string' ? blocks : '';
  }
  return blocks
    .map(block => {
      if (block._type !== 'block' || !block.children) {
        return '';
      }
      return block.children.map((child) => child.text).join('');
    })
    .join('\n');
}

const DEFAULT_SHAPES = ["Square", "Oval", "Stiletto", "Coffin", "Almond"];
const DEFAULT_LENGTHS = ["Short", "Medium", "Long"];

function parseSanityProducts(sanityProducts) {
  const products = [];

  for (const sp of sanityProducts) {
    const title = sp.title || "Product";
    const productId = intValue(sp.productId) || 1;
    const price = floatValue(sp.price) || 0;
    const defaultDescription = "All Nail Sets Include: 1x mini nail file, 1x cuticle pusher, 1x mini buffer block, 1x Nail Glue";
    
    let plainDescription = "";
    let descriptionBlocks = undefined;

    if (Array.isArray(sp.description)) {
      descriptionBlocks = sp.description;
      plainDescription = blocksToPlainText(sp.description);
    } else if (typeof sp.description === 'string') {
      plainDescription = sp.description;
    }

    if (!plainDescription) {
      plainDescription = defaultDescription;
    }

    const description = plainDescription.replace(/\n/g, " ").replace(/\s+/g, " ").trim();
    const imageRef = sp.image?.asset?._ref || "";
    const imageUrl = buildSanityImageUrl(imageRef);
    
    const image2Ref = sp.image2?.asset?._ref || "";
    const image2Url = image2Ref ? buildSanityImageUrl(image2Ref) : "";

    const image3Ref = sp.image3?.asset?._ref || "";
    const image3Url = image3Ref ? buildSanityImageUrl(image3Ref) : "";

    const tags = Array.isArray(sp.tags) ? sp.tags.filter(Boolean) : [];
    const orderRank = sp.orderRank || "";
    const videoUrl = sp.videoUrl || "";
    const tiktokUrl = sp.tiktokUrl || "";

    const isSingle = title.toLowerCase() === "nail sizing guide" || productId === 286;

    if (isSingle) {
      const extraImages = [];
      if (image2Url) extraImages.push(image2Url);
      if (image3Url) extraImages.push(image3Url);

      products.push({
        id: `JUICEGELS-${productId.toString().padStart(4, '0')}`,
        groupId: "juicegels_nailsizingguide",
        name: title,
        price: price,
        description: description,
        descriptionBlocks: descriptionBlocks,
        image: imageUrl,
        extraImages: extraImages,
        shapes: ["Square"],
        tags: tags,
        shape: "Square",
        length: "Short",
        collection: sp.collection || undefined,
        orderRank: orderRank,
        videoUrl: videoUrl,
        tiktokUrl: tiktokUrl
      });
    } else {
      const groupId = `juicegels_${title.trim().toLowerCase().replace(/[^a-z0-9]/g, '')}set`;
      
      const extraImages = [
        image2Url || "images/Nail 2.jpeg",
        image3Url || "images/coin 2.jpeg"
      ];
      
      DEFAULT_SHAPES.forEach((shape, sIdx) => {
        DEFAULT_LENGTHS.forEach((length, lIdx) => {
          const offset = sIdx * 3 + lIdx;
          const idNum = productId + offset;
          const variantId = `JUICEGELS-${idNum.toString().padStart(4, '0')}`;
          
          products.push({
            id: variantId,
            groupId: groupId,
            name: title,
            price: price,
            description: description,
            descriptionBlocks: descriptionBlocks,
            image: imageUrl,
            extraImages: extraImages,
            shapes: DEFAULT_SHAPES,
            tags: tags,
            shape: shape,
            length: length,
            collection: sp.collection || undefined,
            orderRank: orderRank,
            videoUrl: videoUrl,
            tiktokUrl: tiktokUrl
          });
        });
      });
    }
  }

  return products;
}

async function test() {
  const query = encodeURIComponent(`*[_type == "product" && !(_id in path("drafts.**"))] {
    ...,
    "videoUrl": video.asset->url
  }`);
  const url = `https://${SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${SANITY_DATASET}?query=${query}`;
  
  console.log("Fetching from Sanity...");
  const res = await fetch(url);
  console.log("Status:", res.status);
  const data = await res.json();
  if (res.ok) {
    const raw = data.result || [];
    console.log("Raw count:", raw.length);
    const parsed = parseSanityProducts(raw);
    console.log("Parsed count:", parsed.length);
    console.log("First parsed product id:", parsed[0]?.id);
    
    // Check if any product has an invalid ID, groupId, name, price, shapes, or image
    let invalidCount = 0;
    for (const p of parsed) {
      if (!p.id || !p.groupId || !p.name || typeof p.price !== 'number' || !p.image) {
        console.warn("Invalid product found:", p);
        invalidCount++;
      }
    }
    console.log("Invalid products count:", invalidCount);
    
    console.log("Includes JUICEGELS-1202:", parsed.some(p => p.id === 'JUICEGELS-1202'));
  } else {
    console.error("Error:", data);
  }
}

test().catch(console.error);
