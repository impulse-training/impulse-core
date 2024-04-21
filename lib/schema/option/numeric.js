"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.numericOptionText = exports.optionIsNumericOption = exports.optionIsCounterOption = exports.optionIsTimeOption = exports.counterOptionSchema = exports.timeOptionSchema = void 0;
const lodash_1 = require("lodash");
const yup = __importStar(require("yup"));
const time_1 = require("../utils/time");
const base_1 = require("./base");
exports.timeOptionSchema = numericOptionSchema('question-time');
exports.counterOptionSchema = numericOptionSchema('question-counter');
function optionIsTimeOption(option) {
    return option.type === 'question-time';
}
exports.optionIsTimeOption = optionIsTimeOption;
function optionIsCounterOption(option) {
    return option.type === 'question-counter';
}
exports.optionIsCounterOption = optionIsCounterOption;
function optionIsNumericOption(option) {
    return optionIsTimeOption(option) || optionIsCounterOption(option);
}
exports.optionIsNumericOption = optionIsNumericOption;
// Both time and counter options are "numeric", in the sense that we measure them with greaterThan
// and lessThanOrEqualTo conditions
function numericOptionSchema(type) {
    return (0, base_1.optionValueBaseSchema)(type)
        .shape({
        setbackThreshold: yup.number(),
        greaterThan: yup.number(),
        lessThanOrEqualTo: yup.number(),
    })
        .test('validate-conditions', 'Either greaterThan or lessThanOrEqualTo must be provided, but not both', function (values) {
        const { greaterThan, lessThanOrEqualTo } = values;
        const hasGreaterThan = typeof greaterThan !== 'undefined';
        const hasLessThanOrEqualTo = typeof lessThanOrEqualTo !== 'undefined';
        if (!hasGreaterThan && !hasLessThanOrEqualTo)
            return false;
        if (hasGreaterThan && hasLessThanOrEqualTo)
            return false;
        return true;
    });
}
// Returns a string like "Up to 5 minutes (success)" or "More than 5 minutes (setback)"
function numericOptionText(option) {
    const { greaterThan, lessThanOrEqualTo } = option;
    if ((0, lodash_1.isUndefined)(greaterThan) && (0, lodash_1.isUndefined)(lessThanOrEqualTo))
        return '';
    const formatter = optionIsTimeOption(option) ? time_1.formatSecondsInWords : String;
    if (optionIsTimeOption(option) && lessThanOrEqualTo === 0)
        return 'No time';
    const unit = !(0, lodash_1.isUndefined)(lessThanOrEqualTo)
        ? lessThanOrEqualTo
            ? 'Up to'
            : ''
        : 'More than';
    const value = [greaterThan, lessThanOrEqualTo].filter(v => v !== undefined)[0];
    const suffix = isSetback(option)
        ? '(setback)'
        : isSuccess(option)
            ? '(success)'
            : null;
    return (0, lodash_1.compact)([unit, formatter(value), suffix]).join(' ');
}
exports.numericOptionText = numericOptionText;
function isSuccess(option) {
    const { lessThanOrEqualTo, setbackThreshold } = option;
    if ((0, lodash_1.isUndefined)(setbackThreshold) || (0, lodash_1.isUndefined)(lessThanOrEqualTo))
        return false;
    return lessThanOrEqualTo <= setbackThreshold;
}
function isSetback(option) {
    const { greaterThan, setbackThreshold } = option;
    if ((0, lodash_1.isUndefined)(setbackThreshold) || (0, lodash_1.isUndefined)(greaterThan))
        return false;
    return greaterThan > setbackThreshold;
}
