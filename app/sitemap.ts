import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://solverines-website.vercel.app",
      lastModified: new Date(),
    },
    {
      url: "https://solverines-website.vercel.app/outsystems",
      lastModified: new Date(),
    },
    {
      url: "https://solverines-website.vercel.app/contact",
      lastModified: new Date(),
    },
  ];
}
