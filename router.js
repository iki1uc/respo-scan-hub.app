import { SCAN_SYSTEM } from "./modules/scan-system.js";

const Router = {
    route(target) {
        console.log("SCAN-HUB Router:", target);

        switch(target) {
            case 'scan':
                SCAN_SYSTEM.init();
                break;

            default:
                console.log("Unbekanntes Ziel:", target);
        }
    }
};

export default Router;

