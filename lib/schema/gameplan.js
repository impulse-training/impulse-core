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
exports.gameplanSchema = void 0;
const yup = __importStar(require("yup"));
const issue_1 = require("./issue");
const profileStrategy_1 = require("./profileStrategy");
const objectOf_1 = require("./utils/objectOf");
const timestamp_1 = require("./utils/timestamp");
// A gameplan is a set of strategies (strategies) for different issues. We copy data to the gameplan
// document before converting it to a graph format that is compatible with Bland pathways.
exports.gameplanSchema = yup.object().shape({
    createdAt: timestamp_1.optionalTimestampSchema,
    updatedAt: timestamp_1.optionalTimestampSchema,
    // For now, we don't type this object more specifically
    blandPathwayData: yup.object({
        nodes: yup.array().of(yup.object().required()),
        edges: yup.array().of(yup.object().required()),
    }),
    blandPathwayId: yup.string(),
    issuesById: (0, objectOf_1.optionalObjectOf)(issue_1.issueSchema),
    profileStrategiesById: (0, objectOf_1.optionalObjectOf)(profileStrategy_1.profileStrategySchema),
});
