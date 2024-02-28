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
exports.recommendationSchema = void 0;
const yup = __importStar(require("yup"));
const routine_1 = require("./routine");
const tactic_1 = require("./tactic");
const array_1 = require("./utils/array");
const objectOf_1 = require("./utils/objectOf");
const timestamp_1 = require("./utils/timestamp");
exports.recommendationSchema = yup.object().shape({
    uid: yup.string().required(),
    ordinal: yup.number().required(),
    title: yup.string().required(),
    explanation: yup.string().required(),
    routineExplanation: yup.string().nullable(),
    recommenderUid: yup.string().required(),
    recommenderName: yup.string().required(),
    createdAt: timestamp_1.timestampSchema,
    updatedAt: timestamp_1.timestampSchema,
    appliedAt: timestamp_1.optionalTimestampSchema,
    dismissedAt: timestamp_1.optionalTimestampSchema,
    tacticIds: array_1.requiredStringArray,
    tacticsById: (0, objectOf_1.objectOf)(tactic_1.tacticSchema),
    property: yup
        .mixed()
        .oneOf(['impulse', 'impulseDebrief', 'routine'])
        .required(),
    ruleId: yup.string().nullable(),
    routine: yup
        .mixed()
        .oneOf([routine_1.timeRoutineSchema, routine_1.locationRoutineSchema, routine_1.dayDebriefRoutineSchema])
        .notRequired(),
    patternIds: yup.array().of(yup.string()).notRequired(),
    defaultSelected: yup.mixed().oneOf(['all', 'first']).nullable(),
});
