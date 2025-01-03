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
exports.daysSummarySchema = void 0;
const yup = __importStar(require("yup"));
const log_1 = require("./log");
const objectOf_1 = require("./utils/objectOf");
// A day summary is an object of behavior and metric
// {
//   behaviors: {
//     smokingBehaviorId: { behavior, data: { numericValue: 2, formattedValue: "2 cigarettes" } }
//   },
//   metrics: {
//     label: "Really sad",
//     name: "Sad",
//     key: "happy-sad",
//     value: 4,
//   }
// }
const behaviorTotalDataByIdSchema = yup.object({
    behaviors: (0, objectOf_1.objectOf)(log_1.behaviorAndBehaviorDataSchema),
    metrics: (0, objectOf_1.objectOf)(log_1.metricAttributeAndDataSchema),
});
// A days summary document is an object of tactic day summaries, keyed by date. Think of it
// as:
// {
//   "2024-01-30": {
//     smokingBehaviorId: { behavior, data: { numericValue: 2, formattedValue: "2 cigarettes" } }
//   },
//   "2024-01-31": {
//     smokingBehaviorId: { behavior, data: { numericValue: 2, formattedValue: "3 cigarettes" } }
//   }
// }
exports.daysSummarySchema = (0, objectOf_1.objectOf)(behaviorTotalDataByIdSchema);
