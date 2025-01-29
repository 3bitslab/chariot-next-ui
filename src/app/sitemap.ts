import { MetadataRoute } from "next";

const BASE_URL = "https://www.chariottracker.com";

// Define supported languages with their priorities and metadata
const languageRoutes = [
    { code: "en", priority: 0.9, region: "US", name: "English" },
    { code: "ms", priority: 0.9, region: "MY", name: "Bahasa Malaysia" },
    { code: "ta", priority: 0.9, region: "IN", name: "Tamil" },
    { code: "zh", priority: 0.9, region: "CN", name: "Chinese" },
];

export default function sitemap(): MetadataRoute.Sitemap {
    const currentDate = new Date();
    const sitemapEntries: MetadataRoute.Sitemap = [];

    // Add root URL with highest priority
    sitemapEntries.push({
        url: BASE_URL,
        lastModified: currentDate,
        changeFrequency: "always",
        priority: 1.0,
    });

    // Add language-specific routes with high priority during Thaipusam
    languageRoutes.forEach((lang) => {
        sitemapEntries.push({
            url: `${BASE_URL}/${lang.code}`,
            lastModified: currentDate,
            changeFrequency: "always", // High frequency during the event
            priority: lang.priority,
        });
    });

    return sitemapEntries;
}
