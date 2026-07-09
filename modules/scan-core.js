import { SCAN_ROUTER } from "./scan-router.js";

export const SCAN_CORE = {
    start() {
        console.log("SCAN HUB aktiv");
        return SCAN_ROUTER.route("dom");
    }
};

