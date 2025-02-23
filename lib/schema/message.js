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
const behavior_1 = require("./behavior");
const log_1 = require("./log");
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
    metrics: (0, objectOf_1.optionalObjectOf)(yup.object({
        label: yup.string().required(),
        iconName: yup.string().required(),
        value: yup.number().nullable().defined(),
    })),
    behaviors: (0, objectOf_1.optionalObjectOf)(yup.object({
        behavior: behavior_1.behaviorSchema,
        data: log_1.behaviorDataSchema,
    })),
    files: yup.array().of(firestore_1.documentReferenceSchema),
    filesDeleted: yup.boolean(),
    externalId: yup.string(),
    role: yup
        .mixed()
        .oneOf(['assistant', 'user', 'system', 'tool'])
        .required(),
});
