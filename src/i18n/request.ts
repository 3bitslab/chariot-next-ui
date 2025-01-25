import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
    // This typically corresponds to the `[locale]` segment
    let locale = (await requestLocale) as (typeof routing.locales)[number];

    // Ensure that a valid locale is used
    if (!locale || !routing.locales.includes(locale)) {
        locale = routing.defaultLocale as (typeof routing.locales)[number];
    }

    return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default,
    };
});
