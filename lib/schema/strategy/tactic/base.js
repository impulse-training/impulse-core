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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tacticValueBaseSchema = void 0;
const yup = __importStar(require("yup"));
const image_1 = require("../../utils/image");
const timestamp_1 = require("../../utils/timestamp");
const base_1 = __importDefault(require("../base"));
// Define a base schema for TacticValueBase with generic type K to accommodate the type field.
function tacticValueBaseSchema(type) {
    return (0, base_1.default)().shape({
        type: yup.mixed().oneOf([type]).defined(),
        profileId: yup.string().nullable(),
        createdAt: timestamp_1.optionalTimestampSchema,
        updatedAt: timestamp_1.optionalTimestampSchema,
        pastTenseTitle: yup.string(),
        commentCount: yup.number(),
        description: yup.string().nullable(),
        debriefAfterMinutes: yup.number().nullable(),
        image: image_1.imageSchema.optional().nullable(),
        backgroundColor: yup.string(),
        setbackThreshold: yup.number().nullable(),
        likesCount: yup.number().nullable(),
        timerSeconds: yup.number().notRequired(),
        isSuggested: yup.boolean(),
    });
}
exports.tacticValueBaseSchema = tacticValueBaseSchema;