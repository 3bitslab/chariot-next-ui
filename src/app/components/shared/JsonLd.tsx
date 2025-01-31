export default function JsonLd() {
    const currentYear = new Date().getFullYear();
    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Penang Thaipusam Silver Chariot Tracker",
            description:
                "Live tracking service for Penang Thaipusam Silver Chariot. Follow the chariot's journey in real-time during the Thaipusam festival.",
            url: "https://www.chariottracker.com",
            applicationCategory: "TrackingTool",
            operatingSystem: "Windows, macOS, Linux, iOS, Android",
            browserRequirements: "Requires JavaScript. Requires HTML5.",
            softwareVersion: "2.0",
            offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "MYR",
                availability: "https://schema.org/InStock",
                validFrom: `${currentYear}-01-01`,
                validThrough: `${currentYear}-12-31`,
            },
            featureList: [
                "Real-time chariot tracking with live GPS updates",
                "Multi-language support (English, Tamil, Malay, Chinese)",
                "Interactive map with checkpoint markers",
                "Instant checkpoint notifications",
                "Roadblock traffic information",
                "Historical tracking data",
            ],
        },
        {
            "@context": "https://schema.org",
            "@type": "ReligiousEvent",
            name: "Penang Thaipusam Silver Chariot Procession 2025",
            description:
                "Annual Thaipusam festival silver chariot procession in George Town, Penang. Journey from Kovil Veedu to Nattukkottai Chettiar Temple. A significant cultural and religious event featuring real-time location tracking, checkpoint updates, and devotee information.",
            startDate: "2025-02-09T06:00:00+08:00",
            endDate: "2025-02-13T12:00:00+08:00",
            eventStatus: "https://schema.org/EventScheduled",
            eventAttendanceMode:
                "https://schema.org/OfflineEventAttendanceMode",
            typicalAgeRange: "All ages",
            isAccessibleForFree: true,
            maximumAttendeeCapacity: 100000,
            organizer: {
                "@type": "Organization",
                name: "Nattukottai Chettiar Temple",
                url: "https://www.chariottracker.com",
            },
            image: [
                "https://www.chariottracker.com/assets/byebyte-1200x630.png",
                "https://www.chariottracker.com/assets/byebyte-1200x675.png",
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
            url: "https://www.chariottracker.com",
            logo: "https://www.chariottracker.com/assets/byebyte.png",
            sameAs: ["https://github.com/byebyteorg"],
            description:
                "Technology company specializing in web and mobile applications. Creator of the Penang Thaipusam Silver Chariot Tracker.",
            foundingDate: "2024",
            email: "byebyteorg@gmail.com",
            areaServed: "Penang, Malaysia",
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.chariottracker.com",
                },
            ],
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is the Penang Thaipusam Silver Chariot Tracker?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The Penang Thaipusam Silver Chariot Tracker is a real-time tracking application that allows devotees and visitors to follow the silver chariot's journey during the Thaipusam festival in George Town, Penang. It provides live GPS updates on the chariot's location, estimated arrival times at various checkpoints, roadblock information, and important announcements for both the outbound journey (Kovil Veedu to Nattukkottai Chettiar Temple) and return journey.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is the Chariot Tracker free to use?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, the Chariot Tracker is completely free to use and accessible on any device with a web browser.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What languages are supported?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The Chariot Tracker supports multiple languages including English, Malay (Bahasa Malaysia), Tamil, and Chinese to serve our diverse community. All real-time updates and notifications are available in all supported languages.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What information does the tracker provide?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The tracker provides real-time GPS location of the chariot, estimated arrival times at checkpoints, live roadblock updates. It also shows the complete route map with all checkpoints and historical tracking data from previous years.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How accurate is the tracking?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The tracker uses real-time GPS technology with updates every few seconds, providing highly accurate location data. However, please note that the accuracy may vary based on network conditions and device settings.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is the route of the Silver Chariot?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The Silver Chariot begins its journey at Kovil Veedu in George Town and proceeds to the Nattukkottai Chettiar Temple. The procession passes through various checkpoints in George Town, with the route clearly marked on our interactive map. The return journey follows a similar route back to Kovil Veedu.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can I get notifications about the chariot's location?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, you can enable push notifications to receive alerts when the chariot reaches different checkpoints, when there are roadblocks or route changes, and for other important announcements. Notifications are available in all supported languages.",
                    },
                },
            ],
        },
    ];

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
