export default function JsonLd() {
    const currentYear = new Date().getFullYear();
    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Chariot Tracker",
            alternateName: [
                "Track Silver Chariot",
                "Track Chariot Location",
                "Penang Chariot Tracker",
                "Thaipusam Chariot Tracker",
                "Real-time Chariot Tracking",
            ],
            description:
                "Track the Silver Chariot in real-time with Malaysia's most advanced tracking application. Get precise location tracking, instant updates, checkpoint alerts, and live route information for Penang Thaipusam 2025.",
            url: "https://www.chariottracker.com",
            applicationCategory: "TrackingTool",
            operatingSystem: "Windows, macOS, Linux, iOS, Android",
            browserRequirements: "Requires JavaScript. Requires HTML5.",
            softwareVersion: "2.0",
            aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "38000",
                bestRating: "5",
                worstRating: "1",
            },
            offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "MYR",
                availability: "https://schema.org/InStock",
                validFrom: `${currentYear}-01-01`,
                validThrough: `${currentYear}-12-31`,
            },
            featureList: [
                "Real-time GPS tracking with live location updates every few seconds",
                "Precise chariot position tracking with advanced GPS technology",
                "Multi-language support (English, Tamil, Malay, Chinese)",
                "Interactive tracking map with checkpoint markers",
                "Track checkpoints and get instant notifications",
                "Live roadblock and traffic tracking",
                "Historical tracking data with route replay",
                "Track multiple aspects of the chariot journey",
            ],
            screenshot: [
                {
                    "@type": "ImageObject",
                    url: "https://www.chariottracker.com/assets/byebyte-1200x630.png",
                    caption: "Chariot Tracker live tracking interface",
                },
            ],
            applicationSubCategory: "Religious Event Tracking",
            downloadUrl: "https://www.chariottracker.com",
        },
        {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Chariot Tracker",
            applicationCategory: "UtilitiesApplication",
            operatingSystem: "Any",
            offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "MYR",
            },
            aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "38000",
            },
        },
        {
            "@context": "https://schema.org",
            "@type": "ReligiousEvent",
            name: "Penang Thaipusam Silver Chariot Procession 2025 - Live Tracking",
            description:
                "Track the sacred Thaipusam chariot journey in real-time with Malaysia's most trusted chariot tracker. Get instant updates on chariot location, checkpoint timings, and roadblock information throughout Penang.",
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
                "Creator of Chariot Tracker application, trusted by 38,000+ users for real-time Thaipusam chariot tracking.",
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
                    name: "Chariot Tracker",
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
                    name: "How can I track the Silver Chariot's location?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "You can easily track the Silver Chariot's location in real-time using Chariot Tracker. Our advanced GPS tracking system provides precise location updates every few seconds, showing you exactly where the chariot is on its sacred journey. Simply visit our website to start tracking - no installation required. Used and trusted by 38,000+ devotees for accurate tracking.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What makes Chariot Tracker the best tracking solution?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Chariot Tracker is the most reliable and accurate tracking system for Penang's Thaipusam silver chariot. We provide real-time GPS tracking updates every few seconds, comprehensive checkpoint tracking, and instant notifications. Our tracking system is specifically optimized for George Town's urban environment, ensuring you never lose track of the chariot's location.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Chariot Tracker free to use?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, Chariot Tracker is completely free to use and accessible on any device with a web browser. No installation or download required.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What tracking features does Chariot Tracker offer?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Chariot Tracker offers comprehensive tracking features including real-time GPS location tracking, precise position monitoring, estimated arrival times at checkpoints, live roadblock tracking, multi-language support (English, Tamil, Malay, Chinese), interactive tracking maps, historical tracking data with route replay, and offline mode support.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How accurate is the tracking in Chariot Tracker?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Chariot Tracker uses advanced real-time GPS tracking technology with updates every few seconds, providing the most accurate location tracking data for the silver chariot in Penang. Our tracking system is specifically optimized for George Town's urban environment and maintains high accuracy even in crowded conditions, ensuring you can track the chariot's exact position at all times.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is the chariot route tracked by Chariot Tracker?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Chariot Tracker follows the silver chariot's journey from Kovil Veedu (26, Lebuh Queen) through George Town's heritage zone to the Nattukkottai Chettiar Temple (Waterfall Temple). The route includes multiple checkpoints marked on our interactive map, with real-time updates throughout the entire procession.",
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
