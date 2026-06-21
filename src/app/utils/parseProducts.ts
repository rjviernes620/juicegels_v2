export type NailLength = "Short" | "Medium" | "Long";

declare const __PRODUCTS_SHEET_SHARE_URL__: string;

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
const DEFAULT_PRODUCTS_SHEET_SHARE_URL = "https://docs.google.com/spreadsheets/d/12H5OJ94iSaoe5yOwkJnUuSHpRc0nA0GR1Tm7_FBzbLM/edit?usp=sharing";
const PRODUCTS_SHEET_SHARE_URL = __PRODUCTS_SHEET_SHARE_URL__ || DEFAULT_PRODUCTS_SHEET_SHARE_URL;

declare const __SANITY_PROJECT_ID__: string;
declare const __SANITY_DATASET__: string;

const SANITY_PROJECT_ID = (typeof __SANITY_PROJECT_ID__ !== 'undefined' && __SANITY_PROJECT_ID__) || "PLACEHOLDER";
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


function normalizeGroupKey(value: string): string {
  return value.trim().toLowerCase();
}

function buildGoogleSheetCsvUrl(shareUrl: string): string {
  const match = shareUrl.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);

  if (!match) {
    throw new Error("Invalid Google Sheets URL.");
  }

  return `https://docs.google.com/spreadsheets/d/${match[1]}/export?format=csv`;
}

const PRODUCTS_SHEET_CSV_URL = buildGoogleSheetCsvUrl(PRODUCTS_SHEET_SHARE_URL);

function normalizeItemGroupId(value: string, shape: string): string {
  const normalizedValue = normalizeGroupKey(value);
  const normalizedShape = normalizeGroupKey(shape).replace(/\s+/g, "_");

  if (normalizedShape && normalizedValue.endsWith(`_${normalizedShape}`)) {
    return normalizedValue.slice(0, -(normalizedShape.length + 1));
  }

  return normalizedValue;
}

