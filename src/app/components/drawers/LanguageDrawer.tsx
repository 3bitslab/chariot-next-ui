import React, { useEffect } from "react";
import { Drawer, DrawerContent, DrawerTitle } from "@/components/ui/drawer";
import Selectables from "../shared/Selectables";
import { TSelectableItem } from "@/constants/types";
import Divider from "../Divider";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useAtom } from "jotai";
import { drawerAtom } from "@/atoms/drawer";
import { languageAtom } from "@/atoms/language";

interface LanguageDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

function LanguageDrawer({ isOpen, onClose }: LanguageDrawerProps) {
    const router = useRouter();
    const pathname = usePathname();
    const t = useTranslations("Language");
    const [currentDrawer, setCurrentDrawer] = useAtom(drawerAtom);
    const [currentLanguage, setCurrentLanguage] = useAtom(languageAtom);

    useEffect(() => {
        const currentLocale = pathname.split("/")[1];
        if (currentLocale && currentLocale !== currentLanguage) {
            setCurrentLanguage(currentLocale as typeof currentLanguage);
        }
    }, [pathname, currentLanguage, setCurrentLanguage]);

    useEffect(() => {
        if (isOpen) {
            setCurrentDrawer({ type: "language" });
        }
    }, [isOpen, setCurrentDrawer]);

    useEffect(() => {
        if (currentDrawer && currentDrawer.type !== "language" && isOpen) {
            onClose();
        }
    }, [currentDrawer, isOpen, onClose]);

    const getLanguageIcon = (lang: string) => {
        const baseClasses =
            "w-10 h-10 aspect-square rounded-full flex items-center justify-center text-sm font-semibold bg-primary-850 dark:bg-primary-150 text-white dark:text-gray-900 uppercase";

        return <div className={baseClasses}>{lang}</div>;
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
        const validLocale = locale as typeof currentLanguage;
        const segments = pathname.split("/");
        segments[1] = locale;
        setCurrentLanguage(validLocale);
        router.push(segments.join("/"));
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
                        currentValue={currentLanguage}
                    />
                </div>
            </DrawerContent>
        </Drawer>
    );
}

export default LanguageDrawer;
