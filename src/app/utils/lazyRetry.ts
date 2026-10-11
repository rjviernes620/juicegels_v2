import { lazy, type ComponentType } from "react";

/**
 * Wraps dynamic component imports with resilience against stale chunk hashes
 * after a new deployment. If WebKit/Safari or Chrome throws a chunk load error
 * (e.g. "Importing a module script failed" or "Failed to fetch dynamically imported module"),
 * it throttles a force-reload so the browser fetches the latest bundle chunks.
 */
export function lazyRetry<T extends ComponentType<any>>(
  factory: () => Promise<{ default: T } | { [key: string]: any }>,
  exportName?: string
) {
  return lazy(async () => {
    try {
      const module = await factory();
      if (exportName && (module as any)[exportName]) {
        return { default: (module as any)[exportName] };
      }
      if ((module as any).default) {
        return module as { default: T };
      }
      return { default: module as unknown as T };
    } catch (err: any) {
      const msg = (err?.message || String(err || "")).toLowerCase();
      const isChunkError =
        msg.includes("importing a module script failed") ||
        msg.includes("failed to fetch dynamically imported module") ||
        msg.includes("error loading dynamically imported module") ||
        msg.includes("failed to load module script");

      if (isChunkError && typeof window !== "undefined") {
        const lockKey = "jg_lazy_reload_lock";
        const now = Date.now();
        const last = Number(sessionStorage.getItem(lockKey) || 0);
        if (now - last > 10000) {
          sessionStorage.setItem(lockKey, String(now));
          window.location.reload();
          // Return an unresolved promise to prevent React render crash before reload happens
          return new Promise<{ default: T }>(() => {});
        }
      }
      throw err;
    }
  });
}
