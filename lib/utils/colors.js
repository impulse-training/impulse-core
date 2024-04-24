"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContrastColor = void 0;
function getContrastColor(hexColor) {
    // Convert hex to RGB first
    const r = parseInt(hexColor.substr(1, 2), 16);
    const g = parseInt(hexColor.substr(3, 2), 16);
    const b = parseInt(hexColor.substr(5, 2), 16);
    // Then convert RGB to the luminance
    const luminance = 0.2126 * Math.pow((r / 255), 2.2) +
        0.7152 * Math.pow((g / 255), 2.2) +
        0.0722 * Math.pow((b / 255), 2.2);
    // Standard threshold for determining light or dark color
    return luminance > 0.179 ? 'black' : 'white';
}
exports.getContrastColor = getContrastColor;
