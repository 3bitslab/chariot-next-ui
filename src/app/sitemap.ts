import { MetadataRoute } from "next";

const BASE_URL = "https://www.chariottracker.com";

const languageRoutes = [
    { code: "en", priority: 0.9, region: "MY", name: "English" },
    { code: "ms", priority: 0.9, region: "MY", name: "Bahasa Malaysia" },
    { code: "ta", priority: 0.9, region: "MY", name: "Tamil" },
    { code: "zh", priority: 0.9, region: "MY", name: "Chinese" },
];

export default function sitemap(): MetadataRoute.Sitemap {
    const currentDate = new Date();
    const sitemapEntries: MetadataRoute.Sitemap = [];

    sitemapEntries.push({
        url: BASE_URL,
        lastModified: currentDate,
        changeFrequency: "always",
        priority: 1.0,
    });

    languageRoutes.forEach((lang) => {
        sitemapEntries.push({
            url: `${BASE_URL}/${lang.code}`,
            lastModified: currentDate,
            changeFrequency: "always",
            priority: lang.priority,
        });
    });

    return sitemapEntries;
}
