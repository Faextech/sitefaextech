import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

import { getCaseSlugs } from "@/lib/cases";

const routes = ["", "/sobre", "/servicos", "/cases", "/contato"];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = routes.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const casePages = getCaseSlugs().map((slug) => ({
    url: `${SITE.url}/cases/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...casePages];
}
