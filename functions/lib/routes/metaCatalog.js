import { Router } from "express";
import { fetchCatalogProducts } from "../services/sanity.js";
export const metaCatalogRouter = Router();
const DEFAULT_SHAPES = ["Square", "Oval", "Stiletto", "Coffin", "Almond"];
const DEFAULT_LENGTHS = ["Short", "Medium", "Long"];
const FRONTEND_BASE_URL = "https://juicegels.com";
function escapeCsvField(field) {
    const str = String(field ?? "");
    if (str.includes(",") || str.includes('"') || str.includes("\n") || str.includes("\r")) {
        return `"${str.replace(/"/g, '""')}"`;
    }
    return str;
}
metaCatalogRouter.get("/api/meta-catalog", async (_req, res) => {
    try {
        const products = await fetchCatalogProducts();
        const headers = [
            "id",
            "TITLE",
            "DESCRIPTION",
            "PRICE",
            "CURRENCY_CODE",
            "QUANTITY",
            "TAGS",
            "MATERIALS",
            "IMAGE1",
            "IMAGE2",
            "IMAGE3",
            "IMAGE4",
            "condition",
            "availability",
            "link",
            "root links",
            "item_group_id",
            "shape",
            "length",
            "additional_variant_attribute",
            "additional_image_link",
            "fb_product_category"
        ];
        const rows = [headers.join(",")];
        for (const p of products) {
            const title = p.title || "";
            const productId = parseInt(p.productId || p.baseId, 10);
            if (isNaN(productId))
                continue;
            const price = parseFloat(p.price) || 0;
            const formattedPrice = Number.isInteger(price) ? String(price) : price.toFixed(2);
            const desc = typeof p.description === "string" ? p.description : "";
            const tags = Array.isArray(p.tags) ? p.tags.join(",") : "";
            const isSizeGuide = title.toLowerCase() === "nail sizing guide" || productId === 286;
            const img1 = p.imageUrl || `${FRONTEND_BASE_URL}/images/Nail 2.jpeg`;
            const img2 = p.image2Url || `${FRONTEND_BASE_URL}/images/coin 2.jpeg`;
            const img3 = p.image3Url || "";
            if (isSizeGuide) {
                const idStr = `JUICEGELS-${productId.toString().padStart(4, "0")}`;
                const itemRow = [
                    idStr,
                    title,
                    desc,
                    formattedPrice,
                    "GBP",
                    "999",
                    tags,
                    "Acrylic",
                    img1,
                    img2,
                    img3,
                    "",
                    "new",
                    "in stock",
                    `${FRONTEND_BASE_URL}/shop/${idStr}`,
                    `${FRONTEND_BASE_URL}/shop/${idStr}`,
                    "juicegels_nailsizingguide",
                    "Square",
                    "Short",
                    "",
                    img2,
                    "health & beauty > personal care > cosmetics > nail care"
                ].map(escapeCsvField);
                rows.push(itemRow.join(","));
            }
            else {
                const groupId = `juicegels_${title.toLowerCase().replace(/[^a-z0-9]/g, "")}set`;
                DEFAULT_SHAPES.forEach((shape, sIdx) => {
                    DEFAULT_LENGTHS.forEach((length, lIdx) => {
                        const offset = sIdx * 3 + lIdx;
                        const idNum = productId + offset;
                        const variantId = `JUICEGELS-${idNum.toString().padStart(4, "0")}`;
                        const itemRow = [
                            variantId,
                            `${title} - ${shape} - ${length}`,
                            desc,
                            formattedPrice,
                            "GBP",
                            "999",
                            tags,
                            "Acrylic",
                            img1,
                            img2,
                            img3,
                            "",
                            "new",
                            "in stock",
                            `${FRONTEND_BASE_URL}/shop/${variantId}`,
                            `${FRONTEND_BASE_URL}/shop/${variantId}`,
                            groupId,
                            shape,
                            length,
                            "",
                            img2,
                            "health & beauty > personal care > cosmetics > nail care"
                        ].map(escapeCsvField);
                        rows.push(itemRow.join(","));
                    });
                });
            }
        }
        res.setHeader("Content-Type", "text/csv; charset=utf-8");
        res.setHeader("Content-Disposition", 'attachment; filename="meta_catalog.csv"');
        res.send(rows.join("\n"));
    }
    catch (err) {
        console.error("Meta catalog generation error:", err);
        res.status(500).json({ error: "Failed to generate catalog" });
    }
});
//# sourceMappingURL=metaCatalog.js.map