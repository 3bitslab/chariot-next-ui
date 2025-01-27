import { useTheme } from "next-themes";
import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";

const ByeByteControl = () => {
    const map = useMap();
    const { theme } = useTheme();

    useEffect(() => {
        const LogoControl = L.Control.extend({
            options: {
                position: "bottomright",
            },
            onAdd: () => {
                const container = L.DomUtil.create("div", "");
                container.className = "bg-white/80 px-1.5 py-0.5 !m-0";

                const link = L.DomUtil.create("a", "", container);
                link.href = "mailto:byebyteorg@gmail.com";
                link.className =
                    "flex items-center gap-0.5 text-[10px] no-underline text-black hover:underline";

                const logo = L.DomUtil.create("img", "", link);
                logo.src = "/assets/byebyte.png";
                logo.className = "w-2 h-2 object-contain";

                const textSpan = L.DomUtil.create("span", "", link);
                textSpan.className = "text-[10px]";
                textSpan.textContent = "Developed by ByteByte Technologies";

                return container;
            },
        });

        const logoControl = new LogoControl();
        map.addControl(logoControl);

        return () => {
            map.removeControl(logoControl);
        };
    }, [map, theme]);

    return null;
};

export default ByeByteControl;
