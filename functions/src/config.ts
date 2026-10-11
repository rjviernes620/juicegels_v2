import * as fs from "fs";
import * as path from "path";

function loadDotEnv() {
  const envFiles = [
    path.join(process.cwd(), ".env"),
    path.join(process.cwd(), "backend.env"),
    path.join(process.cwd(), "..", ".env"),
    path.join(process.cwd(), "..", "backend.env")
  ];

  for (const envPath of envFiles) {
    if (fs.existsSync(envPath) && fs.statSync(envPath).isFile()) {
      const content = fs.readFileSync(envPath, "utf-8");
      for (const line of content.split("\n")) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) continue;
        const [key, ...rest] = trimmed.split("=");
        const k = key.trim();
        const v = rest.join("=").trim().replace(/^['"]|['"]$/g, "");
        if (k && !process.env[k]) {
          process.env[k] = v;
        }
      }
    }
  }
}
loadDotEnv();

export function readSecret(secretName: string, envVarName?: string): string {
  const candidateNames = [envVarName, secretName, secretName ? secretName.toUpperCase() : ""].filter(Boolean) as string[];

  for (const name of candidateNames) {
    const val = (process.env[name] || "").trim();
    if (!val) continue;

    if (fs.existsSync(val) && fs.statSync(val).isFile()) {
      return fs.readFileSync(val, "utf-8").trim();
    }
    return val;
  }

  // Check /etc/secrets (Render secret files or container mounts)
  const renderSecretDir = "/etc/secrets";
  for (const name of candidateNames) {
    const secretPath = path.join(renderSecretDir, name);
    if (fs.existsSync(secretPath) && fs.statSync(secretPath).isFile()) {
      return fs.readFileSync(secretPath, "utf-8").trim();
    }
  }

  return "";
}

export const CONFIG = {
  SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID || "5co5ooqr",
  SANITY_DATASET: process.env.SANITY_DATASET || "production",
  get SANITY_WRITE_TOKEN() {
    return readSecret("sanity_write_token", "SANITY_WRITE_TOKEN");
  },

  get STRIPE_SECRET_KEY() {
    return (
      readSecret("stripe_live_v1", "STRIPE_SECRET_KEY") ||
      readSecret("stripe_secret_key", "STRIPE_LIVE_SECRET_KEY")
    );
  },
  get STRIPE_TEST_SECRET_KEY() {
    return (
      readSecret("stripe_test_v1", "STRIPE_TEST_SECRET_KEY") ||
      readSecret("stripe_test_secret_key") ||
      "sk_test_51TgWqGK9S4gHGvxwFNa7SNCtpDCF22j3ViHQ9cQXgOSaNICLk4tRK9HjOFmLxv0FhHHg08X0LUtckmEK1aybXgt700mi1zYqlx"
    );
  },
  get STRIPE_WEBHOOK_SECRET() {
    return readSecret("stripe_webhook_live", "STRIPE_WEBHOOK_SECRET") || readSecret("stripe_webhook");
  },
  get STRIPE_TEST_WEBHOOK_SECRET() {
    return readSecret("stripe_webhook", "STRIPE_TEST_WEBHOOK_SECRET");
  },
  get STRIPE_PUBLISH_KEY() {
    return readSecret("stripe_publish", "STRIPE_PUBLISH_KEY");
  },
  get STRIPE_TEST_PUBLISH_KEY() {
    return readSecret("stripe_test_publish_key", "STRIPE_TEST_PUBLISH_KEY");
  },

  get MAINTENANCE_2FA_SECRET() {
    return readSecret("maintenance_2fa_secret", "MAINTENANCE_2FA_SECRET");
  },

  get PINGRAM_API_KEY() {
    return readSecret("pingram_v1", "PINGRAM_API_KEY");
  },
  PINGRAM_BASE_URL: process.env.PINGRAM_BASE_URL || "https://api.eu.pingram.io",
  PINGRAM_FROM_NAME: process.env.PINGRAM_FROM_NAME || "Juice Gels",
  PINGRAM_FROM_EMAIL: process.env.PINGRAM_FROM_EMAIL || "neworder@juicegels.com",
  PINGRAM_ORDER_RECIPIENT: process.env.PINGRAM_ORDER_RECIPIENT || "juicegels@gmail.com",

  get SENDCLOUD_PUBLIC_KEY() {
    return readSecret("sendcloud_public_key", "SENDCLOUD_PUBLIC_KEY");
  },
  get SENDCLOUD_SECRET_KEY() {
    return readSecret("sendcloud_secret_key", "SENDCLOUD_SECRET_KEY");
  },
  SENDCLOUD_INTEGRATION_ID: process.env.SENDCLOUD_INTEGRATION_ID || "336940",

  get CLOUDFLARE_TURNSTILE_SECRET_KEY() {
    return readSecret("cloudflare_turnstile_secret_key", "CLOUDFLARE_TURNSTILE_SECRET_KEY");
  },

  FREE_TRACKED48_THRESHOLD_PENCE: 3000,
  NAIL_SIZE_GUIDE_PRODUCT_ID: "JUICEGELS-0286"
};
