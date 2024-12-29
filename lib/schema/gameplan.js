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
exports.gameplanSchema = void 0;
const yup = __importStar(require("yup"));
const tactic_1 = require("./tactic");
const firestore_1 = require("./utils/firestore");
const objectOf_1 = require("./utils/objectOf");
const timestamp_1 = require("./utils/timestamp");
const gameplanTypes = [
    'craving',
    'location',
    'time',
    'routine',
    'emotion', // When feeling specific ways
];
// Different gameplan configurations based on type
const cravingConfigSchema = yup.object({
    behaviorId: yup.string().required(), // The behavior this craving is for
    // intensity: yup.string().oneOf(['mild', 'moderate', 'severe']),
});
const locationConfigSchema = yup.object({
    name: yup.string().required(),
    type: yup.string().oneOf(['arrival', 'departure', 'both']).required(),
});
const timeConfigSchema = yup.object({
    schedule: yup
        .array()
        .of(yup.object({
        hour: yup.number().required(),
        minute: yup.number().required(),
        weekdays: yup.array().of(yup.number().min(0).max(6)).required().min(1),
    }))
        .required(),
});
const routineConfigSchema = yup.object({
    name: yup.string().required(),
    suggestedTime: yup.string().matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/),
});
const emotionConfigSchema = yup.object({
    emotions: yup.array().of(yup.string()).required().min(1),
});
exports.gameplanSchema = yup.object({
    name: yup.string().required(),
    type: yup.string().oneOf(gameplanTypes).required(),
    config: yup
        .mixed()
        .when('type', {
        is: 'craving',
        then: () => cravingConfigSchema,
    })
        .when('type', {
        is: 'location',
        then: () => locationConfigSchema,
    })
        .when('type', {
        is: 'time',
        then: () => timeConfigSchema,
    })
        .when('type', {
        is: 'routine',
        then: () => routineConfigSchema,
    })
        .when('type', {
        is: 'emotion',
        then: () => emotionConfigSchema,
    })
        .required(),
    tacticsById: (0, objectOf_1.objectOf)(yup.object({
        doc: firestore_1.documentReferenceSchema.required(),
        data: tactic_1.tacticSchema,
    })),
    createdAt: timestamp_1.optionalTimestampSchema,
    updatedAt: timestamp_1.optionalTimestampSchema,
});
