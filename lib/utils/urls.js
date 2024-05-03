"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDeepLinkUrl = void 0;
const lodash_1 = require("lodash");
function getDeepLinkUrl(appEnv, target, params // Allow any type of values within the params object
) {
    const scheme = appEnv === 'production' ? 'impulse://' : 'impulse-test://';
    function serializeParams(obj, prefix = '') {
        return (0, lodash_1.flatMap)(obj, (value, key) => {
            const subKey = prefix ? `${prefix}[${key}]` : key;
            if ((0, lodash_1.isObject)(value) && !(0, lodash_1.isArray)(value)) {
                return serializeParams(value, subKey);
            }
            return `${encodeURIComponent(subKey)}=${encodeURIComponent(String(value))}`;
        }).join('&');
    }
    const queryString = serializeParams(params);
    return `${scheme}${target}?${queryString}`;
}
exports.getDeepLinkUrl = getDeepLinkUrl;
