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
exports.threadSchema = exports.agentType = exports.outcome = void 0;
const yup = __importStar(require("yup"));
const behavior_1 = require("./behavior");
const day_1 = require("./day");
const tactic_1 = require("./tactic");
const objectOf_1 = require("./utils/objectOf");
const timestamp_1 = require("./utils/timestamp");
exports.outcome = yup
    .mixed()
    .oneOf(['success', 'setback']);
exports.agentType = yup
    .mixed()
    .oneOf(['impulse', 'general', 'onboarding']);
exports.threadSchema = yup.object({
    dateString: yup.string().required(),
    date: timestamp_1.timestampSchema,
    title: yup.string(),
    summary: yup.string(),
    logsById: day_1.logsById,
    behaviorsById: (0, objectOf_1.optionalObjectOf)(behavior_1.behaviorSchema),
    suggestedTactics: yup.array().of(tactic_1.tacticSchema),
    debriefedAt: timestamp_1.optionalTimestampSchema,
    debriefAfter: timestamp_1.optionalTimestampSchema,
    debriefRoutineSentAt: timestamp_1.optionalTimestampSchema,
    agentType: exports.agentType.nonNullable().required(),
    outcome: exports.outcome,
    createdAt: timestamp_1.optionalTimestampSchema,
    updatedAt: timestamp_1.optionalTimestampSchema,
});
