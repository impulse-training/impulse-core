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
const array_1 = require("./utils/array");
const firestore_1 = require("./utils/firestore");
const objectOf_1 = require("./utils/objectOf");
const timestamp_1 = require("./utils/timestamp");
exports.issueSchema = yup.object().shape({
    createdAt: timestamp_1.optionalTimestampSchema,
    updatedAt: timestamp_1.optionalTimestampSchema,
    name: yup.string().required(),
    parentId: yup.string().nullable(),
    parentName: yup.string().nullable(),
    hasDebriefQuestion: yup.boolean(),
    ordinal: yup.number(),
    synonyms: yup.array().of(yup.string().required()),
    path: yup.string().nullable(),
    parentIds: array_1.optionalStringArray,
    parentNames: array_1.optionalStringArray,
    profileCount: yup.number().nullable(),
    isFeatured: yup.boolean().nullable(),
    // For top-level issues, we store references to recommended support groups
    recommendedFolders: yup.array().of(firestore_1.documentReferenceSchema.required()),
    // For profile issues, we store references to the tactics that are the user's "gameplan" for the
    // issue
    // For profile issues, we store a map of ordinals
    folderOrdinals: (0, objectOf_1.optionalObjectOf)(yup.number().required()),
    gameplanTactics: yup.array().of(firestore_1.documentReferenceSchema.required()),
});
