"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optionIsStringOption = exports.stringOptionSchema = void 0;
const base_1 = require("./base");
exports.stringOptionSchema = (0, base_1.optionValueBaseSchema)('string');
function optionIsStringOption(option) {
    return option.type === 'string';
}
exports.optionIsStringOption = optionIsStringOption;
