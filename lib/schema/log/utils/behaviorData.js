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
exports.behaviorDataSchema = void 0;
const yup = __importStar(require("yup"));
const setbackThreshold_1 = require("../../behavior/utils/setbackThreshold");
const timestamp_1 = require("../../utils/timestamp");
// const logViewSchema = yup.object({
//   openTime: timestampSchema,
//   closeTime: timestampSchema,
// });
exports.behaviorDataSchema = yup.object(Object.assign({ idValue: yup.string(), numericValue: yup.number(), stringValue: yup.string().required(), label: yup.string(), color: yup.string(), unit: yup.string().required(), setAt: timestamp_1.timestampSchema }, setbackThreshold_1.setbackThresholdMixin));