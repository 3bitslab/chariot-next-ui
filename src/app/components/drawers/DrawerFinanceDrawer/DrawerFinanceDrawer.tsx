import { Drawer, DrawerContent, DrawerTitle } from "@/components/ui/drawer";
import React, { useState } from "react";
import DonationsList from "./DonationsList";
import ExpensesList from "./ExpensesList";
import { useAtom } from "jotai";
import { drawerAtom } from "@/atoms/drawer";
import Divider from "../../Divider";
import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";

function DrawerFinanceDrawer() {
    const [currentDrawer, setCurrentDrawer] = useAtom(drawerAtom);
    const [isExpenses, setIsExpenses] = useState(true);
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
                    <DrawerTitle className="py-3 flex flex-col gap-2">
                        <div className="flex justify-between items-center">
                            <span className="font-semibold opacity-80 text-primary-800 dark:text-primary-150">
                                {t("title")}
                            </span>
                            <div className="flex gap-2">
                                <Badge
                                    variant={
                                        !isExpenses ? "default" : "outline"
                                    }
                                    className="cursor-pointer px-4 py-2"
                                    onClick={() => setIsExpenses(false)}
                                >
                                    {t("donations")}
                                </Badge>
                                <Badge
                                    variant={isExpenses ? "default" : "outline"}
                                    className="cursor-pointer px-4 py-2"
                                    onClick={() => setIsExpenses(true)}
                                >
                                    {t("expenses")}
                                </Badge>
                            </div>
                        </div>
                        <p className="text-xs text-muted-foreground">
                            {t("privacyNotice")}
                        </p>
                        <p className="text-xs text-muted-foreground">
                            {t("lastUpdated")}
                        </p>
                    </DrawerTitle>

                    {/* Divider */}
                    <Divider />

                    {/* Content */}
                    {isExpenses ? <ExpensesList /> : <DonationsList />}
                </div>
            </DrawerContent>
        </Drawer>
    );
}

export default DrawerFinanceDrawer;
