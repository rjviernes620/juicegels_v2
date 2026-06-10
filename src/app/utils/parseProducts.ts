import csvRaw from "../../imports/meta_final.csv?raw";


export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  extraImages: string[];
  shapes: string[];
  tags: string[];
};

const DEFAULT_SHAPES = ["Square", "Oval", "Stiletto", "Coffin", "Almond"];

function parseCSVLine(line: string): string[] {
  const fields: string[] = [];
  let cur = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      if (inQuotes && line[i + 1] === '"') { cur += '"'; i++; }
      else inQuotes = !inQuotes;
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
      if (inQuotes && raw[i + 1] === '"') { current += '"'; i++; }
      else inQuotes = !inQuotes;
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

export function loadProducts(): Product[] {
  const rows = splitCSVRows(csvRaw);
  const header = parseCSVLine(rows[0]).map((h) => h.trim());

function resolveImagePath(path: string): string {
  if (!path) return "";
  // If it's a local path from CSV, convert to absolute /images/products/...
  if (path.includes("../../../public/images/products/")) {
    const filename = path.split("/").pop();
    return `public/images/products/${filename}`;
  }
  // If it's already an absolute URL, keep it
  return path;
}

const col = (row: string[], name: string) => {
    const i = header.indexOf(name);
    return i >= 0 ? row[i]?.trim() ?? "" : "";
  };

  const products: Product[] = [];

  for (let i = 1; i < rows.length; i++) {
    const row = parseCSVLine(rows[i]);
    const id = col(row, "id");
    if (!id) continue;

    // availability guard
    if (col(row, "availability") === "out of stock") continue;

    const name = col(row, "TITLE");
    const price = parseFloat(col(row, "PRICE")) || 0;
    const description = col(row, "DESCRIPTION").replace(/\n/g, " ").replace(/\s+/g, " ").trim();

    // images: IMAGE1 is the primary (skip it), IMAGE2–IMAGE10 are extras
    const imageKeys = ["IMAGE1","IMAGE2","IMAGE3","IMAGE4","IMAGE5","IMAGE6","IMAGE7","IMAGE8","IMAGE9","IMAGE10"];
    const allImages = imageKeys.map((k) => resolveImagePath(col(row, k))).filter(Boolean);
    const image = allImages[0] ?? "";
    const extraImages = allImages.slice(1);

    // tags
    const tagStr = col(row, "TAGS");
    const tags = tagStr ? tagStr.split(",").map((t) => t.trim()).filter(Boolean) : [];

    // shapes from variation values (Nail Shapes custom property)
    const varType = col(row, "VARIATION 1 TYPE") || col(row, "VARIATION 2 TYPE");
    const varName = col(row, "VARIATION 1 NAME") || col(row, "VARIATION 2 NAME");
    const varValues = col(row, "VARIATION 1 VALUES") || col(row, "VARIATION 2 VALUES");

    let shapes = DEFAULT_SHAPES;
    if (varName === "Nail Shapes" && varValues) {
      shapes = varValues.split(",").map((s) => s.trim()).filter(Boolean);
    } else if (varType || varName) {
      shapes = DEFAULT_SHAPES;
    }

    products.push({ id, name, price, description, image, extraImages, shapes, tags });
  }

  return products;
}
