import React from "react";
import { Drawer, DrawerContent, DrawerTitle } from "@/components/ui/drawer";
import Selectables from "../shared/Selectables";
import { TSelectableItem } from "@/constants/types";
import Divider from "../Divider";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

interface LanguageDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

function LanguageDrawer({ isOpen, onClose }: LanguageDrawerProps) {
    const router = useRouter();
    const pathname = usePathname();
    const t = useTranslations("Language");

    const getLanguageIcon = (lang: string) => {
        const baseClasses =
            "w-10 h-10 aspect-square rounded-full flex items-center justify-center text-sm font-semibold bg-primary-850 dark:bg-primary-150 text-white dark:text-gray-900";
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

    const selectableItems: TSelectableItem[] = [
        {
            title: "English",
            value: "en",
            description: t("english.description"),
            logo: getLanguageIcon("en"),
        },
        {
            title: "Bahasa Melayu",
            value: "ms",
            description: t("malay.description"),
            logo: getLanguageIcon("ms"),
        },
        {
            title: "தமிழ்",
            value: "ta",
            description: t("tamil.description"),
            logo: getLanguageIcon("ta"),
        },
        {
            title: "中文",
            value: "zh",
            description: t("chinese.description"),
            logo: getLanguageIcon("zh"),
        },
    ];

    const handleLanguageChange = (locale: string) => {
        const segments = pathname.split("/");
        segments[1] = locale;
        router.push(segments.join("/"));
        onClose();
    };

    const getCurrentLanguage = () => {
        const segments = pathname.split("/");
        return segments[1] || "en";
    };

    return (
        <Drawer open={isOpen} onOpenChange={onClose}>
            <DrawerContent className="px-3 w-full">
                <div className="py-5 gap-y-3 flex flex-col w-full">
                    <DrawerTitle className="font-control opacity-70 dark:opacity-90 py-3">
                        {t("drawerTitle")}
                    </DrawerTitle>
                    <Divider />
                    <Selectables
                        onItemChange={handleLanguageChange}
                        items={selectableItems}
                        currentValue={getCurrentLanguage()}
                    />
                </div>
            </DrawerContent>
        </Drawer>
    );
}

export default LanguageDrawer;
