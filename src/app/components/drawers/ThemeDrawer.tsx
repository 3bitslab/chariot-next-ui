import { Drawer, DrawerContent, DrawerTitle } from "@/components/ui/drawer";
import React from "react";
import Selectables from "../shared/Selectables";
import { TSelectableItem } from "@/constants/types";
import { ComputerIcon, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Divider from "../Divider";
import { useTranslations } from "next-intl";

interface ThemeDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

function ThemeDrawer({ isOpen, onClose }: ThemeDrawerProps) {
    const { theme, setTheme } = useTheme();
    const t = useTranslations("Theme");

    const selectableItems: TSelectableItem[] = [
        {
            title: t("dark.title"),
            value: "dark",
            description: t("dark.description"),
            logo: (
                <MoonIcon
                    strokeWidth={1}
                    size={30}
                    className="stroke-primary-850 dark:stroke-primary-150"
                />
            ),
        },
        {
            title: t("light.title"),
            value: "light",
            description: t("light.description"),
            logo: (
                <SunIcon
                    size={30}
                    strokeWidth={1}
                    className="stroke-primary-850 dark:stroke-primary-150"
                />
            ),
        },
        {
            title: t("system.title"),
            value: "system",
            description: t("system.description"),
            logo: (
                <ComputerIcon
                    size={30}
                    strokeWidth={1}
                    className="stroke-primary-850 dark:stroke-primary-150"
                />
            ),
        },
    ];

    return (
        <Drawer open={isOpen} onOpenChange={onClose}>
            <DrawerContent className="px-3 w-full">
                <div className="py-5 gap-y-3 flex flex-col w-full">
                    <DrawerTitle className="font-control opacity-70 dark:opacity-90 py-3">
                        {t("drawerTitle")}
                    </DrawerTitle>
                    <Divider />
                    <Selectables
                        onItemChange={setTheme}
                        items={selectableItems}
                        currentValue={theme || "system"}
                    />
                </div>
            </DrawerContent>
        </Drawer>
    );
}

export default ThemeDrawer;
