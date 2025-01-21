import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./components/shared/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import { ReactQueryProvider } from "./components/shared/ReactQueryProvider";
import { AnalyticsProvider } from "./components/shared/AnalyticsProvider";
import { Suspense } from "react";
import JsonLd from "./components/shared/JsonLd";

const geistSans = localFont({
    src: "../fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "../fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://chariottracker.com"),
    title: "Penang Silver Chariot Tracker | Live Thaipusam Chariot Tracking",
    description:
        "Live tracking service for Penang Thaipusam Silver Chariot. Follow the chariot's journey in real-time during the Thaipusam festival. Get updates on location, checkpoints, and arrival times.",
    keywords:
        "Penang Thaipusam, Silver Chariot, Chariot Tracker, Live Tracking, Thaipusam Festival, Penang Temple, Religious Procession, Real-time Location, Chettiar, Chettipusam, Chettipusam Tracker, Nagarathar, Kovil Veedu, Waterfall Temple",
    authors: [{ name: "ByeByte Technologies" }],
    category: "Religious Events",
    openGraph: {
        title: "Penang Silver Chariot Tracker | Live Thaipusam Tracking",
        description:
            "Live tracking service for Penang Thaipusam Silver Chariot. Follow the chariot's journey in real-time during the Thaipusam festival.",
        url: "https://chariottracker.com",
        siteName: "Penang Silver Chariot Tracker",
        images: [
            {
                url: "/assets/byebyte-1200x630.png",
                width: 1200,
                height: 630,
                alt: "Penang Silver Chariot",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Penang Silver Chariot Tracker",
        description:
            "Live tracking service for Penang Thaipusam Silver Chariot",
        images: ["/assets/byebyte-1200x675.png"],
    },
    icons: {
        icon: [
            {
                url: "/assets/favicon-16x16.png",
                sizes: "16x16",
                type: "image/png",
            },
            {
                url: "/assets/favicon-32x32.png",
                sizes: "32x32",
                type: "image/png",
            },
            {
                url: "/assets/favicon-96x96.png",
                sizes: "96x96",
                type: "image/png",
            },
        ],
        shortcut: "/assets/favicon.ico",
        apple: [
            {
                url: "/assets/apple-icon-57x57.png",
                sizes: "57x57",
                type: "image/png",
            },
            {
                url: "/assets/apple-icon-60x60.png",
                sizes: "60x60",
                type: "image/png",
            },
            {
                url: "/assets/apple-icon-72x72.png",
                sizes: "72x72",
                type: "image/png",
            },
            {
                url: "/assets/apple-icon-76x76.png",
                sizes: "76x76",
                type: "image/png",
            },
            {
                url: "/assets/apple-icon-114x114.png",
                sizes: "114x114",
                type: "image/png",
            },
            {
                url: "/assets/apple-icon-120x120.png",
                sizes: "120x120",
                type: "image/png",
            },
            {
                url: "/assets/apple-icon-144x144.png",
                sizes: "144x144",
                type: "image/png",
            },
            {
                url: "/assets/apple-icon-152x152.png",
                sizes: "152x152",
                type: "image/png",
            },
            {
                url: "/assets/apple-icon-180x180.png",
                sizes: "180x180",
                type: "image/png",
            },
        ],
        other: [
            { rel: "apple-touch-icon", url: "/assets/apple-icon.png" },
            {
                rel: "apple-touch-icon-precomposed",
                url: "/assets/apple-icon-precomposed.png",
            },
            {
                rel: "msapplication-TileImage",
                url: "/assets/ms-icon-144x144.png",
            },
            {
                rel: "msapplication-square70x70logo",
                url: "/assets/ms-icon-70x70.png",
            },
            {
                rel: "msapplication-square150x150logo",
                url: "/assets/ms-icon-150x150.png",
            },
            {
                rel: "msapplication-square310x310logo",
                url: "/assets/ms-icon-310x310.png",
            },
        ],
    },
    manifest: "/manifest.json",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    verification: {
        google: "google-site-verification-code", // Add your Google verification code
    },
    other: {
        "facebook-domain-verification": "facebook-domain-verification-code",
    },
    // TODO: add more language routes
    alternates: {
        canonical: "https://chariottracker.com",
        languages: {
            "en-US": "https://chariottracker.com",
            "zh-CN": "https://chariottracker.com/zh",
            "ta-IN": "https://chariottracker.com/ta",
            "ms-MY": "https://chariottracker.com/ms",
        },
    },
    formatDetection: {
        telephone: true,
        date: true,
        address: true,
        email: true,
        url: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <JsonLd />
                <Suspense>
                    <AnalyticsProvider />
                </Suspense>
                <ReactQueryProvider>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        {children}
                    </ThemeProvider>
                </ReactQueryProvider>
                <Toaster />
            </body>
        </html>
    );
}
