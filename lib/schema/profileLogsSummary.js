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
exports.profileLogsSummarySchema = void 0;
const yup = __importStar(require("yup"));
const objectOf_1 = require("./utils/objectOf");
// A summary of total tactic data, similar to our tacticData schema
// but with totalDataValue and formattedTotalDataValue instead of dataValue and formattedDataValue
const tacticTotalDataSchema = yup.object({
    dataUnit: yup.mixed().oneOf(['time', 'custom']).required(),
    dataCustomUnit: yup.string(),
    totalDataValue: yup.number().required(),
    formattedTotalDataValue: yup.string().required(),
    optionId: yup.string(),
    optionColor: yup.string(),
    optionLabel: yup.string(),
    optionTextColor: yup.string(),
});
// A tactic day summary is an object of tactic data, keyed by tactic id. Think of it as:
// {
//   howManyCigarettes: { data: 2, formattedValue: "2 cigarettes" }
// }
const tacticDayTotalDataSchema = (0, objectOf_1.objectOf)(tacticTotalDataSchema);
// A profile logs summary document is an object of tactic day summaries, keyed by date. Think of it
// as:
// {
//   "2024-01-30": {
//     howManyCigarettes: { data: 2, formattedValue: "2 cigarettes" }
//   },
//   "2024-01-31": {
//     howManyCigarettes: { data: 3, formattedValue: "3 cigarettes" }
//   }
// }
exports.profileLogsSummarySchema = (0, objectOf_1.objectOf)(tacticDayTotalDataSchema);
