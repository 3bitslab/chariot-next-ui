import { useEffect } from "react";
import { useMap } from "react-leaflet";

const ByeByteControl = () => {
    const map = useMap();

    useEffect(() => {
        if (!map) return;

        map.attributionControl.setPrefix(false);
        const attributionContainer = map.attributionControl.getContainer();
        if (attributionContainer) {
            attributionContainer.style.backgroundColor = "#1A1021";
            attributionContainer.style.color = "white";
        }

        const combinedAttribution = `
      <span>
        <!-- 2: ByeByte -->
        <a
          href="mailto:byebyteorg@gmail.com"
        style="text-decoration: underline; color: white; vertical-align: middle;"
        >
          ByeByte Technologies ©
        </a>

        &nbsp;|&nbsp;

        <!-- 1: Leaflet -->
        <a
          href="https://leafletjs.com"
          style="text-decoration: underline; color: white; vertical-align: middle;"
        >
          Leaflet
        </a>

        &nbsp;|&nbsp;

        <!-- 3: OSM -->
        <a
          href="https://www.openstreetmap.org/copyright"
          style="text-decoration: underline; color: white; vertical-align: middle;"
        >
          OpenStreetMap ©
        </a>
      </span>
    `;

        map.attributionControl.addAttribution(combinedAttribution);

        return () => {
            map.attributionControl.removeAttribution(combinedAttribution);
        };
    }, [map]);

    return null;
};

export default ByeByteControl;
