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
exports.strategySchema = void 0;
const yup = __importStar(require("yup"));
const array_1 = require("../utils/array");
// Used to conditionally show tactics based on the value of a response. E.g. I watched more than 10
// hours of YouTube: activate rescue mode.
const conditional = yup.object({
    condition: yup
        .mixed()
        .oneOf(['eq', 'gt', 'lt', 'keyword'])
        .required(),
    value: yup.mixed().required(),
    ids: array_1.requiredStringArray,
});
// A gameplan is a set of tactics and when they should be used. Of these properties, only tacticIds
// is required.
exports.strategySchema = yup.object({
    tacticIds: array_1.requiredStringArray,
    suggestedTacticIds: array_1.optionalStringArray,
    conditionalTacticIds: yup.array().of(conditional),
});
