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
exports.tacticValueBaseSchema = void 0;
const yup = __importStar(require("yup"));
const array_1 = require("../utils/array");
const file_1 = require("../utils/file");
const objectOf_1 = require("../utils/objectOf");
const timestamp_1 = require("../utils/timestamp");
// Define a base schema for TacticValueBase with generic type K to accommodate the type field.
function tacticValueBaseSchema(type) {
    return yup.object({
        uid: yup.string(),
        recommendedForIssueIds: array_1.optionalStringArray.max(10, "can't be more than 10"),
        sharedWithIssueIds: array_1.optionalStringArray,
        recommendedForIssueOrdinals: (0, objectOf_1.optionalObjectOf)(yup.number().required()),
        ordinal: yup.number().required(),
        prompt: yup.string(),
        isShared: yup.boolean(),
        description: yup.string().nullable(),
        type: yup.mixed().oneOf([type]).defined(),
        createdAt: timestamp_1.optionalTimestampSchema,
        updatedAt: timestamp_1.optionalTimestampSchema,
        pastTenseTitle: yup.string(),
        debriefAfterMinutes: yup.number().nullable(),
        image: file_1.fileSchema.optional().nullable(),
        backgroundColor: yup.string(),
        setbackThreshold: yup.number().nullable(),
        likesCount: yup.number().nullable(),
        timerSeconds: yup.number().notRequired(),
        isSuggested: yup.boolean(),
    });
}
exports.tacticValueBaseSchema = tacticValueBaseSchema;
