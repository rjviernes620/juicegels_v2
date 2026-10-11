export type NailLength = "Short" | "Medium" | "Long";

export type Product = {
  id: string;
  groupId: string;
  name: string;
  price: number;
  description: string;
  descriptionBlocks?: any[];
  image: string;
  extraImages: string[];
  shapes: string[];
  tags: string[];
  shape: string;
  length: NailLength;
  collection?: string;
  orderRank?: string;
  videoUrl?: string;
  tiktokUrl?: string;
};

const DEFAULT_SHAPES = ["Square", "Oval", "Stiletto", "Coffin", "Almond"];
const DEFAULT_LENGTHS = ["Short", "Medium", "Long"] as const;

export const HALLOWEEN_SET_IDS = new Set([2447, 2462, 2477, 2492, 1277, 1247, 196, 1262]);
export const HALLOWEEN_SET_NAMES = new Set([
  "booquette",
  "scream queen",
  "hello horror",
  "boo belle",
  "pink-o-ween",
  "sparkle scream",
  "pearl noir",
  "midnight muse"
]);

export function isHalloweenSet(productIdOrId: number | string, title?: string): boolean {
  if (typeof productIdOrId === "number") {
    if (HALLOWEEN_SET_IDS.has(productIdOrId)) return true;
  } else if (typeof productIdOrId === "string") {
    const num = parseInt(productIdOrId.replace(/\D/g, ""), 10);
    if (HALLOWEEN_SET_IDS.has(num)) return true;
  }
  if (title && HALLOWEEN_SET_NAMES.has(title.trim().toLowerCase())) return true;
  return false;
}

declare const __SANITY_PROJECT_ID__: string;
declare const __SANITY_DATASET__: string;

const SANITY_PROJECT_ID = (typeof __SANITY_PROJECT_ID__ !== 'undefined' && __SANITY_PROJECT_ID__) || "5co5ooqr";
const SANITY_DATASET = (typeof __SANITY_DATASET__ !== 'undefined' && __SANITY_DATASET__) || "production";

interface SanityHotspot {
  x: number;
  y: number;
  height?: number;
  width?: number;
}

interface SanityCrop {
  top: number;
  bottom: number;
  left: number;
  right: number;
}

export function buildSanityImageUrl(
  ref: string,
  hotspot?: SanityHotspot | null,
  crop?: SanityCrop | null,
  targetW?: number,
  targetH?: number
): string {
  if (!ref) return "";
  const parts = ref.split("-");
  if (parts.length < 4) return "";
  const id = parts[1];
  const dims = parts[2];
  const ext = parts[3];

  const baseUrl = `https://cdn.sanity.io/images/${SANITY_PROJECT_ID}/${SANITY_DATASET}/${id}-${dims}.${ext}`;

  if (!targetW && !targetH && !hotspot && !crop) {
    return baseUrl;
  }

  const [imgW, imgH] = dims.split("x").map(Number);
  const params = new URLSearchParams();

  // If image dimensions are known and crop/hotspot is provided
  if (imgW && imgH && (crop || hotspot)) {
    const cropLeft = crop ? Math.round(crop.left * imgW) : 0;
    const cropTop = crop ? Math.round(crop.top * imgH) : 0;
    const cropRight = crop ? Math.round(crop.right * imgW) : 0;
    const cropBottom = crop ? Math.round(crop.bottom * imgH) : 0;

    const croppedW = imgW - cropLeft - cropRight;
    const croppedH = imgH - cropTop - cropBottom;

    if (crop) {
      params.set("rect", `${cropLeft},${cropTop},${croppedW},${croppedH}`);
    }

    if (hotspot) {
      const fpX = crop
        ? (hotspot.x * imgW - cropLeft) / croppedW
        : hotspot.x;
      const fpY = crop
        ? (hotspot.y * imgH - cropTop) / croppedH
        : hotspot.y;

      params.set("fp-x", fpX.toFixed(4));
      params.set("fp-y", fpY.toFixed(4));
      params.set("crop", "focalpoint");
    }
  }

  if (targetW) params.set("w", String(targetW));
  if (targetH) params.set("h", String(targetH));
  params.set("fit", "crop");
  params.set("auto", "format");

  return `${baseUrl}?${params.toString()}`;
}

function intValue(val: any): number {
  const parsed = parseInt(val, 10);
  return isNaN(parsed) ? 0 : parsed;
}

function floatValue(val: any): number {
  const parsed = parseFloat(val);
  return isNaN(parsed) ? 0 : parsed;
}

function blocksToPlainText(blocks: any[]): string {
  if (!Array.isArray(blocks)) {
    return typeof blocks === 'string' ? blocks : '';
  }
  return blocks
    .map(block => {
      if (block._type !== 'block' || !block.children) {
        return '';
      }
      return block.children.map((child: any) => child.text).join('');
    })
    .join('\n');
}

