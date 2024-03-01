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
exports.patternSchema = void 0;
const yup = __importStar(require("yup"));
const array_1 = require("./utils/array");
const timestamp_1 = require("./utils/timestamp");
exports.patternSchema = yup.object().shape({
    uid: yup.string().required(),
    updatedAt: timestamp_1.optionalTimestampSchema,
    createdAt: timestamp_1.optionalTimestampSchema,
    name: yup.string().required(),
    ordinal: yup.number().required(),
    supportGroupIds: array_1.optionalStringArray,
    notification: yup
        .object({
        title: yup.string().required(),
        body: yup.string().required(),
    })
        .notRequired(),
    setbackTacticId: yup.string().notRequired(),
    setbackThreshold: yup.number().required(),
    issueId: yup.string().notRequired(),
    parentIssueIds: array_1.optionalStringArray,
    sendWeeklyReports: yup.boolean().required(),
});
