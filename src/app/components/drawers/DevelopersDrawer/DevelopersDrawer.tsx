import {
    Drawer,
    DrawerContent,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import React from "react";
import { useAtom } from "jotai";
import { drawerAtom } from "@/atoms/drawer";
import { UserIcon } from "lucide-react";
import { DEVELOPERS } from "@/constants/developers";
import Developer from "./Developer";
import { useTranslations } from "next-intl";

function DevelopersDrawer() {
    const t = useTranslations("Developers");
    const [, setCurrentDrawer] = useAtom(drawerAtom);

    return (
        <Drawer
            onOpenChange={(open) => {
                setCurrentDrawer(open ? "developers" : null);
            }}
        >
            <DrawerTrigger asChild>
                <button>
                    <UserIcon className="stroke-primary-850 dark:stroke-primary-150 size-4 lg:size-6" />
                </button>
            </DrawerTrigger>
            <DrawerContent className="px-3 w-full">
                <div className="flex flex-col py-10 overflow-y-auto">
                    <DrawerTitle className="text-center pb-5">
                        {t("drawer.title")}
                    </DrawerTitle>
                    <div className="flex flex-col gap-y-4">
                        {DEVELOPERS.map((developer) => (
                            <Developer
                                key={developer.name}
                                developer={developer}
                            />
                        ))}
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    );
}

export default DevelopersDrawer;
