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
exports.videoTacticSchema = exports.timerTacticSchema = exports.taskTacticSchema = exports.tacticSchemas = exports.stepsTacticSchema = exports.questionTacticSchema = exports.phoneTacticSchema = exports.optionsTacticSchema = exports.measureTimeTacticSchema = exports.measureSlidersTacticSchema = exports.measureCounterTacticSchema = exports.folderTacticSchema = exports.breatheTacticSchema = exports.audioTacticSchema = void 0;
const yup = __importStar(require("yup"));
const recording_1 = require("./recording");
const image_1 = require("./utils/image");
const timestamp_1 = require("./utils/timestamp");
// Define a base schema for TacticValueBase with generic type K to accommodate the type field.
function tacticValueBaseSchema(type) {
    return yup.object({
        type: yup.mixed().oneOf([type]).defined(),
        uid: yup.string().nullable(),
        ordinal: yup.number().nullable(),
        isSuggested: yup.boolean().nullable(),
        createdAt: timestamp_1.timestampSchema.required(),
        updatedAt: timestamp_1.timestampSchema.required(),
        title: yup.string().required(),
        description: yup.string().nullable(),
        image: image_1.imageValueSchema.optional().nullable(),
        backgroundColor: yup.string().nullable(),
        isTemplate: yup.boolean().nullable(),
        language: yup.string().nullable(),
        href: yup.string().url().nullable(),
        categoryIds: yup.array().of(yup.string()).nullable(),
        isShared: yup.boolean().nullable(),
        isResponseRequired: yup.boolean().nullable(),
        isAvailableForRecommendation: yup.boolean().nullable(),
    });
}
const stepsTacticSchema = tacticValueBaseSchema('steps').shape({
    steps: yup.number().required(),
});
exports.stepsTacticSchema = stepsTacticSchema;
const audioTacticSchema = tacticValueBaseSchema('audio').shape({
    metadata: recording_1.recordingSchema.required(),
    recording: recording_1.recordingSchema.nullable(),
});
exports.audioTacticSchema = audioTacticSchema;
const videoTacticSchema = tacticValueBaseSchema('video').shape({
    video: yup
        .object({
        url: yup.string().url().nullable(),
        storagePath: yup.string().nullable(),
        title: yup.string().required(),
        description: yup.string().required(),
        thumbnailUrl: yup.string().url().required(),
        duration: yup.number().required(),
    })
        .required(),
});
exports.videoTacticSchema = videoTacticSchema;
const measureSlidersTacticSchema = tacticValueBaseSchema('measure-sliders').shape({
    rows: yup
        .array()
        .of(yup.object({
        key: yup.string().required(),
        label: yup.string().required(),
        value: yup.number().nullable(),
        lowEmoji: yup.string().required(),
        highEmoji: yup.string().required(),
    }))
        .required(),
});
exports.measureSlidersTacticSchema = measureSlidersTacticSchema;
const measureTimeTacticSchema = tacticValueBaseSchema('measure-time');
exports.measureTimeTacticSchema = measureTimeTacticSchema;
const measureCounterTacticSchema = tacticValueBaseSchema('measure-counter');
exports.measureCounterTacticSchema = measureCounterTacticSchema;
const folderTacticSchema = tacticValueBaseSchema('folder').shape({
    tacticIds: yup.array().of(yup.string()).required(),
    tacticsById: yup.object().nullable(),
});
exports.folderTacticSchema = folderTacticSchema;
const phoneTacticSchema = tacticValueBaseSchema('phone').shape({
    supportGroupId: yup.string().required(),
    trigger: yup.mixed().oneOf(['automatic', 'manual']).required(),
});
exports.phoneTacticSchema = phoneTacticSchema;
const timerTacticSchema = tacticValueBaseSchema('timer').shape({
    timerSeconds: yup.number().required(),
});
exports.timerTacticSchema = timerTacticSchema;
const breatheTacticSchema = tacticValueBaseSchema('breathe').shape({
    inFor: yup.number().positive().required(),
    holdFor: yup.number().positive().required(),
    outFor: yup.number().positive().required(),
    repeat: yup.number().positive().required(),
});
exports.breatheTacticSchema = breatheTacticSchema;
const optionsTacticSchema = tacticValueBaseSchema('options').shape({
    tacticIds: yup.array().of(yup.string()).required(),
    tacticsById: yup.object().required(),
});
exports.optionsTacticSchema = optionsTacticSchema;
const taskTacticSchema = tacticValueBaseSchema('task');
exports.taskTacticSchema = taskTacticSchema;
const questionTacticSchema = tacticValueBaseSchema('question');
exports.questionTacticSchema = questionTacticSchema;
// Utility to dynamically select the correct schema based on the tactic type
const tacticSchemas = {
    phone: phoneTacticSchema,
    audio: audioTacticSchema,
    video: videoTacticSchema,
    question: questionTacticSchema,
    'measure-sliders': measureSlidersTacticSchema,
    'measure-time': measureTimeTacticSchema,
    'measure-counter': measureCounterTacticSchema,
    timer: timerTacticSchema,
    folder: folderTacticSchema,
    options: optionsTacticSchema,
    breathe: breatheTacticSchema,
    steps: stepsTacticSchema,
    task: taskTacticSchema,
};
exports.tacticSchemas = tacticSchemas;
