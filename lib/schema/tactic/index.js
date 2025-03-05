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
exports.tacticSchema = exports.tacticSchemas = void 0;
const yup = __importStar(require("yup"));
const affirmation_1 = require("./affirmation");
const audio_1 = require("./audio");
const breathingExercise_1 = require("./breathingExercise");
const link_1 = require("./link");
const steps_1 = require("./steps");
const supportGroup_1 = require("./supportGroup");
const task_1 = require("./task");
const video_1 = require("./video");
__exportStar(require("./affirmation"), exports);
__exportStar(require("./audio"), exports);
__exportStar(require("./breathingExercise"), exports);
__exportStar(require("./link"), exports);
__exportStar(require("./steps"), exports);
__exportStar(require("./supportGroup"), exports);
__exportStar(require("./task"), exports);
__exportStar(require("./utils"), exports);
__exportStar(require("./video"), exports);
// Utility to dynamically select the correct schema based on the tactic type
exports.tacticSchemas = {
    audio: audio_1.audioTacticSchema,
    affirmation: affirmation_1.affirmationTacticSchema,
    breathingExercise: breathingExercise_1.breathingExerciseTacticSchema,
    link: link_1.linkTacticSchema,
    steps: steps_1.stepsTacticSchema,
    supportGroup: supportGroup_1.supportGroupTacticSchema,
    task: task_1.taskTacticSchema,
    video: video_1.videoTacticSchema,
};
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
