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
exports.threadSchema = exports.agentType = exports.outcome = exports.AgentType = void 0;
const yup = __importStar(require("yup"));
const day_1 = require("./day");
const timestamp_1 = require("./utils/timestamp");
var AgentType;
(function (AgentType) {
    AgentType["GENERAL"] = "general";
    AgentType["ONBOARDING"] = "onboarding";
    AgentType["DEBRIEFING"] = "debriefing";
    AgentType["IMPULSE"] = "impulse";
})(AgentType = exports.AgentType || (exports.AgentType = {}));
exports.outcome = yup
    .mixed()
    .oneOf(['success', 'setback']);
exports.agentType = yup.mixed().oneOf(Object.values(AgentType));
exports.threadSchema = yup.object({
    isDisplayable: yup.boolean().required(),
    dateString: yup.string().required(),
    date: timestamp_1.timestampSchema,
    // This is shown inside the thread component - it's optional
    title: yup.string(),
    // This is shown when navigating to a thread - it must always be set
    navigationTitle: yup.string().required(),
    summary: yup.string(),
    logsById: day_1.logsById,
    debriefedAt: timestamp_1.optionalTimestampSchema,
    debriefAfter: timestamp_1.optionalTimestampSchema,
    debriefRoutineSentAt: timestamp_1.optionalTimestampSchema,
    agentType: exports.agentType.required(),
    hasImpulse: yup.boolean(),
    outcome: exports.outcome,
    // We maintain the count of suggested tactics here, and also write to a boolean here. We do both
    // because a calling function that's adding a tactic may also immediately write hasTactics=true,
    // but we still maintain a server-side count of tactics (which may have a lag due to cold starts)
    tacticsCount: yup.number(),
    hasTactics: yup.boolean(),
    // Instead of a boolean, this is a timestamp of when a message was sent to ZARA. This allows us to
    // have a simple timeout on showing a processing spinner without a scheduled callback.
    zaraResponseStartedProcessingAt: timestamp_1.optionalTimestampSchema,
    createdAt: timestamp_1.optionalTimestampSchema,
    updatedAt: timestamp_1.optionalTimestampSchema,
});
