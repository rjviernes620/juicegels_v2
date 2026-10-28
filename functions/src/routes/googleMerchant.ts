import { Router, Request, Response } from "express";
import { fetchCatalogProducts } from "../services/sanity.js";

export const googleMerchantRouter = Router();

const DEFAULT_SHAPES = ["Square", "Oval", "Stiletto", "Coffin", "Almond"];
const DEFAULT_LENGTHS = ["Short", "Medium", "Long"];
const FRONTEND_BASE_URL = "https://juicegels.com";
const DEFAULT_FALLBACK_DESCRIPTION =
  "All Nail Sets Include: 1x mini nail file, 1x cuticle pusher, 1x mini buffer block, 1x Nail Glue. Handmade luxury press-on gel nails by JuiceGels.";

function xmlEscape(str: any): string {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function cdata(str: any): string {
  const clean = String(str ?? "").replace(/\]\]>/g, "]]&gt;");
  return `<![CDATA[${clean}]]>`;
}

function escapeTsvField(field: any): string {
  const str = String(field ?? "").replace(/[\t\r\n]+/g, " ").trim();
  if (str.includes('"')) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

function blocksToPlainText(blocks: any): string {
  if (typeof blocks === "string") return blocks;
  if (!Array.isArray(blocks)) return "";
  return blocks
    .map((block: any) => {
      if (block._type !== "block" || !block.children) return "";
      return block.children.map((child: any) => child.text || "").join("");
    })
    .filter(Boolean)
    .join("\n")
    .trim();
}

async function handleGoogleMerchantFeed(_req: Request, res: Response): Promise<void> {
  try {
    const products = await fetchCatalogProducts();

    const itemsXml: string[] = [];

    for (const p of products) {
      const title = (p.title || "").trim();
      const productId = parseInt(p.productId || p.baseId, 10);
      if (isNaN(productId)) continue;

      const price = parseFloat(p.price) || 0;
      const formattedPrice = `${price.toFixed(2)} GBP`;

      const rawDesc = blocksToPlainText(p.description);
      const desc = rawDesc && rawDesc.length > 5 ? rawDesc : DEFAULT_FALLBACK_DESCRIPTION;

      const img1 = p.imageUrl || `${FRONTEND_BASE_URL}/images/Nail 2.jpeg`;
      const img2 = p.image2Url || `${FRONTEND_BASE_URL}/images/coin 2.jpeg`;
      const img3 = p.image3Url || "";

      const isSizeGuide = title.toLowerCase() === "nail sizing guide" || productId === 286;

      if (isSizeGuide) {
        const idStr = `JUICEGELS-${productId.toString().padStart(4, "0")}`;
        const productLink = `${FRONTEND_BASE_URL}/product/${idStr}`;

        itemsXml.push(`    <item>
      <g:id>${xmlEscape(idStr)}</g:id>
      <g:title>${cdata(title)}</g:title>
      <g:description>${cdata(desc)}</g:description>
      <g:link>${xmlEscape(productLink)}</g:link>
      <g:image_link>${xmlEscape(img1)}</g:image_link>
      ${img2 ? `<g:additional_image_link>${xmlEscape(img2)}</g:additional_image_link>` : ""}
      ${img3 ? `<g:additional_image_link>${xmlEscape(img3)}</g:additional_image_link>` : ""}
      <g:condition>new</g:condition>
      <g:availability>in_stock</g:availability>
      <g:price>${formattedPrice}</g:price>
      <g:brand>Juicegels</g:brand>
      <g:identifier_exists>no</g:identifier_exists>
      <g:google_product_category>2901</g:google_product_category>
      <g:product_type>${xmlEscape("Health & Beauty > Personal Care > Cosmetics > Nail Care > False Nails")}</g:product_type>
      <g:shipping>
        <g:country>GB</g:country>
        <g:service>Royal Mail Tracked 48</g:service>
        <g:price>3.00 GBP</g:price>
      </g:shipping>
    </item>`);
      } else {
        const groupId = `juicegels_${title.toLowerCase().replace(/[^a-z0-9]/g, "")}set`;

        DEFAULT_SHAPES.forEach((shape, sIdx) => {
          DEFAULT_LENGTHS.forEach((length, lIdx) => {
            const offset = sIdx * 3 + lIdx;
            const idNum = productId + offset;
            const variantId = `JUICEGELS-${idNum.toString().padStart(4, "0")}`;
            const variantTitle = `${title} - ${shape} - ${length}`;
            const variantLink = `${FRONTEND_BASE_URL}/product/${variantId}`;

            itemsXml.push(`    <item>
      <g:id>${xmlEscape(variantId)}</g:id>
      <g:title>${cdata(variantTitle)}</g:title>
      <g:description>${cdata(desc)}</g:description>
      <g:link>${xmlEscape(variantLink)}</g:link>
      <g:image_link>${xmlEscape(img1)}</g:image_link>
      ${img2 ? `<g:additional_image_link>${xmlEscape(img2)}</g:additional_image_link>` : ""}
      ${img3 ? `<g:additional_image_link>${xmlEscape(img3)}</g:additional_image_link>` : ""}
      <g:condition>new</g:condition>
      <g:availability>in_stock</g:availability>
      <g:price>${formattedPrice}</g:price>
      <g:brand>Juicegels</g:brand>
      <g:identifier_exists>no</g:identifier_exists>
      <g:item_group_id>${xmlEscape(groupId)}</g:item_group_id>
      <g:google_product_category>2901</g:google_product_category>
      <g:product_type>${xmlEscape("Health & Beauty > Personal Care > Cosmetics > Nail Care > False Nails")}</g:product_type>
      <g:material>Acrylic</g:material>
      <g:size>${xmlEscape(length)}</g:size>
      <g:custom_label_0>${xmlEscape(shape)}</g:custom_label_0>
      <g:custom_label_1>${xmlEscape(length)}</g:custom_label_1>
      ${p.collection ? `<g:custom_label_2>${xmlEscape(p.collection)}</g:custom_label_2>` : ""}
      <g:shipping>
        <g:country>GB</g:country>
        <g:service>Royal Mail Tracked 48</g:service>
        <g:price>3.00 GBP</g:price>
      </g:shipping>
    </item>`);
          });
        });
      }
    }

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>Juicegels Product Feed</title>
    <link>${FRONTEND_BASE_URL}</link>
    <description>Handmade Luxury Press-On Gel Nails from Juicegels</description>
${itemsXml.join("\n")}
  </channel>
</rss>`;

    res.setHeader("Content-Type", "application/xml; charset=utf-8");
    res.setHeader("Cache-Control", "public, max-age=3600, s-maxage=3600");
    res.send(xml);
  } catch (err: any) {
    console.error("Google Merchant feed generation error:", err);
    res.status(500).json({ error: "Failed to generate Google Merchant feed" });
  }
}

async function handleGoogleMerchantTsv(_req: Request, res: Response): Promise<void> {
  try {
    const products = await fetchCatalogProducts();

    const headers = [
      "id",
      "title",
      "description",
      "link",
      "image_link",
      "additional_image_link",
      "condition",
      "availability",
      "price",
      "brand",
      "identifier_exists",
      "item_group_id",
      "google_product_category",
      "product_type",
      "material",
      "size",
      "custom_label_0",
      "custom_label_1",
      "custom_label_2",
      "min_handling_time",
      "max_handling_time",
      "min_transit_time",
      "max_transit_time",
      "shipping(country:service:price)"
    ];

    const rows: string[] = [headers.join("\t")];

    for (const p of products) {
      const title = (p.title || "").trim();
      const productId = parseInt(p.productId || p.baseId, 10);
      if (isNaN(productId)) continue;

      const price = parseFloat(p.price) || 0;
      const formattedPrice = `${price.toFixed(2)} GBP`;

      const rawDesc = blocksToPlainText(p.description);
      const desc = rawDesc && rawDesc.length > 5 ? rawDesc : DEFAULT_FALLBACK_DESCRIPTION;

      const img1 = p.imageUrl || `${FRONTEND_BASE_URL}/images/Nail 2.jpeg`;
      const img2 = p.image2Url || `${FRONTEND_BASE_URL}/images/coin 2.jpeg`;
      const img3 = p.image3Url || "";
      const additionalImages = [img2, img3].filter(Boolean).join(",");

      const isSizeGuide = title.toLowerCase() === "nail sizing guide" || productId === 286;

      if (isSizeGuide) {
        const idStr = `JUICEGELS-${productId.toString().padStart(4, "0")}`;
        const productLink = `${FRONTEND_BASE_URL}/product/${idStr}`;

        const itemRow = [
          idStr,
          title,
          desc,
          productLink,
          img1,
          additionalImages,
          "new",
          "in_stock",
          formattedPrice,
          "Juicegels",
          "no",
          "juicegels_nailsizingguide",
          "2901",
          "Health & Beauty > Personal Care > Cosmetics > Nail Care > False Nails",
          "Acrylic",
          "Short",
          "Square",
          "Short",
          "",
          "2",
          "5",
          "2",
          "3",
          "GB:Royal Mail Tracked 48:3.00 GBP"
        ].map(escapeTsvField);

        rows.push(itemRow.join("\t"));
      } else {
        const groupId = `juicegels_${title.toLowerCase().replace(/[^a-z0-9]/g, "")}set`;

        DEFAULT_SHAPES.forEach((shape, sIdx) => {
          DEFAULT_LENGTHS.forEach((length, lIdx) => {
            const offset = sIdx * 3 + lIdx;
            const idNum = productId + offset;
            const variantId = `JUICEGELS-${idNum.toString().padStart(4, "0")}`;
            const variantTitle = `${title} - ${shape} - ${length}`;
            const variantLink = `${FRONTEND_BASE_URL}/product/${variantId}`;

            const itemRow = [
              variantId,
              variantTitle,
              desc,
              variantLink,
              img1,
              additionalImages,
              "new",
              "in_stock",
              formattedPrice,
              "Juicegels",
              "no",
              groupId,
              "2901",
              "Health & Beauty > Personal Care > Cosmetics > Nail Care > False Nails",
              "Acrylic",
              length,
              shape,
              length,
              p.collection || "",
              "2",
              "5",
              "2",
              "3",
              "GB:Royal Mail Tracked 48:3.00 GBP"
            ].map(escapeTsvField);

            rows.push(itemRow.join("\t"));
          });
        });
      }
    }

    res.setHeader("Content-Type", "text/tab-separated-values; charset=utf-8");
    res.setHeader("Content-Disposition", 'inline; filename="google_merchant_feed.tsv"');
    res.setHeader("Cache-Control", "public, max-age=3600, s-maxage=3600");
    res.send(rows.join("\n"));
  } catch (err: any) {
    console.error("Google Merchant TSV feed generation error:", err);
    res.status(500).json({ error: "Failed to generate Google Merchant TSV feed" });
  }
}

// XML routes
googleMerchantRouter.get("/api/google-merchant-feed", handleGoogleMerchantFeed);
googleMerchantRouter.get("/api/google-merchant-feed.xml", handleGoogleMerchantFeed);
googleMerchantRouter.get("/google-merchant-feed", handleGoogleMerchantFeed);
googleMerchantRouter.get("/google-merchant-feed.xml", handleGoogleMerchantFeed);

// Tab-delimited (TSV / TXT) spreadsheet routes
googleMerchantRouter.get("/api/google-merchant-feed.tsv", handleGoogleMerchantTsv);
googleMerchantRouter.get("/api/google-merchant-feed.txt", handleGoogleMerchantTsv);
googleMerchantRouter.get("/google-merchant-feed.tsv", handleGoogleMerchantTsv);
googleMerchantRouter.get("/google-merchant-feed.txt", handleGoogleMerchantTsv);
