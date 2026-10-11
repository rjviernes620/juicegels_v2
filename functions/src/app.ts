import express from "express";
import cors from "cors";
import { maintenanceRouter } from "./routes/maintenance.js";
import { checkoutRouter } from "./routes/checkout.js";
import { stripeWebhookRouter } from "./routes/stripeWebhook.js";
import { shippingWebhookRouter } from "./routes/shippingWebhook.js";
import { metaCatalogRouter } from "./routes/metaCatalog.js";

import { verifyAppCheck } from "./middleware/appCheck.js";

export function createApp() {
  const app = express();

  // Enable CORS for storefront domains and local development
  app.use(
    cors({
      origin: true,
      credentials: true
    })
  );

  // Root health check
  app.get("/", (_req, res) => {
    res.json({
      status: "ok",
      service: "juicegels-api",
      timestamp: new Date().toISOString()
    });
  });

  // Preserve rawBody for Stripe Webhook signature verification
  app.use(
    express.json({
      verify: (req: any, _res, buf) => {
        req.rawBody = buf;
      }
    })
  );

  app.use(express.urlencoded({ extended: true }));

  // External webhooks and feeds (called by third-party servers, exempt from App Check)
  app.use(stripeWebhookRouter);
  app.use(shippingWebhookRouter);
  app.use(metaCatalogRouter);

  // App Check verification for storefront requests
  app.use(verifyAppCheck);

  // Storefront endpoints
  app.use(maintenanceRouter);
  app.use(checkoutRouter);

  return app;
}
