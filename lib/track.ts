declare global { interface Window { gtag?: (...a: unknown[]) => void; dataLayer?: unknown[] } }

/**
 * Envía un evento a GA4. Si no hay NEXT_PUBLIC_GA_ID, gtag no existe y no hace nada.
 * gtag se define con un script inline en layout.tsx, así que los eventos disparados antes
 * de que cargue gtag.js quedan en window.dataLayer y se envían cuando termina de cargar.
 */
export function track(name: string, params: Record<string, string> = {}) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") window.gtag("event", name, params);
}
