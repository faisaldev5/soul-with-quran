import type { MetadataRoute } from "next";

import { courseSlugs } from "@/content/courses/index";
import { siteUrl } from "@/lib/site";

// Only real, implemented routes belong here. Do not add /blog or the legal
// pages until those routes actually exist — an unfinished route in the
// sitemap is a worse SEO signal than omitting it.
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/courses", "/free-trial", "/contact"];

  const courseRoutes = courseSlugs.map((slug) => `/courses/${slug}`);

  return [...staticRoutes, ...courseRoutes].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }));
}
