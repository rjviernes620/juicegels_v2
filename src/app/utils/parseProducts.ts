import csvRaw from "../../imports/meta_final.csv?raw";

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

export function loadProducts(): Product[] {
  const rows = splitCSVRows(csvRaw);
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

    const groupId = col(row, "item_group_id") || id;
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