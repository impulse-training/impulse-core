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
exports.userTacticSchema = void 0;
const yup = __importStar(require("yup"));
const tactic_1 = require("./tactic");
const firestore_1 = require("./utils/firestore");
const timestamp_1 = require("./utils/timestamp");
// User-specific fields that extend any tactic type
const userTacticExtensionSchema = {
    // References to behaviors this tactic is associated with
    allBehaviors: yup.boolean().required(),
    behaviorDocs: yup.array().of(firestore_1.documentReferenceSchema.required()).required(),
    // References to routines this tactic is associated with
    routineDocs: yup.array().of(firestore_1.documentReferenceSchema.required()).required(),
    // User-specific metadata
    completedAt: timestamp_1.optionalTimestampSchema,
    // If this was adopted from an AI suggestion
    sourceId: yup.string().optional(),
    // User customizations
    customizations: yup
        .object({
        backgroundColor: yup.string().optional(),
        reminderTime: timestamp_1.optionalTimestampSchema,
        notes: yup.string().optional(),
    })
        .optional(),
    // Usage statistics
    usageStats: yup
        .object({
        timesUsed: yup.number().default(0),
        lastUsed: timestamp_1.optionalTimestampSchema,
        effectiveness: yup.number().min(1).max(5).optional(),
    })
        .optional(),
};
// Create a new schema for each tactic type, extended with user-specific fields
const userTacticSchemas = Object.entries(tactic_1.tacticSchemas).reduce((acc, [type, schema]) => {
    acc[type] = schema.shape(userTacticExtensionSchema);
    return acc;
}, {});
// Create a lazy schema that selects the appropriate extended schema based on type
exports.userTacticSchema = yup.lazy(value => {
    if (typeof value.type === 'string' && value.type in userTacticSchemas) {
        return userTacticSchemas[value.type];
    }
    // Fallback schema that requires a valid type
    return yup.object({
        type: yup
            .mixed()
            .oneOf(Object.keys(userTacticSchemas))
            .required(),
    });
});
