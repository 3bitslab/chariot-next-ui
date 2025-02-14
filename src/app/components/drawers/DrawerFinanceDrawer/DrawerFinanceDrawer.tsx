import { Drawer, DrawerContent } from "@/components/ui/drawer";
import React from "react";
import { useAtom } from "jotai";
import { drawerAtom } from "@/atoms/drawer";

function DrawerFinanceDrawer() {
    const [currentDrawer, setCurrentDrawer] = useAtom(drawerAtom);
    const isOpen = currentDrawer?.type === "drawerFinance";

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
                <span>Test</span>
            </DrawerContent>
        </Drawer>
    );
}

export default DrawerFinanceDrawer;
