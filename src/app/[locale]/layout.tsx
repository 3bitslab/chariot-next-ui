import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Provider } from "jotai";

import type { Metadata } from "next";
import localFont from "next/font/local";
import ".././globals.css";
import { ThemeProvider } from ".././components/shared/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import { ReactQueryProvider } from ".././components/shared/ReactQueryProvider";
import { AnalyticsProvider } from ".././components/shared/AnalyticsProvider";
import { Suspense } from "react";
import JsonLd from ".././components/shared/JsonLd";

const geistSans = localFont({
    src: "../../fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "../../fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://www.chariottracker.com"),
    title: "Penang Silver Chariot Tracker 2025 | Real-time Thaipusam Chariot Location in George Town",
    description:
        "Independent live tracking service for the 2025 Penang Thaipusam Silver Chariot. Access real-time chariot location updates, view checkpoint history data, stay informed on PDRM roadblocks and traffic controls, and find detailed route information for the procession in George Town, Penang.",
    keywords:
        "Penang Thaipusam 2025, Silver Chariot Location, Thaipusam Festival Penang, Live Chariot Tracking, George Town Thaipusam, Real-time Location Updates, Waterfall Temple, Nattukkottai Chettiar Temple, Penang Temple Route, Religious Procession Tracking, Penang Thaipusam 2025 Route, Penang Silver Chariot Live Updates, Penang Thaipusam Live Map, Chettipusam Procession George Town, Nagarathar Kovil Veedu to Waterfall Temple, Kavadi Route Thaipusam 2025, Pulau Pinang Thaipusam Tracker",
    authors: [
        { name: "ByeByte Technologies", url: "https://www.chariottracker.com" },
    ],
    creator: "ByeByte Technologies",
    publisher: "ByeByte Technologies",
    category: "Religious Events",
    applicationName: "Penang Silver Chariot Tracker",
    appleWebApp: {
        capable: true,
        title: "Penang Silver Chariot Tracker",
        statusBarStyle: "default",
    },
    formatDetection: {
        telephone: true,
        date: true,
        address: true,
        email: true,
        url: true,
    },
    openGraph: {
        title: "Penang Silver Chariot Tracker 2025 | Live Thaipusam Route Map",
        description:
            "Independent live tracking service for the 2025 Penang Thaipusam Silver Chariot. Access real-time chariot location updates, view checkpoint history data, stay informed on PDRM roadblocks and traffic controls, and find detailed route information for the procession in George Town, Penang.",
        url: "https://www.chariottracker.com",
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
        countryName: "Malaysia",
    },
    twitter: {
        card: "summary_large_image",
        title: "Penang Silver Chariot Tracker 2025 | Live Updates",
        description:
            "Follow Penang's Thaipusam Silver Chariot procession in real-time. Get instant updates on location, checkpoints, and estimated arrival times in George Town.",
        site: "@byebytetech",
        creator: "@byebytetech",
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
        google: "google-site-verification=tWhYvNmnJFjtc3TjNf64dW1jpDd-JxСM3CDaozNIЕЗE",
    },
    alternates: {
        canonical: "https://www.chariottracker.com",
        languages: {
            "en-US": "https://www.chariottracker.com/en",
            "zh-CN": "https://www.chariottracker.com/zh",
            "ta-IN": "https://www.chariottracker.com/ta",
            "ms-MY": "https://www.chariottracker.com/ms",
        },
    },
};

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: { locale: (typeof routing.locales)[number] };
}>) {
    const { locale } = params;

    if (!routing.locales.includes(locale)) {
        notFound();
    }

    const messages = await getMessages();
    return (
        <html lang={locale} suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <NextIntlClientProvider messages={messages}>
                    <Provider>
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
                    </Provider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
