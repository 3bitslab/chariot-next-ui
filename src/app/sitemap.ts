import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    // TODO: Add more language routes
    return [
        {
            url: "https://chariottracker.com",
            lastModified: new Date(),
            changeFrequency: "always",
            priority: 1,
        },
        {
            url: "https://chariottracker.com/zh",
            lastModified: new Date(),
            changeFrequency: "always",
            priority: 0.8,
        },
    ];
}
