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
exports.issueSchema = void 0;
const yup = __importStar(require("yup"));
const tactic_1 = require("./tactic");
const array_1 = require("./utils/array");
const timestamp_1 = require("./utils/timestamp");
exports.issueSchema = yup.object().shape({
    createdAt: timestamp_1.timestampSchema.required(),
    updatedAt: timestamp_1.timestampSchema.required(),
    parentId: yup.string().nullable(),
    name: yup.string().required(),
    synonyms: yup
        .array()
        .of(yup.string().required())
        .required()
        .test('includes-name', 'Synonyms must include name', function (synonyms) {
        return synonyms.includes(this.parent.name);
    }),
    debriefTactic: tactic_1.questionTacticSchema,
    setbackThreshold: yup.number(),
    path: yup.string().nullable(),
    parentIds: array_1.requiredStringArray,
    parentNames: array_1.requiredStringArray,
    strategiesCount: yup.number().nullable(),
    profileCount: yup.number().nullable(),
    isFeatured: yup.boolean().nullable(),
});
