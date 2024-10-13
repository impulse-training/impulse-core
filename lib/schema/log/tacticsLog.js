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
exports.tacticsLogSchema = void 0;
const yup = __importStar(require("yup"));
const tactic_1 = require("../tactic");
const array_1 = require("../utils/array");
const firestore_1 = require("../utils/firestore");
const objectOf_1 = require("../utils/objectOf");
const base_1 = require("./base");
exports.tacticsLogSchema = (0, base_1.logBaseSchema)('tactics').shape({
    title: yup.string(),
    // Optionally, a tactics log can link to a suggestion, which was it's source
    sourceSuggestion: firestore_1.documentReferenceSchema,
    // This flag can be set to true when the user is browsing and adding tactics
    isAddToGameplanMode: yup.boolean(),
    suggestedTacticDocPaths: array_1.optionalStringArray,
    tacticsById: (0, objectOf_1.objectOf)(tactic_1.tacticSchema),
    // These are the tactics that the user has completed
    completedTacticIds: array_1.requiredStringArray,
});
