"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDeepLinkUrl = void 0;
function getDeepLinkUrl(target, params) {
    const scheme = 'impulse://';
    const queryParams = new URLSearchParams(params).toString();
    return `${scheme}${target}?${queryParams}`;
}
exports.getDeepLinkUrl = getDeepLinkUrl;
