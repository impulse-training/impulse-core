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
exports.behaviorAndBehaviorDataSchema = exports.behaviorDataSchema = void 0;
const yup = __importStar(require("yup"));
const behavior_1 = require("../../behavior");
exports.behaviorDataSchema = yup
    .object({
    // Data can either be stored as a counter value...
    counterValue: yup.number(),
    // ... or a time value
    timeSeconds: yup.number(),
    // In either case, this is a string-formatted representation of the value
    formattedValue: yup.string().required(),
})
    .test('counter-or-time-required', 'Either counterValue or timeSeconds must be provided.', value => value.counterValue != null || value.timeSeconds != null);
exports.behaviorAndBehaviorDataSchema = yup.object({
    behavior: behavior_1.behaviorSchema,
    data: exports.behaviorDataSchema,
    color: yup.string(),
});
