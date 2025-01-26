import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    // TODO: Add more language routes
    return [
        {
            url: "https://www.chariottracker.com",
            lastModified: new Date(),
            changeFrequency: "always",
            priority: 1,
        },
        {
            url: "https://www.chariottracker.com/en",
            lastModified: new Date(),
            changeFrequency: "always",
            priority: 0.8,
        },
        {
            url: "https://www.chariottracker.com/ms",
            lastModified: new Date(),
            changeFrequency: "always",
            priority: 0.8,
        },
        {
            url: "https://www.chariottracker.com/ta",
            lastModified: new Date(),
            changeFrequency: "always",
            priority: 0.8,
        },
        {
            url: "https://www.chariottracker.com/zh",
            lastModified: new Date(),
            changeFrequency: "always",
            priority: 0.8,
        },
    ];
}
