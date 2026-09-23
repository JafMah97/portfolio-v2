import type { MetadataRoute } from "next";
import { projects, site } from "@/content";
import { href, locales } from "@/lib/i18n";
import { absolute } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1 },
    ...projects.map((p) => ({ path: `/work/${p.slug}`, priority: 0.7 })),
  ];

  return pages.flatMap(({ path, priority }) =>
    locales.map((locale) => ({
      url: absolute(href(locale, path)),
      lastModified: site.updated,
      priority,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, absolute(href(l, path))])),
      },
    })),
  );
}
