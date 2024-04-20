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
exports.numericOptionText = exports.optionIsCounterOption = exports.optionIsTimeOption = exports.counterOptionSchema = exports.timeOptionSchema = void 0;
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
// Both time and counter options are "numeric", in the sense that we measure them with greaterThan
// and lessThanOrEqualTo conditions
function numericOptionSchema(type) {
    return (0, base_1.optionValueBaseSchema)(type)
        .shape({
        greaterThan: yup.number().notRequired(),
        lessThanOrEqualTo: yup.number().notRequired(),
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
function numericOptionText(option) {
    const { greaterThan, lessThanOrEqualTo } = option;
    if ((0, lodash_1.isUndefined)(greaterThan) && (0, lodash_1.isUndefined)(lessThanOrEqualTo))
        return '';
    const formatter = optionIsTimeOption(option) ? time_1.formatSecondsInWords : String;
    const unit = (0, lodash_1.isUndefined)(greaterThan) ? 'Up to' : 'More than';
    const value = (0, lodash_1.compact)([greaterThan, lessThanOrEqualTo])[0];
    return [unit, formatter(value)].join(' ');
}
exports.numericOptionText = numericOptionText;
