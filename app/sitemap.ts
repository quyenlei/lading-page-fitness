import type { MetadataRoute } from "next";
import { getBaseUrl } from "@/lib/fetcher/base-url";

function normalizeSiteUrl(raw: string): string {
  return raw.replace(/\/+$/, "");
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = normalizeSiteUrl(getBaseUrl());

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
  ];
}
