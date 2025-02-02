export default function JsonLd() {
    const currentYear = new Date().getFullYear();
    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Chariot Tracker Penang - Thaipusam Silver Chariot Tracking",
            description:
                "Independent tracking service for Penang's Thaipusam Silver Chariot. Follow the chariot's journey in real-time through George Town, Penang during the Thaipusam festival 2025.",
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
            name: "Penang Thaipusam Silver Chariot Procession 2025 - Live Tracking",
            description:
                "Annual Thaipusam festival silver chariot procession in George Town, Penang, Malaysia. Track the sacred journey from Kovil Veedu to Nattukkottai Chettiar Temple (Waterfall Temple) with our real-time GPS tracking system. Get live updates on chariot location, checkpoint timings, and roadblock information throughout Penang.",
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
                        streetAddress: "26, Lebuh Queen, George Town",
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
                        streetAddress:
                            "Waterfall Road, Pulau Tikus, George Town",
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
            areaServed: {
                "@type": "City",
                name: "George Town",
                containedIn: {
                    "@type": "State",
                    name: "Penang",
                    containedIn: {
                        "@type": "Country",
                        name: "Malaysia",
                    },
                },
            },
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
                        text: "The Chariot Tracker Penang is the independent real-time tracking application for following the silver chariot's sacred journey during Thaipusam in George Town, Penang. Our advanced GPS tracking system provides precise location updates, estimated arrival times at key checkpoints, PDRM roadblock information, and important announcements for both outbound (Kovil Veedu to Waterfall Temple) and return journeys. Used by 38,000+ devotees and visitors in Penang in the year 2024.",
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
                        text: "The Chariot Tracker Penang uses advanced real-time GPS technology with updates every few seconds, providing the most accurate location data for the silver chariot in Penang. Our tracking system is specifically optimized for George Town's urban environment, though accuracy may vary slightly based on network conditions and device settings.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is the route of the Silver Chariot?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The Silver Chariot begins its sacred journey at Kovil Veedu (26, Lebuh Queen) in George Town, Penang and proceeds through the heritage zone to the Nattukkottai Chettiar Temple (Waterfall Temple). The procession follows a traditional route through George Town's historic streets, with multiple checkpoints marked on our interactive map. The return journey traces the path back to Kovil Veedu, completing the auspicious circuit through Penang's cultural heart.",
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
