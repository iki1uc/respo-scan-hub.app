export const SCAN_POSITION = {
    run() {
        const pos = { x: window.scrollX, y: window.scrollY };
        console.log("Position-Scan:", pos);
        return pos;
    }
};

