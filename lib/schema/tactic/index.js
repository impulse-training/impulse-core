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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tacticsByIdSchema = exports.tacticSchema = exports.tacticSchemas = void 0;
const yup = __importStar(require("yup"));
const objectOf_1 = require("../utils/objectOf");
const audio_1 = require("./audio");
const breathe_1 = require("./breathe");
const dayReview_1 = require("./dayReview");
const emotions_1 = require("./emotions");
const link_1 = require("./link");
const phone_1 = require("./phone");
const question_1 = require("./question");
const steps_1 = require("./steps");
const task_1 = require("./task");
const urgeSurfing_1 = require("./urgeSurfing");
const video_1 = require("./video");
__exportStar(require("./audio"), exports);
__exportStar(require("./breathe"), exports);
__exportStar(require("./emotions"), exports);
__exportStar(require("./link"), exports);
__exportStar(require("./phone"), exports);
__exportStar(require("./question"), exports);
__exportStar(require("./steps"), exports);
__exportStar(require("./task"), exports);
__exportStar(require("./urgeSurfing"), exports);
__exportStar(require("./video"), exports);
__exportStar(require("./utils"), exports);
// Utility to dynamically select the correct schema based on the tactic type
exports.tacticSchemas = Object.assign(Object.assign({ phone: phone_1.phoneTacticSchema, audio: audio_1.audioTacticSchema, video: video_1.videoTacticSchema, link: link_1.linkTacticSchema }, question_1.questionTacticSchemas), { breathe: breathe_1.breatheTacticSchema, steps: steps_1.stepsTacticSchema, task: task_1.taskTacticSchema, emotions: emotions_1.emotionsTacticSchema, 'day-review': dayReview_1.dayReviewTacticSchema, 'urge-surfing': urgeSurfing_1.urgeSurfingTacticSchema });
// We do highly value static typing, but the problem is that yup's generated types are bloated and
// cause problems. Instead of exporting generated types for top-level types like tacticSchemas, we
// use any to bypass complex type generation, and use type assertions to ensure that the types are
// used correctly.
// The tacticSchema is what's used to validate tactics in our database. We set an explicit return
// type to ensure that the conditional validation of only type doesn't infer that a tactic may only
// be an object with only the "type" field specified. Instead, we say that it always returns a
// validator for the known tactic types.
exports.tacticSchema = yup.lazy(value => {
    if (typeof value.type === 'string' && value.type in exports.tacticSchemas) {
        return exports.tacticSchemas[value.type];
    }
    return yup.object({
        type: yup
            .mixed()
            .oneOf(Object.keys(exports.tacticSchemas))
            .required(),
    });
});
exports.tacticsByIdSchema = (0, objectOf_1.objectOf)(yup.object({
    path: yup.string().required(),
    tactic: exports.tacticSchema, // This is overwritten by casting with the WithTacticsById type
}));
