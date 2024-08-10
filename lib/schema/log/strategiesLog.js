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
exports.strategiesLogSchema = void 0;
const yup = __importStar(require("yup"));
const strategy_1 = require("../strategy");
const array_1 = require("../utils/array");
const firestore_1 = require("../utils/firestore");
const objectOf_1 = require("../utils/objectOf");
const base_1 = require("./base");
const gpt_1 = require("./utils/gpt");
exports.strategiesLogSchema = (0, base_1.logBaseSchema)('strategies').shape(Object.assign({ title: yup.string(), 
    // Optionally, a strategies log can link to a suggestion, which was it's source
    sourceSuggestion: firestore_1.documentReferenceSchema, suggestedStrategyDocPaths: array_1.optionalStringArray, strategiesById: (0, objectOf_1.objectOf)(strategy_1.strategySchema), 
    // These are the tactics that the user has completed
    completedTacticIds: array_1.requiredStringArray, 
    // ... and these are the tactics that Zara has followed up on with the user
    followedUpTacticIds: array_1.requiredStringArray }, gpt_1.gptResponseMixin));
