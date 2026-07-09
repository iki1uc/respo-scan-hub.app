export const SCAN_DOM = {
    run() {
        const elements = document.querySelectorAll('*');
        console.log("DOM-Scan:", elements.length);
        return elements.length;
    }
};
