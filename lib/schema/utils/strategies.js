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
exports.locationStrategySchema = exports.timeStrategySchema = exports.strategySchema = void 0;
const yup = __importStar(require("yup"));
const array_1 = require("./array");
// A strategy is a set of tactics. Suggestions are optional. We export a base strategy schema, which
// consists only of tactics, but also time and location strategies, which include information about
// when they should be used.
exports.strategySchema = yup.object({
    tacticIds: array_1.requiredStringArray,
    suggestedTacticIds: array_1.optionalStringArray,
});
exports.timeStrategySchema = exports.strategySchema.shape({
    weekdays: yup
        .array()
        .of(yup
        .number()
        .integer()
        .min(1, 'Weekday must be a number between 1 and 7')
        .max(7, 'Weekday must be a number between 1 and 7')
        .required('Weekday is required'))
        .required()
        .min(1, 'Please select at least one day'),
    hour: yup.number().required(),
    minute: yup.number().required(),
    title: yup.string().required(),
});
exports.locationStrategySchema = exports.strategySchema.shape({
    locationId: yup.string().required(),
    mode: yup.mixed().oneOf(['enter', 'exit']).required(),
    title: yup.string().required(),
});
