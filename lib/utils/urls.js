"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDeepLinkUrl = void 0;
function getDeepLinkUrl(appEnv, target, params) {
    const scheme = appEnv === 'production' ? 'impulse://' : 'impulse-test://';
    const queryParams = new URLSearchParams(params).toString();
    return `${scheme}${target}?${queryParams}`;
}
exports.getDeepLinkUrl = getDeepLinkUrl;
