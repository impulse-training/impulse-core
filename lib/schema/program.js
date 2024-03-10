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
exports.programSchema = void 0;
const yup = __importStar(require("yup"));
const gameplan_1 = require("./gameplan");
const tactic_1 = require("./tactic");
const array_1 = require("./utils/array");
const objectOf_1 = require("./utils/objectOf");
const timestamp_1 = require("./utils/timestamp");
exports.programSchema = yup.object().shape({
    forIssueIds: array_1.requiredStringArray,
    issueNames: (0, objectOf_1.optionalObjectOf)(yup.string()),
    issueNamesSummary: yup.string().nullable(),
    recommendationSummary: yup.string().nullable(),
    main: gameplan_1.strategySchema,
    success: gameplan_1.strategySchema.notRequired().default(undefined),
    setback: gameplan_1.strategySchema.notRequired().default(undefined),
    time: (0, objectOf_1.optionalObjectOf)(gameplan_1.timeRoutineSchema.required()),
    location: (0, objectOf_1.optionalObjectOf)(gameplan_1.locationRoutineSchema.required()),
    uid: yup.string().required(),
    tacticsById: (0, objectOf_1.objectOf)(tactic_1.tacticSchema),
    createdAt: timestamp_1.timestampSchema.required(),
    updatedAt: timestamp_1.timestampSchema.required(),
});
