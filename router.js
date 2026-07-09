import { SCAN_SYSTEM } from "./modules/scan-system.js";

export const Router = {
    route(target) {
        if (target === "scan") {
            SCAN_SYSTEM.init();
        }
    }
};
