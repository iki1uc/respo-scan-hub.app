import { SCAN_DOM } from "./scan-dom.js";

export const SCAN_ROUTER = {
    route(type) {
        if (type === "dom") return SCAN_DOM.run();
    }
};
