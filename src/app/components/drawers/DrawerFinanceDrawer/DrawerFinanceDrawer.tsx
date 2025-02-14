import { Drawer, DrawerContent, DrawerTitle } from "@/components/ui/drawer";
import React from "react";
import DonationsList from "./DonationsList";
import { useAtom } from "jotai";
import { drawerAtom } from "@/atoms/drawer";
import Divider from "../../Divider";
import { useTranslations } from "next-intl";

function DrawerFinanceDrawer() {
    const [currentDrawer, setCurrentDrawer] = useAtom(drawerAtom);
    const isOpen = currentDrawer?.type === "drawerFinance";
    const t = useTranslations("Financial");

    return (
        <Drawer
            open={isOpen}
            onOpenChange={(open) => {
                if (open) {
                    setCurrentDrawer({ type: "drawerFinance" });
                } else if (currentDrawer?.type === "drawerFinance") {
                    setCurrentDrawer(null);
                }
            }}
        >
            <DrawerContent className="px-3 w-full">
                <div className="py-5 gap-y-3 flex flex-col w-full h-[80vh]">
                    <DrawerTitle className="py-3 flex justify-between items-center">
                        <span className="font-semibold opacity-80 text-primary-800 dark:text-primary-150">
                            {t("title")}
                        </span>
                    </DrawerTitle>

                    {/* Divider */}
                    <Divider />

                    {/* Donations List */}
                    <DonationsList />
                </div>
            </DrawerContent>
        </Drawer>
    );
}

export default DrawerFinanceDrawer;