export function parseSanityProducts(sanityProducts: any[]): Product[] {
  const products: Product[] = [];

  for (const sp of sanityProducts) {
    const title = sp.title || "Product";
    const productId = intValue(sp.productId) || 1;
    const price = floatValue(sp.price) || 0;
    const defaultDescription = "All Nail Sets Include: 1x mini nail file, 1x cuticle pusher, 1x mini buffer block, 1x Nail Glue";
    
    let plainDescription = "";
    let descriptionBlocks: any[] | undefined = undefined;

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
    const imageHotspot = sp.image?.hotspot || null;
    const imageCrop = sp.image?.crop || null;
    // Card thumbnail: 400×320 (2× for HiDPI) – Sanity CDN crops around the focal point with WebP auto-format
    const imageUrl = buildSanityImageUrl(imageRef, imageHotspot, imageCrop, 400, 320);

    const image2Ref = sp.image2?.asset?._ref || "";
    const image2Url = image2Ref ? buildSanityImageUrl(image2Ref, sp.image2?.hotspot, sp.image2?.crop, 800, 800) : "";

    const image3Ref = sp.image3?.asset?._ref || "";
    const image3Url = image3Ref ? buildSanityImageUrl(image3Ref, sp.image3?.hotspot, sp.image3?.crop, 800, 800) : "";

    const rawTags = Array.isArray(sp.tags) ? sp.tags.filter(Boolean) : [];
    const isHalloween = isHalloweenSet(productId, title);
    const resolvedCollection = isHalloween
      ? "Juice Ghouls Collection"
      : sp.collection === "Halloween Collection"
        ? "Juice Ghouls Collection"
        : (sp.collection || undefined);
    const tags = isHalloween && !rawTags.includes("Halloween") ? [...rawTags, "Halloween"] : rawTags;
    const orderRank = sp.orderRank || "";
    const videoUrl = sp.videoUrl || "";
    const tiktokUrl = sp.tiktokUrl || "";

    const isSingle = title.toLowerCase() === "nail sizing guide" || productId === 286;

    if (isSingle) {
      const extraImages: string[] = [];
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
        collection: resolvedCollection,
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
            collection: resolvedCollection,
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

const PRODUCTS_CACHE_KEY = "juicegels_cached_products_v2";
const TRENDING_CACHE_KEY = "juicegels_cached_trending_v2";
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes

export async function loadProducts(forceRefresh = false): Promise<Product[]> {
  if (!forceRefresh && typeof window !== "undefined" && window.sessionStorage) {
    try {
      const cached = window.sessionStorage.getItem(PRODUCTS_CACHE_KEY);
      if (cached) {
        const { timestamp, data } = JSON.parse(cached);
        if (Date.now() - timestamp < CACHE_TTL_MS && Array.isArray(data) && data.length > 0) {
          return data;
        }
      }
    } catch {
      // Ignore cache parse failure
    }
  }

  try {
    const query = encodeURIComponent(
      '*[_type == "product" && !(_id in path("drafts.**"))] { ..., "videoUrl": video.asset->url, image { asset, hotspot, crop }, image2 { asset, hotspot, crop }, image3 { asset, hotspot, crop } }'
    );
    const url = `https://${SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${SANITY_DATASET}?query=${query}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Sanity API returned status ${response.status}`);
    }

    const data = await response.json();
    const sanityProducts = data.result || [];
    if (sanityProducts.length === 0) {
      throw new Error("No products found in Sanity database.");
    }
    const products = parseSanityProducts(sanityProducts);

    if (typeof window !== "undefined" && window.sessionStorage) {
      try {
        window.sessionStorage.setItem(PRODUCTS_CACHE_KEY, JSON.stringify({ timestamp: Date.now(), data: products }));
      } catch {
        // Ignore cache storage failure
      }
    }

    return products;
  } catch (error) {
    console.error("Sanity load failed:", error);
    throw new Error(
      "The website is currently down. Please contact juicegels on Instagram if you have a pre-existing order or for further information."
    );
  }
}

export async function loadTrendingProductIds(forceRefresh = false): Promise<number[]> {
  if (!forceRefresh && typeof window !== "undefined" && window.sessionStorage) {
    try {
      const cached = window.sessionStorage.getItem(TRENDING_CACHE_KEY);
      if (cached) {
        const { timestamp, data } = JSON.parse(cached);
        if (Date.now() - timestamp < CACHE_TTL_MS && Array.isArray(data)) {
          return data;
        }
      }
    } catch {
      // Ignore cache parse failure
    }
  }

  try {
    const query = encodeURIComponent(
      '*[_type == "trendingDesigns" && _id == "trendingDesigns"][0]{ "items": products[]->{ productId } }'
    );
    const url = `https://${SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${SANITY_DATASET}?query=${query}`;

    const response = await fetch(url);

    if (!response.ok) {
      console.warn(`Trending designs fetch returned status ${response.status}`);
      return [];
    }

    const data = await response.json();
    const items = data.result?.items;

    if (!Array.isArray(items) || items.length === 0) {
      return [];
    }

    const trendingIds = items
      .map((item: any) => (typeof item?.productId === "number" ? item.productId : null))
      .filter((id: number | null): id is number => id !== null);

    if (typeof window !== "undefined" && window.sessionStorage) {
      try {
        window.sessionStorage.setItem(TRENDING_CACHE_KEY, JSON.stringify({ timestamp: Date.now(), data: trendingIds }));
      } catch {
        // Ignore cache storage failure
      }
    }

    return trendingIds;
  } catch (error) {
    console.warn("Failed to load trending designs:", error);
    return [];
  }
}