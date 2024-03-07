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
exports.locationRoutineSchema = exports.timeRoutineSchema = void 0;
const yup = __importStar(require("yup"));
const strategy_1 = require("./strategy");
exports.timeRoutineSchema = strategy_1.strategySchema.shape({
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
exports.locationRoutineSchema = strategy_1.strategySchema.shape({
    locationId: yup.string().required(),
    mode: yup.mixed().oneOf(['enter', 'exit']).required(),
    title: yup.string().required(),
});
