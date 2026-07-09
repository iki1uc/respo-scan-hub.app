import { SCAN_ROUTER } from "./scan-router.js";

export const SCAN_SYSTEM = {
    init() {
        console.log("SCAN SYSTEM gestartet");
        SCAN_ROUTER.route("dom");
    }
};
