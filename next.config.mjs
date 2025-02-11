import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    env: {
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
        NEXT_PUBLIC_USE_MOCK_DATA: process.env.NEXT_PUBLIC_USE_MOCK_DATA,
        NEXT_PUBLIC_MIXPANEL_TOKEN: process.env.NEXT_PUBLIC_MIXPANEL_TOKEN,
        NEXT_PUBLIC_FETCH_INTERVAL_SECONDS:
            process.env.NEXT_PUBLIC_FETCH_INTERVAL_SECONDS,
        NEXT_PUBLIC_JOURNEY: process.env.NEXT_PUBLIC_JOURNEY,
    },
};

export default withNextIntl(nextConfig);
