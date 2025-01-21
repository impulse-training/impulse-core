"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatBehaviorLimit = void 0;
const schema_1 = require("../schema");
function formatBehaviorLimit(behavior) {
    if (typeof behavior.dailyLimit !== 'number')
        return null;
    if (behavior.trackingType === 'time') {
        return (0, schema_1.formatSecondsInWords)(behavior.dailyLimit);
    }
    else {
        return behavior.dailyLimit.toString();
    }
}
exports.formatBehaviorLimit = formatBehaviorLimit;
