import express from "express";
import cors from "cors";
import { onRequest } from "firebase-functions/v2/https";
import { maintenanceRouter } from "./routes/maintenance.js";
import { checkoutRouter } from "./routes/checkout.js";
import { stripeWebhookRouter } from "./routes/stripeWebhook.js";
import { shippingWebhookRouter } from "./routes/shippingWebhook.js";
import { metaCatalogRouter } from "./routes/metaCatalog.js";

const app = express();

// Enable CORS for storefront domains and local development
app.use(
  cors({
    origin: true,
    credentials: true
  })
);

// Preserve rawBody for Stripe Webhook signature verification
app.use(
  express.json({
    verify: (req: any, _res, buf) => {
      req.rawBody = buf;
    }
  })
);

app.use(express.urlencoded({ extended: true }));

// Mount all routes
app.use(maintenanceRouter);
app.use(checkoutRouter);
app.use(stripeWebhookRouter);
app.use(shippingWebhookRouter);
app.use(metaCatalogRouter);

// Root health check
app.get("/", (_req, res) => {
  res.json({
    status: "ok",
    service: "juicegels-api",
    timestamp: new Date().toISOString()
  });
});

// Export Cloud Function (2nd Gen) mapped to Firebase Hosting rewrites
export const api = onRequest(
  {
    region: "europe-west2",
    memory: "256MiB",
    timeoutSeconds: 60,
    cors: true
  },
  app
);
