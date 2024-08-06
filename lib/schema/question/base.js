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
exports.questionBaseSchema = exports.QUESTION_CATEGORIES = void 0;
const yup = __importStar(require("yup"));
const option_1 = require("../option");
const followUp_1 = require("../option/followUp");
const objectOf_1 = require("../utils/objectOf");
const timestamp_1 = require("../utils/timestamp");
exports.QUESTION_CATEGORIES = {
    emotions: 'Emotions',
    impulses: 'Impulses',
    other: 'Other',
    dayReview: 'Daily review',
    afterSuccess: 'Successes',
    afterSetback: 'Setbacks',
};
const categoryKeys = Object.keys(exports.QUESTION_CATEGORIES);
const questionCategorySchema = yup
    .mixed()
    .oneOf(categoryKeys);
function questionBaseSchema(type) {
    return yup.object({
        categories: yup.array().of(questionCategorySchema.defined()),
        prompt: yup.string().required(),
        type: yup.mixed().oneOf([type]).defined(),
        options: yup.array().of(option_1.optionSchema),
        ordinals: (0, objectOf_1.optionalObjectOf)(yup.number().required()),
        templateFor: yup.mixed().oneOf(['onboarding']),
        writeAnswerToProfileMemoryKey: yup.string(),
        followUps: yup.array().of(followUp_1.followUpSchema),
        createdAt: timestamp_1.optionalTimestampSchema,
        updatedAt: timestamp_1.optionalTimestampSchema,
    });
}
exports.questionBaseSchema = questionBaseSchema;
