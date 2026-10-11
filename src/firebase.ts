import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
import {
  initializeAppCheck,
  ReCaptchaEnterpriseProvider,
  getToken,
  type AppCheck,
} from "firebase/app-check";

const firebaseConfig = {
  apiKey:
    import.meta.env.VITE_FIREBASE_API_KEY ||
    "AIzaSyBuid71aLM-rreM1q9BOiuydr1tlSznzr8",
  authDomain:
    import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ||
    "juicegels-bf9ca.firebaseapp.com",
  projectId:
    import.meta.env.VITE_FIREBASE_PROJECT_ID ||
    "juicegels-bf9ca",
  storageBucket:
    import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ||
    "juicegels-bf9ca.firebasestorage.app",
  messagingSenderId:
    import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID ||
    "559189450822",
  appId:
    import.meta.env.VITE_FIREBASE_APP_ID ||
    "1:559189450822:web:dd2ef17986bedb26e3aa47",
  measurementId:
    import.meta.env.VITE_FIREBASE_MEASUREMENT_ID ||
    "G-XF3WWQX6T3",
};

export const RECAPTCHA_SITE_KEY =
  import.meta.env.VITE_RECAPTCHA_SITE_KEY ||
  "6LcQh-otAAAAAB89DgEYVGyWHBFLDUM8yjUsaxug";

// Initialize Firebase App singleton
export const app: FirebaseApp = getApps().length
  ? getApp()
  : initializeApp(firebaseConfig);

let appCheckInstance: AppCheck | null = null;
let appCheckInitPromise: Promise<AppCheck | null> | null = null;

/**
 * Initialize Firebase App Check with reCAPTCHA Enterprise.
 * Automatically enables debug token in development environments.
 */
export function initAppCheck(): AppCheck | null {
  if (typeof window === "undefined") {
    return null;
  }

  if (appCheckInstance) {
    return appCheckInstance;
  }

  try {
    const isDev =
      import.meta.env.DEV ||
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1";

    if (isDev) {
      // In local dev, Firebase App Check can use a debug token registered in Firebase Console
      const customDebugToken = import.meta.env.VITE_FIREBASE_APPCHECK_DEBUG_TOKEN;
      (self as any).FIREBASE_APPCHECK_DEBUG_TOKEN =
        customDebugToken || (self as any).FIREBASE_APPCHECK_DEBUG_TOKEN || true;
    }

    appCheckInstance = initializeAppCheck(app, {
      provider: new ReCaptchaEnterpriseProvider(RECAPTCHA_SITE_KEY),
      isTokenAutoRefreshEnabled: true,
    });

    return appCheckInstance;
  } catch (error) {
    console.warn("Firebase App Check initialization failed:", error);
    return null;
  }
}

/**
 * Retrieves the current Firebase App Check token.
 * Returns null if App Check is not available or token exchange fails.
 */
export async function getAppCheckToken(): Promise<string | null> {
  if (typeof window === "undefined") {
    return null;
  }

  const instance = appCheckInstance || initAppCheck();
  if (!instance) {
    return null;
  }

  try {
    const tokenResult = await getToken(instance, /* forceRefresh = */ false);
    return tokenResult?.token || null;
  } catch (error) {
    console.warn("Failed to retrieve App Check token:", error);
    return null;
  }
}
