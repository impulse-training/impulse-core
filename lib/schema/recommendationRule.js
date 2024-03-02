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
exports.recommendationRuleSchema = exports.locationRecommendationRuleSchema = exports.timeRecommendationRuleSchema = exports.impulseDebriefRecommendationRuleSchema = exports.impulseRecommendationRuleSchema = exports.recommendationRuleBaseSchema = void 0;
const yup = __importStar(require("yup"));
const recommendation_1 = require("./recommendation");
const array_1 = require("./utils/array");
const objectOf_1 = require("./utils/objectOf");
const timestamp_1 = require("./utils/timestamp");
exports.recommendationRuleBaseSchema = yup.object().shape({
    recommendation: recommendation_1.recommendationBaseSchema,
    forIssueIds: array_1.requiredStringArray,
    issueNames: (0, objectOf_1.optionalObjectOf)(yup.string()),
    issueNamesSummary: yup.string().nullable(),
    recommendationSummary: yup.string().nullable(),
    uid: yup.string().required(),
    ordinal: yup.number().required(),
    createdAt: timestamp_1.timestampSchema.required(),
    updatedAt: timestamp_1.timestampSchema.required(),
});
exports.impulseRecommendationRuleSchema = exports.recommendationRuleBaseSchema.shape({
    type: yup.mixed().oneOf(['impulse']).required(),
});
exports.impulseDebriefRecommendationRuleSchema = exports.recommendationRuleBaseSchema.shape({
    type: yup.mixed().oneOf(['impulseDebrief']).required(),
});
exports.timeRecommendationRuleSchema = exports.recommendationRuleBaseSchema.shape({
    type: yup.mixed().oneOf(['time']).required(),
    schedule: recommendation_1.timeScheduleSchema.required(),
});
exports.locationRecommendationRuleSchema = exports.recommendationRuleBaseSchema.shape({
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
exports.recommendationRuleSchema = yup.lazy(value => {
    if (!value || typeof value !== 'object' || !value.type) {
        return defaultValidation;
    }
    switch (value.type) {
        case 'impulse':
            return exports.impulseRecommendationRuleSchema;
        case 'impulseDebrief':
            return exports.impulseDebriefRecommendationRuleSchema;
        case 'time':
            return exports.timeRecommendationRuleSchema;
        case 'location':
            return exports.locationRecommendationRuleSchema;
        default:
            return defaultValidation;
    }
});
