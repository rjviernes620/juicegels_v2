export type NailLength = "Short" | "Medium" | "Long";

export type Product = {
  id: string;
  groupId: string;
  name: string;
  price: number;
  description: string;
  image: string;
  extraImages: string[];
  shapes: string[];
  tags: string[];
  shape: string;
  length: NailLength;
};

const DEFAULT_SHAPES = ["Square", "Oval", "Stiletto", "Coffin", "Almond"];
const DEFAULT_LENGTHS = ["Short", "Medium", "Long"] as const;

declare const __SANITY_PROJECT_ID__: string;
declare const __SANITY_DATASET__: string;

const SANITY_PROJECT_ID = (typeof __SANITY_PROJECT_ID__ !== 'undefined' && __SANITY_PROJECT_ID__) || "5co5ooqr";
const SANITY_DATASET = (typeof __SANITY_DATASET__ !== 'undefined' && __SANITY_DATASET__) || "production";

function buildSanityImageUrl(ref: string): string {
  if (!ref) return "";
  const parts = ref.split("-");
  if (parts.length < 4) return "";
  const id = parts[1];
  const dims = parts[2];
  const ext = parts[3];
  return `https://cdn.sanity.io/images/${SANITY_PROJECT_ID}/${SANITY_DATASET}/${id}-${dims}.${ext}`;
}

function intValue(val: any): number {
  const parsed = parseInt(val, 10);
  return isNaN(parsed) ? 0 : parsed;
}

function floatValue(val: any): number {
  const parsed = parseFloat(val);
  return isNaN(parsed) ? 0 : parsed;
}

function parseSanityProducts(sanityProducts: any[]): Product[] {
  const products: Product[] = [];

  for (const sp of sanityProducts) {
    const title = sp.title || "Product";
    const productId = intValue(sp.productId) || 1;
    const price = floatValue(sp.price) || 0;
    const defaultDescription = "All Nail Sets Include: 1x mini nail file, 1x cuticle pusher, 1x mini buffer block, 1x Nail Glue";
    const description = (sp.description || defaultDescription).replace(/\n/g, " ").replace(/\s+/g, " ").trim();
    const imageRef = sp.image?.asset?._ref || "";
    const imageUrl = buildSanityImageUrl(imageRef);
    
    const image2Ref = sp.image2?.asset?._ref || "";
    const image2Url = image2Ref ? buildSanityImageUrl(image2Ref) : "";

    const image3Ref = sp.image3?.asset?._ref || "";
    const image3Url = image3Ref ? buildSanityImageUrl(image3Ref) : "";

    const image4Ref = sp.image4?.asset?._ref || "";
    const image4Url = image4Ref ? buildSanityImageUrl(image4Ref) : "";

    const tags = Array.isArray(sp.tags) ? sp.tags.filter(Boolean) : [];

    const isSingle = title.toLowerCase() === "nail sizing guide" || productId === 286;

    if (isSingle) {
      const extraImages: string[] = [];
      if (image2Url) extraImages.push(image2Url);
      if (image3Url) extraImages.push(image3Url);
      if (image4Url) extraImages.push(image4Url);

      products.push({
        id: `JUICEGELS-${productId.toString().padStart(4, '0')}`,
        groupId: "juicegels_nailsizingguide",
        name: title,
        price: price,
        description: description,
        image: imageUrl,
        extraImages: extraImages,
        shapes: ["Square"],
        tags: tags,
        shape: "Square",
        length: "Short"
      });
    } else {
      const groupId = `juicegels_${title.trim().toLowerCase().replace(/[^a-z0-9]/g, '')}set`;
      
      const extraImages = [
        image2Url || "images/coin.jpeg",
        image3Url || "images/nailsize.jpg",
        image4Url || "images/tape.jpg"
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
            image: imageUrl,
            extraImages: extraImages,
            shapes: DEFAULT_SHAPES,
            tags: tags,
            shape: shape,
            length: length
          });
        });
      });
    }
  }

  return products;
}

export async function loadProducts(): Promise<Product[]> {
  try {
    const query = encodeURIComponent(`*[_type == "product" && !(_id in path("drafts.**"))]`);
    const url = `https://${SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${SANITY_DATASET}?query=${query}`;

    const response = await fetch(url, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Sanity API returned status ${response.status}`);
    }

    const data = await response.json();
    const sanityProducts = data.result || [];
    if (sanityProducts.length === 0) {
      throw new Error("No products found in Sanity database.");
    }
    return parseSanityProducts(sanityProducts);
  } catch (error) {
    console.error("Sanity load failed:", error);
    throw new Error(
      "The website is currently down. Please contact juicegels on Instagram if you have a pre-existing order or for further information."
    );
  }
}