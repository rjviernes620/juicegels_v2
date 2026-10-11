import * as crypto from "crypto";
import { CONFIG } from "../config.js";
// Base32 decoding for TOTP RFC 6238
const RFC4648_ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
function base32Decode(input) {
    const cleaned = input.toUpperCase().replace(/=+$/, "").replace(/\s+/g, "");
    let bits = 0;
    let value = 0;
    const bytes = [];
    for (let i = 0; i < cleaned.length; i++) {
        const idx = RFC4648_ALPHABET.indexOf(cleaned[i]);
        if (idx === -1) {
            throw new Error(`Invalid base32 character: ${cleaned[i]}`);
        }
        value = (value << 5) | idx;
        bits += 5;
        if (bits >= 8) {
            bytes.push((value >>> (bits - 8)) & 255);
            bits -= 8;
        }
    }
    return Buffer.from(bytes);
}
export function verifyTotp(secret, code, window = 1) {
    if (!secret || !code)
        return false;
    const targetCode = parseInt(code.trim(), 10);
    if (isNaN(targetCode))
        return false;
    let key;
    try {
        key = base32Decode(secret);
    }
    catch {
        return false;
    }
    const stepSeconds = 30;
    const currentStep = Math.floor(Date.now() / 1000 / stepSeconds);
    for (let step = currentStep - window; step <= currentStep + window; step++) {
        const stepBuffer = Buffer.alloc(8);
        stepBuffer.writeBigUInt64BE(BigInt(step));
        const hmac = crypto.createHmac("sha1", key);
        hmac.update(stepBuffer);
        const digest = hmac.digest();
        const offset = digest[digest.length - 1] & 0x0f;
        const binary = ((digest[offset] & 0x7f) << 24) |
            ((digest[offset + 1] & 0xff) << 16) |
            ((digest[offset + 2] & 0xff) << 8) |
            (digest[offset + 3] & 0xff);
        const generatedCode = binary % 1000000;
        if (generatedCode === targetCode) {
            return true;
        }
    }
    return false;
}
export function generateBypassToken() {
    const secret = CONFIG.MAINTENANCE_2FA_SECRET;
    if (!secret)
        return null;
    const timestamp = Math.floor(Date.now() / 1000).toString();
    const sig = crypto.createHmac("sha256", secret).update(timestamp).digest("hex");
    return `${timestamp}:${sig}`;
}
export function verifyBypassToken(token, maxAgeDays = 30) {
    if (!token || !token.includes(":"))
        return false;
    const secret = CONFIG.MAINTENANCE_2FA_SECRET;
    if (!secret)
        return false;
    const parts = token.split(":", 2);
    const timestampStr = parts[0];
    const sig = parts[1];
    const timestamp = parseInt(timestampStr, 10);
    if (isNaN(timestamp))
        return false;
    const currentTime = Math.floor(Date.now() / 1000);
    if (currentTime - timestamp > maxAgeDays * 86400 || currentTime < timestamp - 3600) {
        return false;
    }
    const expectedSig = crypto.createHmac("sha256", secret).update(timestampStr).digest("hex");
    try {
        return crypto.timingSafeEqual(Buffer.from(sig, "hex"), Buffer.from(expectedSig, "hex"));
    }
    catch {
        return false;
    }
}
export async function verifyTurnstile(token, remoteIp) {
    const secret = CONFIG.CLOUDFLARE_TURNSTILE_SECRET_KEY;
    const isDummyToken = token === "XXXX.DUMMY.TOKEN.XXXX" ||
        token === "XXXX.DUMMY.TOKEN.XXXX2" ||
        token === "XXXX.DUMMY.TOKEN.XXXX3" ||
        token.includes("DUMMY");
    if (isDummyToken) {
        if (!secret || process.env.NODE_ENV !== "production") {
            return true;
        }
    }
    if (!secret) {
        // If turnstile secret is not set in dev, allow pass-through
        return true;
    }
    try {
        const formData = new URLSearchParams();
        formData.append("secret", secret);
        formData.append("response", token);
        if (remoteIp) {
            formData.append("remoteip", remoteIp);
        }
        const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: formData.toString()
        });
        if (!res.ok)
            return false;
        const data = (await res.json());
        return Boolean(data.success);
    }
    catch (err) {
        console.error("Turnstile verification error:", err);
        return false;
    }
}
//# sourceMappingURL=security.js.map