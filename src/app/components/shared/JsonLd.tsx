export default function JsonLd() {
    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Penang Thaipusam Silver Chariot Tracker",
            description:
                "Live tracking service for Penang Thaipusam Silver Chariot.",
            url: "https://chariottracker.com",
            applicationCategory: "TrackingTool",
            operatingSystem: "Windows, macOS, Linux, iOS, Android",
            offers: {
                "@type": "Offer",
                price: "free",
                priceCurrency: "MYR",
                availability: "https://schema.org/InStock",
                validThrough: "2025-02-31",
            },
        },
        {
            "@context": "https://schema.org",
            "@type": "ReligiousEvent",
            name: "Penang Thaipusam Silver Chariot Procession 2025",
            description:
                "Annual Thaipusam festival silver chariot procession in Penang, from Kovil Veedu to Waterfall Temple.",
            startDate: "2025-02-09T06:00:00+08:00",
            endDate: "2025-02-13T12:00:00+08:00",
            typicalAgeRange: "All ages",
            isAccessibleForFree: true,
            image: [
                "https://chariottracker.com/assets/byebyte-1200x630.png",
                "https://chariottracker.com/assets/byebyte-1200x675.png",
            ],
            location: [
                {
                    "@type": "Place",
                    name: "Nagarthar Kovil Veedu Penang",
                    address: {
                        "@type": "PostalAddress",
                        streetAddress: "Georgetown, Penang",
                        addressLocality: "George Town",
                        postalCode: "10200",
                        addressCountry: "MY",
                    },
                    geo: {
                        "@type": "GeoCoordinates",
                        latitude: 5.416182,
                        longitude: 100.339358,
                    },
                },
                {
                    "@type": "Place",
                    name: "Nattukkottai Chettiar Temple",
                    address: {
                        "@type": "PostalAddress",
                        streetAddress: "Georgetown, Penang",
                        addressLocality: "George Town",
                        postalCode: "10350",
                        addressCountry: "MY",
                    },
                    geo: {
                        "@type": "GeoCoordinates",
                        latitude: 5.432511,
                        longitude: 100.298245,
                    },
                },
            ],
        },
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "ByeByte Technologies",
            url: "https://chariottracker.com",
            logo: "https://chariottracker.com/assets/byebyte.png",
            sameAs: ["https://github.com/byebyteorg"],
        },
    ];

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
