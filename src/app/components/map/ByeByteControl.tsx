import { useEffect } from "react";
import { useMap } from "react-leaflet";

const ByeByteControl = () => {
    const map = useMap();

    useEffect(() => {
        if (!map) return;

        const byebyteAttribution = `
            <a href="mailto:byebyteorg@gmail.com" class="flex flex-row gap-1 text-black underline">
                <img src="/assets/byebyte.png" class="w-3 h-3 object-contain" alt="ByeByte" />
                ByeByte Technologies ©
            </a>
        `;

        map.attributionControl.addAttribution(byebyteAttribution);

        return () => {
            map.attributionControl.removeAttribution(byebyteAttribution);
        };
    }, [map]);

    return null;
};

export default ByeByteControl;
