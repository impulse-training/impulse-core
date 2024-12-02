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
exports.messageSchema = void 0;
const yup = __importStar(require("yup"));
const log_1 = require("./log");
const question_1 = require("./question");
const firestore_1 = require("./utils/firestore");
const objectOf_1 = require("./utils/objectOf");
const timestamp_1 = require("./utils/timestamp");
exports.messageSchema = yup.object({
    createdAt: timestamp_1.optionalTimestampSchema,
    updatedAt: timestamp_1.optionalTimestampSchema,
    date: timestamp_1.timestampSchema,
    dateString: yup.string().required(),
    content: yup.string().nullable().defined(),
    senderUid: yup.string(),
    isDisplayable: yup.boolean().required(),
    emotions: (0, objectOf_1.optionalObjectOf)(yup.object({
        label: yup.string().required(),
        iconName: yup.string().required(),
        intensity: yup.number().nullable().defined(),
    })),
    questions: (0, objectOf_1.optionalObjectOf)(yup.object({
        question: question_1.questionSchema,
        data: log_1.questionDataSchema,
    })),
    files: yup.array().of(firestore_1.documentReferenceSchema),
    filesDeleted: yup.boolean(),
    externalId: yup.string(),
    role: yup
        .mixed()
        .oneOf(['assistant', 'user', 'system', 'tool'])
        .required(),
});
