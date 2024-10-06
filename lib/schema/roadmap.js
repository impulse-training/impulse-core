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
exports.roadmapSchema = void 0;
const yup = __importStar(require("yup"));
const array_1 = require("./utils/array");
const objectOf_1 = require("./utils/objectOf");
const timestamp_1 = require("./utils/timestamp");
// A roadmap is a long-term tactic for a user to achieve their behavior change goals. We may end
// up renaming it to "tactic", but a tactic currently means a "tactic or a strategy of tactics".
//
// A roadmap consists of stages, with "graduation criteria". When a user passes the graduation
// criteria for a stage, they move on to the next stage. The graduation criteria currently only
// includes a required win rate, but we may add more criteria in the future (including "passing" a
// conversation, which is a thread, as in, having a moment of enlightenment).
// Here we define the over-arching tactic for a roadmap stage. For example, "Distraction - we
// want to use distraction-oriented techniques to redirect impulses and improve win-rates"
const roadmapStage = yup.object({
    name: yup.string().required(),
    // There's a suggestions collection here
    graduationCriteria: yup.object({
        // This rate../
        requiredWinRate: yup.number().required(),
        // ... must be sustained over this number of days
        requiredWinRateDays: yup.number().required(),
    }),
});
exports.roadmapSchema = yup.object({
    name: yup.string().required(),
    createdAt: timestamp_1.optionalTimestampSchema,
    updatedAt: timestamp_1.optionalTimestampSchema,
    stages: yup.array().of(roadmapStage).required(),
    recommendedForIssueIds: array_1.optionalStringArray.max(10, "can't be more than 10"),
    recommendedForIssueOrdinals: (0, objectOf_1.optionalObjectOf)(yup.number().required()),
});
