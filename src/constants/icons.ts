import L from "leaflet";

const chariotIcon = L.divIcon({
    html: `<img src="/assets/svg/chariot.svg"/>`,
    className: "chariot-svg-icon",
    iconSize: [48, 48],
    iconAnchor: [24, 24],
});

const endIcon = L.divIcon({
    html: `
        <div class="relative w-[45px] h-[45px] rounded-full border-4 border-white 
                    flex items-center justify-center shadow-md" style="background-color: #f3967f">
            <span class="text-white font-bold text-sm">End</span>
            <div class="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-0 h-0 
                        border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent 
                        border-t-[10px] border-t-white">
            </div>
        </div>
    `,
    className: "end-marker",
    iconSize: [45, 45],
    iconAnchor: [22, 50],
});

const startIcon = L.divIcon({
    html: `
        <div class="relative w-[45px] h-[45px] rounded-full border-4 border-white 
                    flex items-center justify-center shadow-md" style="background-color: #5aaa64">
            <span class="text-white opacity-10 font-bold text-sm">Start</span>
            <div class="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-0 h-0 
                        border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent 
                        border-t-[10px] border-t-white">
            </div>
        </div>
    `,
    className: "start-marker",
    iconSize: [45, 45],
    iconAnchor: [22, 50],
});

export { chariotIcon, startIcon, endIcon };
