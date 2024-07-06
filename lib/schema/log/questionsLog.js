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
exports.questionsLogSchema = exports.questionDataSchema = void 0;
const yup = __importStar(require("yup"));
const question_1 = require("../question");
const setbackThreshold_1 = require("../question/utils/setbackThreshold");
const array_1 = require("../utils/array");
const objectOf_1 = require("../utils/objectOf");
const timestamp_1 = require("../utils/timestamp");
const base_1 = require("./base");
const gpt_1 = require("./utils/gpt");
exports.questionDataSchema = yup.object(Object.assign({ idValue: yup.string(), numericValue: yup.number(), stringValue: yup.string().required(), label: yup.string(), color: yup.string(), unit: yup.string().required(), setAt: timestamp_1.timestampSchema }, setbackThreshold_1.setbackThresholdMixin));
exports.questionsLogSchema = (0, base_1.logBaseSchema)('questions').shape(Object.assign({ questionsById: (0, objectOf_1.objectOf)(question_1.questionSchema), questionData: (0, objectOf_1.objectOf)(exports.questionDataSchema), submittedAt: timestamp_1.optionalTimestampSchema, followedUpQuestionIds: array_1.optionalStringArray }, gpt_1.gptResponseMixin));
