export default function JsonLd() {
    const currentYear = new Date().getFullYear();
    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Chariot Tracker",
            alternateName: [
                "Penang Chariot Tracker",
                "Thaipusam Chariot Tracker",
            ],
            description:
                "Independent real-time chariot tracking application. Get instant location updates, checkpoint alerts, and live route information for Penang Thaipusam 2025.",
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
                "Real-time GPS tracking with live updates",
                "Multi-language support (English, Tamil, Malay, Chinese)",
                "Interactive map with checkpoint markers",
                "Instant checkpoint notifications",
                "Roadblock and traffic information",
                "Historical tracking data",
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
                    name: "What is the Chariot Tracker?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Chariot Tracker is an independent real-time tracking application for following the silver chariot during Thaipusam in Penang. Our advanced GPS tracking system provides precise location updates, estimated arrival times, roadblock information, and important announcements. Used and trusted by 38,000+ devotees and visitors.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Why choose Chariot Tracker?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Chariot Tracker is the most reliable and accurate tracking system for Penang's Thaipusam silver chariot. We provide real-time GPS updates every few seconds, comprehensive checkpoint information, and instant notifications. Our tracking system is specifically optimized for George Town's urban environment.",
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
                    name: "What features does Chariot Tracker offer?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Chariot Tracker provides real-time GPS location tracking, estimated arrival times at checkpoints, live roadblock updates, multi-language support (English, Tamil, Malay, Chinese), interactive maps, historical tracking data, and offline mode support.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How accurate is Chariot Tracker?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Chariot Tracker uses advanced real-time GPS technology with updates every few seconds, providing the most accurate location data for the silver chariot in Penang. Our system is specifically optimized for George Town's urban environment and maintains high accuracy even in crowded conditions.",
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
