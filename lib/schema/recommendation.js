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
exports.recommendationSchema = exports.timeScheduleSchema = exports.recommendationBaseSchema = void 0;
const yup = __importStar(require("yup"));
const tactic_1 = require("./tactic");
const array_1 = require("./utils/array");
const objectOf_1 = require("./utils/objectOf");
const timestamp_1 = require("./utils/timestamp");
exports.recommendationBaseSchema = yup.object().shape({
    title: yup.string().required(),
    explanation: yup.string().nullable(),
    recommenderUid: yup.string().required(),
    recommenderName: yup.string().required(),
    tacticIds: array_1.requiredStringArray,
    tacticsById: (0, objectOf_1.objectOf)(tactic_1.tacticSchema),
});
// Here we extend this base schema with properties that are user-specific, or include a reference to
// the recommendation rule
const extendedRecommendationSchema = exports.recommendationBaseSchema.shape({
    ordinal: yup.number().required(),
    uid: yup.string().required(),
    createdAt: timestamp_1.timestampSchema,
    updatedAt: timestamp_1.timestampSchema,
    appliedAt: timestamp_1.optionalTimestampSchema,
    dismissedAt: timestamp_1.optionalTimestampSchema,
    ruleId: yup.string().nullable(),
});
exports.timeScheduleSchema = yup.object({
    hour: yup.number().required(),
    minute: yup.number().required(),
    weekdays: array_1.requiredStringArray,
});
const impulseRecommendationSchema = extendedRecommendationSchema.shape({
    type: yup.mixed().oneOf(['impulse']).required(),
    patternIds: array_1.requiredStringArray,
});
const impulseDebriefRecommendationSchema = extendedRecommendationSchema.shape({
    type: yup.mixed().oneOf(['impulseDebrief']).required(),
    patternIds: array_1.requiredStringArray,
});
const timeRecommendationSchema = extendedRecommendationSchema.shape({
    type: yup.mixed().oneOf(['time']).required(),
    time: exports.timeScheduleSchema.required(),
});
const locationRecommendationSchema = extendedRecommendationSchema.shape({
    type: yup.mixed().oneOf(['location']).required(),
    locationKey: yup.string().required(),
});
const defaultValidation = yup
    .object({
    type: yup
        .mixed()
        .oneOf(['impulse', 'impulseDebrief', 'time', 'location'])
        .required(),
})
    .required();
exports.recommendationSchema = yup.lazy(value => {
    if (!value || typeof value !== 'object' || !value.type) {
        return defaultValidation;
    }
    switch (value.type) {
        case 'impulse':
            return impulseRecommendationSchema;
        case 'impulseDebrief':
            return impulseDebriefRecommendationSchema;
        case 'time':
            return timeRecommendationSchema;
        case 'location':
            return locationRecommendationSchema;
        default:
            return defaultValidation;
    }
});
