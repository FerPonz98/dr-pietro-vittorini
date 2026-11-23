import type { MetadataRoute } from "next";
import { SITE, TREATMENTS } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE.url, changeFrequency: "monthly", priority: 1 },
    ...TREATMENTS.map((t) => ({ url: `${SITE.url}/tratamientos/${t.slug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
    { url: `${SITE.url}/privacidad`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
