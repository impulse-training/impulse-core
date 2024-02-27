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
exports.gameplanSchema = exports.strategy = void 0;
const yup = __importStar(require("yup"));
const pattern_1 = require("./pattern");
const routine_1 = require("./routine");
const tactic_1 = require("./tactic");
const array_1 = require("./utils/array");
const objectOf_1 = require("./utils/objectOf");
const timestamp_1 = require("./utils/timestamp");
// Used to conditionally show tactics based on the value of a response. E.g. I watched more than 10
// hours of YouTube: activate rescue mode.
const conditional = yup.object({
    condition: yup
        .mixed()
        .oneOf(['eq', 'gt', 'lt', 'keyword'])
        .required(),
    value: yup.mixed().required(),
    ids: yup.array().of(yup.string().required()).required(),
});
// A gameplan is a set of tactics and when they should be used. Of these properties, only tacticIds
// is required.
exports.strategy = yup.object({
    tacticIds: array_1.requiredStringArray,
    suggestedTacticIds: array_1.requiredStringArray,
    conditionalTacticIds: (0, objectOf_1.optionalObjectOf)(yup.array().of(conditional)),
});
exports.gameplanSchema = yup.object().shape({
    uid: yup.string().required(),
    createdAt: timestamp_1.optionalTimestampSchema,
    updatedAt: timestamp_1.optionalTimestampSchema,
    // Strategies - these are the sequences of tactics to try, including conditional tactics
    impulse: (0, objectOf_1.objectOf)(exports.strategy),
    impulseDebrief: (0, objectOf_1.objectOf)(exports.strategy),
    routine: (0, objectOf_1.objectOf)(exports.strategy),
    // Data - we keep copies of relevant data on the gameplan document, for performance reasons
    tacticsById: (0, objectOf_1.objectOf)(tactic_1.tacticSchema),
    routinesById: (0, objectOf_1.objectOf)(routine_1.routineSchema),
    patternsById: (0, objectOf_1.objectOf)(pattern_1.patternSchema),
});
