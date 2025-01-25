// SettingsDrawer.tsx
import React, { useState } from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import {
    Settings,
    ChevronDown,
    ChevronRight,
    Moon,
    Sun,
    Computer,
} from "lucide-react";
import { useTranslations } from "next-intl";
import ThemeDrawer from "./ThemeDrawer";
import LanguageDrawer from "./LanguageDrawer";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

function SettingsDrawer() {
    const { theme } = useTheme();
    const t = useTranslations("Settings");
    const pathname = usePathname();
    const currentLanguage = pathname.split("/")[1] || "en";

    const getLanguageIcon = (lang: string) => {
        const baseClasses =
            "size-8 rounded-full flex items-center justify-center text-xs font-medium bg-primary-850 dark:bg-primary-150 text-white dark:text-gray-900";
        const labels = {
            en: "ENG",
            ms: "BM",
            ta: "TM",
            zh: "ZH",
        };
        return (
            <div className={baseClasses}>
                {labels[lang as keyof typeof labels]}
            </div>
        );
    };
    const [isThemeDrawerOpen, setIsThemeDrawerOpen] = useState(false);
    const [isLanguageDrawerOpen, setIsLanguageDrawerOpen] = useState(false);

    const openThemeDrawer = () => {
        setIsThemeDrawerOpen(true);
    };

    const openLanguageDrawer = () => {
        setIsLanguageDrawerOpen(true);
    };

    return (
        <>
            {/* Main Settings Drawer */}
            <Drawer>
                <DrawerTrigger asChild>
                    <Button>
                    <Settings
                            size={24}
                            strokeWidth={1.5}
                            className="stroke-primary-850 dark:stroke-primary-150"
                        />
                        <span className="capitalize hidden min-[300px]:block ml-2 text-sm font-medium">
                            {t("title")}
                        </span>
                        <ChevronDown className="ml-1" size={20} />
                    </Button>
                </DrawerTrigger>
                <DrawerContent className="px-3 w-full">
                    <div className="flex flex-col gap-4">
                        {/* Theme Button */}
                        <Button
                            variant="ghost"
                            onClick={openThemeDrawer}
                            className="justify-between flex items-center text-left w-full p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                            <div className="flex items-center">
                                {theme === "dark" ? (
                                    <Moon
                                        size={20}
                                        className="stroke-primary-850 dark:stroke-primary-150"
                                    />
                                ) : theme === "light" ? (
                                    <Sun
                                        size={20}
                                        className="stroke-primary-850 dark:stroke-primary-150"
                                    />
                                ) : (
                                    <Computer
                                        size={20}
                                        className="stroke-primary-850 dark:stroke-primary-150"
                                    />
                                )}
                                <span className="ml-3 text-sm font-medium">
                                    {t("theme.tab")}
                                </span>
                            </div>
                            <ChevronRight
                                size={20}
                                className="stroke-primary-850 dark:stroke-primary-150"
                            />
                        </Button>

                        {/* Language Button */}
                        <Button
                            variant="ghost"
                            onClick={openLanguageDrawer}
                            className="justify-between flex items-center text-left w-full p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                            <div className="flex items-center">
                                {getLanguageIcon(currentLanguage)}
                                <span className="ml-3 text-sm font-medium">
                                    {t("language.tab")}
                                </span>
                            </div>
                            <ChevronRight
                                size={20}
                                className="stroke-primary-850 dark:stroke-primary-150"
                            />
                        </Button>
                    </div>
                </DrawerContent>
            </Drawer>

            {/* Theme Drawer */}
            <ThemeDrawer
                isOpen={isThemeDrawerOpen}
                onClose={() => setIsThemeDrawerOpen(false)}
            />

            {/* Language Drawer */}
            <LanguageDrawer
                isOpen={isLanguageDrawerOpen}
                onClose={() => setIsLanguageDrawerOpen(false)}
            />
        </>
    );
}

export default SettingsDrawer;
