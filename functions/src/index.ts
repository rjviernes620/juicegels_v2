import { onRequest } from "firebase-functions/v2/https";

let cachedApp: any = null;

// Export Cloud Function (2nd Gen) mapped to Firebase Hosting rewrites
export const api = onRequest(
  {
    region: "europe-west2",
    memory: "256MiB",
    timeoutSeconds: 60,
    cors: true
  },
  async (req, res) => {
    if (!cachedApp) {
      const { createApp } = await import("./app.js");
      cachedApp = createApp();
    }
    return cachedApp(req, res);
  }
);
