import type { MetadataRoute } from "next";

const baseUrl = "https://tottogelato.mx";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: baseUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/sabores`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/nosotros`, changeFrequency: "yearly", priority: 0.6 },
  ];
}
