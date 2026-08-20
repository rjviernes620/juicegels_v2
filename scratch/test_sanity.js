const SANITY_PROJECT_ID = "5co5ooqr";
const SANITY_DATASET = "production";

const DEFAULT_SHAPES = ["Square", "Oval", "Stiletto", "Coffin", "Almond"];
const DEFAULT_LENGTHS = ["Short", "Medium", "Long"];

function buildSanityImageUrl(ref, hotspot, crop, targetW, targetH) {
  if (!ref) return "";
  const parts = ref.split("-");
  if (parts.length < 4) return "";
  const id = parts[1];
  const dims = parts[2];
  const ext = parts[3];
  return `https://cdn.sanity.io/images/${SANITY_PROJECT_ID}/${SANITY_DATASET}/${id}-${dims}.${ext}`;
}

function parseSanityProducts(sanityProducts) {
  const products = [];
  for (const sp of sanityProducts) {
    const title = sp.title || "Untitled Set";
    const price = typeof sp.price === "number" ? sp.price : 18.0;
    const productId = typeof sp.productId === "number" ? sp.productId : 0;

    const imageRef = sp.image?.asset?._ref || "";
    const imageUrl = buildSanityImageUrl(imageRef, sp.image?.hotspot, sp.image?.crop, 400, 320);

    const isSingle = title.toLowerCase() === "nail sizing guide" || productId === 286;

    if (isSingle) {
      products.push({
        id: `JUICEGELS-${productId.toString().padStart(4, "0")}`,
        name: title,
        price: price,
        image: imageUrl
      });
    } else {
      DEFAULT_SHAPES.forEach((shape, sIdx) => {
        DEFAULT_LENGTHS.forEach((length, lIdx) => {
          const offset = sIdx * 3 + lIdx;
          const idNum = productId + offset;
          const variantId = `JUICEGELS-${idNum.toString().padStart(4, "0")}`;
          products.push({
            id: variantId,
            name: title,
            price: price,
            image: imageUrl
          });
        });
      });
    }
  }
  return products;
}

const STATIC_VIDEO_SETS = [
  { id: "starlit", title: "Handcrafting Starlit Tips", productId: "JUICEGELS-1202" },
  { id: "bowcrush", title: "Handcrafting Bow Crush", productId: "JUICEGELS-1127" },
  { id: "popstartips", title: "Handcrafting Pop Star Tips", productId: "JUICEGELS-0872" },
  { id: "mochabluemuse", title: "Handcrafting Mocha Blue Muse", productId: "JUICEGELS-1142" },
  { id: "evergreensparkles", title: "Handcrafting Evergreen Sparkles", productId: "JUICEGELS-1187" },
  { id: "sparklescream", title: "Handcrafting Sparkle Scream", productId: "JUICEGELS-1247" },
  { id: "pinkoween", title: "Handcrafting Pink-o-ween", productId: "JUICEGELS-1277" },
  { id: "cocoaquilt", title: "Handcrafting Cocoa Quilt", productId: "JUICEGELS-1292" },
  { id: "burgundybling", title: "Handcrafting Burgundy Bling", productId: "JUICEGELS-1352" },
  { id: "dolcedot", title: "Handcrafting Dolce Dot", productId: "JUICEGELS-1367" },
  { id: "velourembre", title: "Handcrafting Velour Embrè", productId: "JUICEGELS-1382" },
  { id: "terraflora", title: "Handcrafting Terra Flora", productId: "JUICEGELS-0287" },
  { id: "pinkeclipse", title: "Handcrafting Pink Eclipse", productId: "JUICEGELS-1427" },
  { id: "petalpearl", title: "Handcrafting Petal Pearl", productId: "JUICEGELS-0302" },
  { id: "sunsethaze", title: "Handcrafting Sunset Haze", productId: "JUICEGELS-0422" },
  { id: "sundownshine", title: "Handcrafting Sundown Shine", productId: "JUICEGELS-0407" },
  { id: "petalflora", title: "Handcrafting Petal Flora", productId: "JUICEGELS-0211" },
  { id: "pinkopulence", title: "Handcrafting Pink Opulence", productId: "JUICEGELS-0241" },
  { id: "kittyconstellation", title: "Handcrafting Kitty Constellation", productId: "JUICEGELS-1502" },
  { id: "tropicalblush", title: "Handcrafting Tropical Blush", productId: "JUICEGELS-0662" },
  { id: "rubybling", title: "Handcrafting Ruby Bling", productId: "JUICEGELS-1532" },
  { id: "gildedgeode", title: "Handcrafting Gilded Geode", productId: "JUICEGELS-0542" }
];

async function main() {
  const query = encodeURIComponent(
    '*[_type == "product" && !(_id in path("drafts.**"))] { _id, title, productId, image { asset } }'
  );
  const url = `https://${SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${SANITY_DATASET}?query=${query}`;
  const res = await fetch(url);
  const data = await res.json();
  const products = parseSanityProducts(data.result || []);

  const results = {};
  for (const set of STATIC_VIDEO_SETS) {
    const matched = products.find(p => p.id === set.productId);
    results[set.id] = matched ? matched.image : "";
  }
  console.log(JSON.stringify(results, null, 2));
}

main().catch(console.error);
