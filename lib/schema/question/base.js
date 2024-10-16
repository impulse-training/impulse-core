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
const lodash_1 = require("lodash");
const yup = __importStar(require("yup"));
const option_1 = require("../option");
const followUp_1 = require("../option/followUp");
const array_1 = require("../utils/array");
const objectOf_1 = require("../utils/objectOf");
const timestamp_1 = require("../utils/timestamp");
exports.QUESTION_CATEGORIES = {
    questionOfTheDay: {
        label: 'Question of the day',
        order: -1,
        hint: 'Answer these questions at a scheduled time of day',
        isVisible: () => false,
    },
    debriefing: {
        label: 'Debriefing',
        order: 0,
        hint: "Answer these questions after an impulse moment, when it's time to reflect.",
        isVisible: () => true,
    },
    impulses: {
        label: 'Impulse moments',
        order: 1,
        hint: 'Answer these questions when you have an impulse moment, which is the craving or urge.',
        isVisible: () => true,
    },
    afterSuccess: {
        label: 'After a success',
        order: 2,
        hint: 'Ask questions after an impulse moment when you achieve your goal.',
        isVisible: (questions) => (0, lodash_1.some)(questions, question => question.data().setbackThreshold !== undefined),
    },
    afterSetback: {
        label: 'After a setback',
        order: 3,
        hint: "Ask questions after an impulse moment when you don't achieve your goal.",
        isVisible: (questions) => (0, lodash_1.some)(questions, question => question.data().setbackThreshold !== undefined),
    },
    dayReview: {
        label: 'Daily review',
        order: 4,
        hint: 'Answer these questions at a scheduled time of day, to reflect on the day gone by.',
        isVisible: () => true,
    },
};
const categoryKeys = Object.keys(exports.QUESTION_CATEGORIES);
const questionCategorySchema = yup
    .mixed()
    .oneOf(categoryKeys);
function questionBaseSchema(type) {
    return yup.object({
        isPublic: yup.boolean(),
        categories: yup.array().of(questionCategorySchema.defined()),
        prompt: yup.string().required(),
        type: yup.mixed().oneOf([type]).defined(),
        options: yup.array().of(option_1.optionSchema),
        ordinal: yup.number().required(),
        ordinals: (0, objectOf_1.optionalObjectOf)(yup.number().required()),
        templateFor: yup
            .mixed()
            .oneOf(['onboarding', 'afterSetback', 'afterSuccess']),
        writeAnswerToProfileMemoryKey: yup.string(),
        recommendedForIssueIds: array_1.optionalStringArray,
        followUps: yup.array().of(followUp_1.followUpSchema),
        createdAt: timestamp_1.optionalTimestampSchema,
        updatedAt: timestamp_1.optionalTimestampSchema,
    });
}
exports.questionBaseSchema = questionBaseSchema;
