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
exports.profileStrategySchema = void 0;
const yup = __importStar(require("yup"));
const reminder_1 = require("./reminder");
const strategy_1 = require("./strategy");
const array_1 = require("./utils/array");
const firestore_1 = require("./utils/firestore");
const objectOf_1 = require("./utils/objectOf");
const timestamp_1 = require("./utils/timestamp");
exports.profileStrategySchema = yup.object({
    strategyDoc: firestore_1.documentReferenceSchema,
    strategy: strategy_1.strategySchema.required(),
    ordinalsForIssues: (0, objectOf_1.optionalObjectOf)(yup.number().required()),
    ordinal: yup.number(),
    sortBy: yup.mixed().required(),
    forAllIssues: yup.boolean(),
    forIssueIds: array_1.optionalStringArray,
    createdAt: timestamp_1.optionalTimestampSchema,
    updatedAt: timestamp_1.optionalTimestampSchema,
    reminders: yup.array().of(reminder_1.reminderSchema),
});