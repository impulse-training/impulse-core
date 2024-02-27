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
exports.isQuestionTactic = exports.isTaskTactic = exports.isBreatheTactic = exports.isPhoneTacticValue = exports.isMeasureCounterTactic = exports.isFolderTactic = exports.isMeasureTimeTactic = exports.isMeasureSliderTactic = exports.isVideoTactic = exports.isAudioTactic = exports.isEmotionsTactic = exports.isStepsTactic = exports.tacticColors = exports.tacticSchema = exports.tacticSchemas = exports.questionTacticSchema = exports.taskTacticSchema = exports.urgeSurfingTacticSchema = exports.breatheTacticSchema = exports.phoneTacticSchema = exports.measureCounterTacticSchema = exports.measureTimeTacticSchema = exports.measureSliderTacticSchema = exports.videoTacticSchema = exports.audioTacticSchema = exports.emotionsTacticSchema = exports.stepsTacticSchema = exports.folderTacticSchema = void 0;
const lodash_1 = require("lodash");
const yup = __importStar(require("yup"));
const recording_1 = require("./recording");
const image_1 = require("./utils/image");
const timestamp_1 = require("./utils/timestamp");
// Define a base schema for TacticValueBase with generic type K to accommodate the type field.
function tacticValueBaseSchema(type) {
    return yup.object({
        type: yup.mixed().oneOf([type]).defined(),
        uid: yup.string().nullable(),
        sourceId: yup.string(),
        ordinal: yup.number().nullable(),
        createdAt: timestamp_1.optionalTimestampSchema,
        updatedAt: timestamp_1.optionalTimestampSchema,
        title: yup.string().required(),
        subtitle: yup.string().notRequired(),
        description: yup.string().nullable(),
        image: image_1.imageSchema.optional().nullable(),
        backgroundColor: yup.string().required(),
        isTemplate: yup.boolean().nullable(),
        language: yup.string().nullable(),
        href: yup.string().url().nullable(),
        categoryIds: yup.array().of(yup.string()).nullable(),
        isShared: yup.boolean().nullable(),
        isResponseRequired: yup.boolean().nullable(),
        timerSeconds: yup.number().notRequired(),
        isAvailableForRecommendation: yup.boolean().nullable(),
        numberOfLikes: yup.number().nullable(),
        isSuggested: yup.boolean(),
    });
}
exports.folderTacticSchema = tacticValueBaseSchema('folder').shape({
    nextId: yup.string(),
    autogenerate: yup.boolean(),
    tacticIds: yup.array().of(yup.string().required()).required(),
    currentTacticIndex: yup.number().required(),
    // For now, we don't specify the tactic schema here, as it would lead to recursion
    tacticsById: yup.object().required(),
});
exports.stepsTacticSchema = tacticValueBaseSchema('steps').shape({
    steps: yup.number().required(),
});
exports.emotionsTacticSchema = tacticValueBaseSchema('emotions');
exports.audioTacticSchema = tacticValueBaseSchema('audio').shape({
    metadata: recording_1.recordingSchema.required(),
    recording: recording_1.recordingSchema.nullable(),
});
exports.videoTacticSchema = tacticValueBaseSchema('video').shape({
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
exports.measureSliderTacticSchema = tacticValueBaseSchema('measure-slider').shape({
    lowEmoji: yup.string().notRequired(),
    highEmoji: yup.string().notRequired(),
});
exports.measureTimeTacticSchema = tacticValueBaseSchema('measure-time');
exports.measureCounterTacticSchema = tacticValueBaseSchema('measure-counter');
exports.phoneTacticSchema = tacticValueBaseSchema('phone').shape({
    supportGroupId: yup.string().required(),
    trigger: yup.mixed().oneOf(['automatic', 'manual']).required(),
});
exports.breatheTacticSchema = tacticValueBaseSchema('breathe').shape({
    inFor: yup.number().positive().required(),
    holdFor: yup.number().positive().required(),
    outFor: yup.number().positive().required(),
    repeat: yup.number().positive().required(),
});
exports.urgeSurfingTacticSchema = tacticValueBaseSchema('urge-surfing').shape({});
exports.taskTacticSchema = tacticValueBaseSchema('task');
exports.questionTacticSchema = tacticValueBaseSchema('question');
// Utility to dynamically select the correct schema based on the tactic type
exports.tacticSchemas = {
    phone: exports.phoneTacticSchema,
    audio: exports.audioTacticSchema,
    video: exports.videoTacticSchema,
    question: exports.questionTacticSchema,
    folder: exports.folderTacticSchema,
    'measure-time': exports.measureTimeTacticSchema,
    'measure-slider': exports.measureSliderTacticSchema,
    'measure-counter': exports.measureCounterTacticSchema,
    breathe: exports.breatheTacticSchema,
    steps: exports.stepsTacticSchema,
    task: exports.taskTacticSchema,
    emotions: exports.emotionsTacticSchema,
};
exports.tacticSchema = yup.lazy(value => {
    const schema = exports.tacticSchemas[value.type];
    if (schema)
        return schema;
    return yup.object({
        type: yup.mixed().oneOf((0, lodash_1.keys)(exports.tacticSchemas)).required(),
    });
});
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
// Export type guard functions for each tactic type
const isStepsTactic = ({ type }) => type === 'steps';
exports.isStepsTactic = isStepsTactic;
const isEmotionsTactic = ({ type }) => type === 'emotions';
exports.isEmotionsTactic = isEmotionsTactic;
const isAudioTactic = ({ type }) => type === 'audio';
exports.isAudioTactic = isAudioTactic;
const isVideoTactic = ({ type }) => type === 'video';
exports.isVideoTactic = isVideoTactic;
const isMeasureSliderTactic = ({ type }) => type === 'measure-slider';
exports.isMeasureSliderTactic = isMeasureSliderTactic;
const isMeasureTimeTactic = ({ type }) => type === 'measure-time';
exports.isMeasureTimeTactic = isMeasureTimeTactic;
const isFolderTactic = ({ type }) => type === 'folder';
exports.isFolderTactic = isFolderTactic;
const isMeasureCounterTactic = ({ type }) => type === 'measure-counter';
exports.isMeasureCounterTactic = isMeasureCounterTactic;
const isPhoneTacticValue = ({ type }) => type === 'phone';
exports.isPhoneTacticValue = isPhoneTacticValue;
const isBreatheTactic = ({ type }) => type === 'breathe';
exports.isBreatheTactic = isBreatheTactic;
const isTaskTactic = ({ type }) => type === 'task';
exports.isTaskTactic = isTaskTactic;
const isQuestionTactic = ({ type }) => type === 'question';
exports.isQuestionTactic = isQuestionTactic;
