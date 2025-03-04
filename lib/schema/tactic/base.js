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
exports.tacticBaseSchema = void 0;
const yup = __importStar(require("yup"));
const file_1 = require("../utils/file");
const timestamp_1 = require("../utils/timestamp");
// Define a base schema for TacticValueBase with generic type K to accommodate the type field.
function tacticBaseSchema(type) {
    return yup.object({
        uid: yup.string(),
        prompt: yup.string(),
        description: yup.string().nullable(),
        type: yup.mixed().oneOf([type]).defined(),
        createdAt: timestamp_1.optionalTimestampSchema,
        updatedAt: timestamp_1.optionalTimestampSchema,
        image: file_1.fileSchema.optional().default(undefined),
        backgroundColor: yup.string(),
        timerSeconds: yup.number().notRequired(),
    });
}
exports.tacticBaseSchema = tacticBaseSchema;
