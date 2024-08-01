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
exports.logBaseSchema = void 0;
const yup = __importStar(require("yup"));
const strategy_1 = require("../strategy");
const timestamp_1 = require("../utils/timestamp");
const gpt_1 = require("./utils/gpt");
const logViewSchema = yup.object({
    openTime: timestamp_1.timestampSchema,
    closeTime: timestamp_1.timestampSchema,
});
function logBaseSchema(type) {
    return yup.object(Object.assign({ createdAt: timestamp_1.optionalTimestampSchema, updatedAt: timestamp_1.optionalTimestampSchema, text: yup.string(), type: yup.mixed().oneOf([type]).defined(), date: timestamp_1.timestampSchema, tacticId: yup.string().nullable(), tactic: yup.lazy((value, options) => {
            // Access the context to get the entire object being validated
            const { tacticId } = options.parent;
            // Check if tacticId is defined, then apply tacticSchema
            if (tacticId)
                return strategy_1.tacticSchema;
            // If tacticId is not defined, tactic is not required
            return yup.mixed().notRequired();
        }), 
        // For now, put this boolean flag here to indicate if the sender is GPT
        isGptSender: yup.boolean(), senderProfileId: yup.string().nullable(), views: yup.array().of(logViewSchema) }, gpt_1.gptResponseMixin));
}
exports.logBaseSchema = logBaseSchema;
