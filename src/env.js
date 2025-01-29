import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
    server: {},
    client: {
        NEXT_PUBLIC_FETCH_INTERVAL_SECONDS: z
            .string()
            .transform((val) => parseInt(val, 10)),
        NEXT_PUBLIC_API_URL: z.string(),
        NEXT_PUBLIC_USE_MOCK_DATA: z
            .enum(["true", "false"])
            .transform((val) => val === "true"),
        NEXT_PUBLIC_MIXPANEL_TOKEN: z.string(),
    },
    runtimeEnv: {
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
        NEXT_PUBLIC_USE_MOCK_DATA: process.env.NEXT_PUBLIC_USE_MOCK_DATA,
        NEXT_PUBLIC_MIXPANEL_TOKEN: process.env.NEXT_PUBLIC_MIXPANEL_TOKEN,
        NEXT_PUBLIC_FETCH_INTERVAL_SECONDS:
            process.env.NEXT_PUBLIC_FETCH_INTERVAL_SECONDS,
    },
});
