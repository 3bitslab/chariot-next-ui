import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import React, { useState } from "react";
import { HeartIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import TNCScene from "./TNCScene";
import BankAccountScene from "./BankAccountScene";
import { useTranslations } from "next-intl";

function SupportDrawer() {
    const [scene, setScene] = useState<0 | 1>(0);

    const handleSceneChange = (scene: 0 | 1) => {
        setScene(scene);
    };

    const t = useTranslations("Support.drawer");

    return (
        <Drawer onClose={() => setScene(0)}>
            <DrawerTrigger asChild>
                <Button>
                    <HeartIcon
                        size={30}
                        strokeWidth={1}
                        className="stroke-primary-850 dark:stroke-primary-50"
                    />
                    <span className="capitalize">{t("title")}</span>
                </Button>
            </DrawerTrigger>
            <DrawerContent className="px-3 w-full">
                <div className="py-5 flex flex-col w-full gap-y-3">
                    <div className="flex flex-col items-center space-y-2">
                        <span className="font-medium text-primary-850 text-2xl dark:text-primary-50">
                            {t("description")}
                        </span>
                        <span className="italic text-md dark:text-primary-100">
                            {scene === 0 ? t("reason") : t("gratitude")}
                        </span>
                    </div>
                    {scene === 0 ? (
                        <TNCScene handleSceneChange={handleSceneChange} />
                    ) : (
                        <BankAccountScene />
                    )}
                </div>
            </DrawerContent>
        </Drawer>
    );
}

export default SupportDrawer;
