import { Router } from "express";
import * as crypto from "crypto";
import { CONFIG } from "../config.js";
import { isMaintenanceActive, setMaintenanceActive } from "../services/firestore.js";
import { verifyTotp, generateBypassToken, verifyBypassToken } from "../utils/security.js";
export const maintenanceRouter = Router();
maintenanceRouter.get("/api/status", async (req, res) => {
    const maintenanceActive = await isMaintenanceActive();
    const bypassToken = req.headers["x-maintenance-bypass"];
    let bypassActive = false;
    if (bypassToken && verifyBypassToken(bypassToken)) {
        bypassActive = true;
    }
    const mode = maintenanceActive ? "test" : "live";
    const pubKey = mode === "test" ? CONFIG.STRIPE_TEST_PUBLISH_KEY : CONFIG.STRIPE_PUBLISH_KEY;
    res.json({
        maintenance: maintenanceActive && !bypassActive,
        stripe_mode: mode,
        stripe_publishable_key: pubKey || "",
        bypass_active: bypassActive,
        maintenance_mode_active: maintenanceActive
    });
});
maintenanceRouter.post("/api/maintenance-login", async (req, res) => {
    const code = (req.body?.code || "").trim();
    const secret = CONFIG.MAINTENANCE_2FA_SECRET;
    if (!secret) {
        res.status(500).json({ success: false, message: "2FA bypass is not configured on this server." });
        return;
    }
    if (!code) {
        res.status(400).json({ success: false, message: "Verification code is required." });
        return;
    }
    if (verifyTotp(secret, code)) {
        const token = generateBypassToken();
        if (token) {
            res.json({ success: true, token });
            return;
        }
        res.status(500).json({ success: false, message: "Failed to generate bypass token." });
        return;
    }
    res.status(401).json({ success: false, message: "Invalid verification code." });
});
maintenanceRouter.post("/api/admin/maintenance", async (req, res) => {
    const action = (req.body?.action || "").trim().toLowerCase();
    const providedSecret = (req.body?.secret || "").trim();
    if (action !== "on" && action !== "off") {
        res.status(400).json({ success: false, message: "action must be 'on' or 'off'." });
        return;
    }
    const expectedSecret = CONFIG.MAINTENANCE_2FA_SECRET;
    if (!expectedSecret || !providedSecret) {
        res.status(401).json({ success: false, message: "Missing secret." });
        return;
    }
    try {
        const isMatch = crypto.timingSafeEqual(Buffer.from(providedSecret, "utf-8"), Buffer.from(expectedSecret, "utf-8"));
        if (!isMatch) {
            res.status(403).json({ success: false, message: "Invalid secret." });
            return;
        }
    }
    catch {
        res.status(403).json({ success: false, message: "Invalid secret." });
        return;
    }
    const activate = action === "on";
    await setMaintenanceActive(activate);
    res.json({
        success: true,
        message: `Maintenance mode ${activate ? "ENABLED" : "DISABLED"} on live server.`
    });
});
//# sourceMappingURL=maintenance.js.map