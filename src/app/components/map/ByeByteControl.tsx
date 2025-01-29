import { useTheme } from "next-themes";
import { useEffect } from "react";
import { useMap } from "react-leaflet";

const ByeByteControl = () => {
    const map = useMap();
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        if (!map) return;

        map.attributionControl.setPrefix(false);
        const attributionContainer = map.attributionControl.getContainer();
        if (attributionContainer) {
            if (resolvedTheme === "dark") {
                attributionContainer.style.backgroundColor = "#1A1021";
                attributionContainer.style.color = "rgba(230,220,238,0.5)";
            } else {
                attributionContainer.style.backgroundColor = "#F3EEF6";
                attributionContainer.style.color = "rgba(26,16,33,0.5)";
            }
        }

        const combinedAttribution = `
      <span>
        <!-- 2: ByeByte -->
        <a
          href="mailto:byebyteorg@gmail.com"
          style="text-decoration: underline; color: ${
              resolvedTheme === "dark"
                  ? "rgba(230,220,238,0.5)"
                  : "rgba(39,24,50,0.5)"
          }; vertical-align: middle;"
        >
          ByeByte Technologies ©
        </a>
        &nbsp;|&nbsp;
        <!-- 1: Leaflet -->
        <a
          href="https://leafletjs.com"
          style="text-decoration: underline; color: ${
              resolvedTheme === "dark"
                  ? "rgba(230,220,238,0.5)"
                  : "rgba(39,24,50,0.5)"
          }; vertical-align: middle;"
        >
          Leaflet
        </a>
        &nbsp;|&nbsp;
        <!-- 3: OSM -->
        <a
          href="https://www.openstreetmap.org/copyright"
          style="text-decoration: underline; color: ${
              resolvedTheme === "dark"
                  ? "rgba(230,220,238,0.5)"
                  : "rgba(39,24,50,0.5)"
          }; vertical-align: middle;"
        >
          OpenStreetMap ©
        </a>
      </span>
    `;

        map.attributionControl.addAttribution(combinedAttribution);

        return () => {
            map.attributionControl.removeAttribution(combinedAttribution);
        };
    }, [map, resolvedTheme]);

    return null;
};

export default ByeByteControl;
