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
const option_1 = require("../option");
const image_1 = require("../utils/image");
const objectOf_1 = require("../utils/objectOf");
const timestamp_1 = require("../utils/timestamp");
// Define a base schema for TacticValueBase with generic type K to accommodate the type field.
function tacticValueBaseSchema(type) {
    return yup.object({
        type: yup.mixed().oneOf([type]).defined(),
        profileId: yup.string().nullable(),
        sourceId: yup.string(),
        createdAt: timestamp_1.optionalTimestampSchema,
        updatedAt: timestamp_1.optionalTimestampSchema,
        title: yup.string().required('is required'),
        subtitle: yup.string().notRequired(),
        description: yup.string().nullable(),
        image: image_1.imageSchema.optional().nullable(),
        setbackThreshold: yup.number().nullable(),
        optionsById: (0, objectOf_1.optionalObjectOf)(option_1.optionSchema),
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
exports.tacticValueBaseSchema = tacticValueBaseSchema;
