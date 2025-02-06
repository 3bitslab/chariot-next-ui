import L from "leaflet";

const chariotIcon = L.divIcon({
    html: `<img src="/assets/svg/chariot.svg"/>`,
    className: "chariot-svg-icon",
    iconSize: [48, 48],
    iconAnchor: [24, 24],
});

const createEndIcon = (text: string) =>
    L.divIcon({
        html: `
        <div class="relative w-[55px] h-[55px] aspect-square rounded-full border-4 border-white 
                    flex items-center justify-center shadow-md" style="background-color: #f3967f">
            <span class="text-white font-bold text-sm">${text}</span>
            <div class="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 w-0 h-0 
                        border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent 
                        border-t-[12px] border-t-white">
            </div>
        </div>
    `,
        className: "end-marker",
        iconSize: [55, 55],
        iconAnchor: [27, 60],
    });

const createStartIcon = (text: string) =>
    L.divIcon({
        html: `
            <div class="relative w-[55px] h-[55px] aspect-square rounded-full border-4 border-white 
                        flex items-center justify-center shadow-md" style="background-color: #5aaa64">
                <span class="text-white opacity-10 font-bold text-sm">${text}</span>
                <div class="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 w-0 h-0 
                            border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent 
                            border-t-[12px] border-t-white">
                </div>
            </div>
        `,
        className: "start-marker",
        iconSize: [55, 55],
        iconAnchor: [27, 60],
    });

export { chariotIcon, createStartIcon, createEndIcon };
