import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import React from "react";
import { useAtom } from "jotai";
import { drawerAtom } from "@/atoms/drawer";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

function DrawerFinanceDrawer() {
    const [, setCurrentDrawer] = useAtom(drawerAtom);
    const t = useTranslations("Support.tnc");

    return (
        <Drawer
            onOpenChange={(open) => {
                setCurrentDrawer(open ? { type: "drawerFinance" } : null);
            }}
        >
            <DrawerTrigger asChild>
                <Button
                    variant="secondary"
                    className="flex items-center gap-x-2 bg-primary-600 text-primary-150 dark:bg-primary-50 dark:text-primary-800 opacity-80"
                >
                    {t("finance")}
                </Button>
            </DrawerTrigger>
            <DrawerContent className="px-3 w-full">
                <span>Test</span>
            </DrawerContent>
        </Drawer>
    );
}

export default DrawerFinanceDrawer;
