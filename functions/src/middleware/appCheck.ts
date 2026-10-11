import { Request, Response, NextFunction } from "express";
import { getAppCheck } from "firebase-admin/app-check";
import "../services/firestore.js"; // Ensures Firebase Admin is initialized

/**
 * Middleware to verify Firebase App Check tokens sent in the X-Firebase-AppCheck header.
 *
 * Defaults to monitoring mode:
 * - Validates token when present and attaches decoded claims to req.appCheck
 * - If token is missing or invalid, logs a warning and allows the request through
 *
 * To enforce strictly, set ENFORCE_APP_CHECK=true in your Cloud Functions environment variables.
 * When enabled, requests lacking a valid token are rejected with 401 Unauthorized.
 */
export async function verifyAppCheck(req: Request, res: Response, next: NextFunction) {
  // Allow CORS preflight requests
  if (req.method === "OPTIONS") {
    return next();
  }

  const appCheckToken = req.header("X-Firebase-AppCheck");

  if (!appCheckToken) {
    if (process.env.ENFORCE_APP_CHECK === "true") {
      res.status(401).json({
        error: "Unauthorized",
        message: "Missing App Check token."
      });
      return;
    }
    return next();
  }

  try {
    const claims = await getAppCheck().verifyToken(appCheckToken);
    (req as any).appCheck = claims;
    return next();
  } catch (err: any) {
    console.warn("Firebase App Check verification failed:", err?.message || err);
    if (process.env.ENFORCE_APP_CHECK === "true") {
      res.status(401).json({
        error: "Unauthorized",
        message: "Invalid App Check token."
      });
      return;
    }
    return next();
  }
}
