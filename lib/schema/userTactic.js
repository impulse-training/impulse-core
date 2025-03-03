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
exports.userTacticSchema = void 0;
const yup = __importStar(require("yup"));
const tactic_1 = require("./tactic");
const firestore_1 = require("./utils/firestore");
const timestamp_1 = require("./utils/timestamp");
// A user tactic is a tactic that a user has added to their gameplan (i.e., to be used in certain
// routines, or "impulse moments" for a particular unwanted behavior)
exports.userTacticSchema = yup.object({
    tactic: yup.object({
        tactic: tactic_1.tacticSchema,
        doc: firestore_1.documentReferenceSchema.optional(),
    }),
    allBehaviors: yup.boolean().required(),
    behaviorDocs: yup.array().of(firestore_1.documentReferenceSchema.required()).required(),
    routineDocs: yup.array().of(firestore_1.documentReferenceSchema.required()).required(),
    createdAt: timestamp_1.optionalTimestampSchema,
    updatedAt: timestamp_1.optionalTimestampSchema,
});
