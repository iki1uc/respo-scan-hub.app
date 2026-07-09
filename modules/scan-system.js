import { SCAN_CORE } from "./scan-core.js";

export const SCAN_SYSTEM = {
    init() {
        console.log("SCAN SYSTEM initialisiert");
        SCAN_CORE.start();
    }
};

