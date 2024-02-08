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
exports.videoTacticSchema = exports.timerTacticSchema = exports.taskTacticSchema = exports.tacticSchemas = exports.stepsTacticSchema = exports.questionTacticSchema = exports.phoneTacticSchema = exports.optionsTacticSchema = exports.measureTimeTacticSchema = exports.measureSlidersTacticSchema = exports.measureSliderTacticSchema = exports.measureCounterTacticSchema = exports.folderTacticSchema = exports.emotionsTacticSchema = exports.breatheTacticSchema = exports.audioTacticSchema = exports.tacticColors = exports.tacticSchema = void 0;
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
        createdAt: timestamp_1.timestampSchema.required(),
        updatedAt: timestamp_1.timestampSchema.required(),
        title: yup.string().required(),
        description: yup.string().nullable(),
        image: image_1.imageSchema.optional().nullable(),
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
const emotionsTacticSchema = tacticValueBaseSchema('emotions');
exports.emotionsTacticSchema = emotionsTacticSchema;
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
const measureSliderTacticSchema = tacticValueBaseSchema('measure-slider').shape({
    key: yup.string().required(),
    label: yup.string().required(),
    value: yup.number().nullable(),
    lowEmoji: yup.string().required(),
    highEmoji: yup.string().required(),
});
exports.measureSliderTacticSchema = measureSliderTacticSchema;
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
exports.tacticSchema = yup.lazy(value => {
    switch (value.type) {
        case 'phone':
            return phoneTacticSchema;
        case 'audio':
            return audioTacticSchema;
        case 'video':
            return videoTacticSchema;
        case 'question':
            return questionTacticSchema;
        case 'measure-sliders':
            return measureSlidersTacticSchema;
        case 'measure-slider':
            return measureSliderTacticSchema;
        case 'measure-time':
            return measureTimeTacticSchema;
        case 'measure-counter':
            return measureCounterTacticSchema;
        case 'timer':
            return timerTacticSchema;
        case 'folder':
            return folderTacticSchema;
        case 'options':
            return optionsTacticSchema;
        case 'breathe':
            return breatheTacticSchema;
        case 'steps':
            return stepsTacticSchema;
        case 'emotions':
            return emotionsTacticSchema;
        case 'task':
            return taskTacticSchema;
        default:
            throw new yup.ValidationError(`Unknown type: ${value.type}`);
    }
});
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
    emotions: emotionsTacticSchema,
};
exports.tacticSchemas = tacticSchemas;
exports.tacticColors = [
    '#20303C',
    '#43515C',
    '#66737C',
    '#858F96',
    '#A3ABB0',
    '#4196E0',
    '#459FED',
    '#57a8ef',
    '#8fc5f4',
    '#32BABC',
    '#3CC7C5',
    '#64D4D2',
    '#8BDFDD',
    '#32B76C',
    '#65C888',
    '#84D3A0',
    '#A3DEB8',
    '#FAA030',
    '#FAAD4D',
    '#FBBD71',
    '#FCCE94',
    '#E66A4E',
    '#F27052',
    '#F37E63',
    '#F7A997',
    '#EE2C38',
    '#F2564D',
    '#F57871',
    '#F79A94',
    '#A0138E',
    '#B13DAC',
    '#C164BD',
    '#D08BCD',
];