function deriveGroupId(row: string[], getColumn: (row: string[], name: string) => string, id: string): string {
  const rawGroupId = getColumn(row, "item_group_id");
  if (rawGroupId) {
    return normalizeItemGroupId(rawGroupId, getColumn(row, "shape"));
  }

  const rootLink = getColumn(row, "root links");
  const rootLinkMatch = rootLink.match(/\/product\/([^?&#/]+)/);
  if (rootLinkMatch?.[1]) {
    return normalizeGroupKey(rootLinkMatch[1]);
  }

  const name = getColumn(row, "TITLE");
  if (name) {
    return normalizeGroupKey(name);
  }

  return id.trim();
}

function parseCSVLine(line: string): string[] {
  const fields: string[] = [];
  let cur = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const ch = line[i];

    if (ch === '"') {
      if (inQuotes && line[i + 1] === '"') {
        cur += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (ch === "," && !inQuotes) {
      fields.push(cur);
      cur = "";
    } else {
      cur += ch;
    }
  }

  fields.push(cur);
  return fields;
}

function splitCSVRows(raw: string): string[] {
  const rows: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < raw.length; i++) {
    const ch = raw[i];

    if (ch === '"') {
      if (inQuotes && raw[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
      current += ch;
    } else if ((ch === "\n" || ch === "\r") && !inQuotes) {
      if (ch === "\r" && raw[i + 1] === "\n") i++;
      if (current.trim()) rows.push(current);
      current = "";
    } else {
      current += ch;
    }
  }

  if (current.trim()) rows.push(current);
  return rows;
}

function parseProductsCsv(csvRaw: string): Product[] {
  const rows = splitCSVRows(csvRaw);
  if (rows.length === 0) return [];

  const header = parseCSVLine(rows[0]).map((h) => h.trim());
  const col = (row: string[], name: string) => {
    const i = header.indexOf(name);
    return i >= 0 ? row[i]?.trim() ?? "" : "";
  };

  const products: Product[] = [];

  for (let i = 1; i < rows.length; i++) {
    const row = parseCSVLine(rows[i]);
    const id = col(row, "id");
    if (!id) continue;

    if (col(row, "availability") === "out of stock") continue;

    const groupId = deriveGroupId(row, col, id);
    const name = col(row, "TITLE");
    const price = parseFloat(col(row, "PRICE")) || 0;
    const description = col(row, "DESCRIPTION")
      .replace(/\n/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    const imageKeys = [
      "IMAGE1",
      "IMAGE2",
      "IMAGE3",
      "IMAGE4",
      "IMAGE5",
      "IMAGE6",
      "IMAGE7",
      "IMAGE8",
      "IMAGE9",
      "IMAGE10",
    ];

    const allImages = imageKeys
      .map((key) => (col(row, key) || "").trim())
      .filter(Boolean);

    const image = allImages[0] || "";
    const extraImages = allImages.slice(1);

    const tagStr = col(row, "TAGS");
    const tags = tagStr
      ? tagStr.split(",").map((t) => t.trim()).filter(Boolean)
      : [];

    const varType = col(row, "VARIATION 1 TYPE") || col(row, "VARIATION 2 TYPE");
    const varName = col(row, "VARIATION 1 NAME") || col(row, "VARIATION 2 NAME");
    const varValues = col(row, "VARIATION 1 VALUES") || col(row, "VARIATION 2 VALUES");

    let shapes = DEFAULT_SHAPES;
    if (varName === "Nail Shapes" && varValues) {
      shapes = varValues.split(",").map((s) => s.trim()).filter(Boolean);
    } else if (varType || varName) {
      shapes = DEFAULT_SHAPES;
    }
    
    const shape = col(row, "shape");
    const rawLength = col(row, "length");
    const length = (rawLength.charAt(0).toUpperCase() + rawLength.slice(1).toLowerCase()) as NailLength;
    
    products.push({
      id,
      groupId,
      name,
      price,
      description,
      image,
      extraImages,
      shapes,
      tags,
      shape,
      length,
    });
  }

  return products;
}

export async function loadProducts(): Promise<Product[]> {
  if (!SANITY_PROJECT_ID || SANITY_PROJECT_ID === "PLACEHOLDER") {
    const response = await fetch(PRODUCTS_SHEET_CSV_URL, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Failed to load products: ${response.status}`);
    }

    return parseProductsCsv(await response.text());
  }

  const query = encodeURIComponent(`*[_type == "product" && !(_id in path("drafts.**"))]`);
  const url = `https://${SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${SANITY_DATASET}?query=${query}`;

  const response = await fetch(url, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to load products from Sanity: ${response.status}`);
  }

  const data = await response.json();
  const sanityProducts = data.result || [];
  
  const products: Product[] = [];

  for (const sp of sanityProducts) {
    const title = sp.title || "Product";
    const baseId = intValue(sp.baseId) || 1;
    const price = floatValue(sp.price) || 0;
    const description = (sp.description || "").replace(/\n/g, " ").replace(/\s+/g, " ").trim();
    const imageRef = sp.image?.asset?._ref || "";
    const imageUrl = buildSanityImageUrl(imageRef);
    const tags = Array.isArray(sp.tags) ? sp.tags.filter(Boolean) : [];

    const isSingle = title.toLowerCase() === "nail sizing guide" || baseId === 286;

    if (isSingle) {
      products.push({
        id: `JUICEGELS-${baseId.toString().padStart(4, '0')}`,
        groupId: "juicegels_nailsizingguide",
        name: title,
        price: price,
        description: description,
        image: imageUrl,
        extraImages: [],
        shapes: ["Square"],
        tags: tags,
        shape: "Square",
        length: "Short"
      });
    } else {
      const groupId = `juicegels_${title.trim().toLowerCase().replace(/[^a-z0-9]/g, '')}set`;
      
      DEFAULT_SHAPES.forEach((shape, sIdx) => {
        DEFAULT_LENGTHS.forEach((length, lIdx) => {
          const offset = sIdx * 3 + lIdx;
          const idNum = baseId + offset;
          const variantId = `JUICEGELS-${idNum.toString().padStart(4, '0')}`;
          
          products.push({
            id: variantId,
            groupId: groupId,
            name: title,
            price: price,
            description: description,
            image: imageUrl,
            extraImages: [],
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