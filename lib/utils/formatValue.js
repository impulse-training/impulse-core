"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatValue = void 0;
const lodash_1 = require("lodash");
const schema_1 = require("../schema");
function formatValue(value, unit, customUnit) {
    if (unit === 'time')
        return (0, schema_1.formatSecondsInWords)(value || 0);
    return (0, lodash_1.compact)([value === null || value === void 0 ? void 0 : value.toString(), customUnit]).join(' ');
}
exports.formatValue = formatValue;
