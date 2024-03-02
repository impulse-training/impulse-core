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
exports.LONG_DAYS = exports.SHORT_DAYS = exports.gameplanSchema = exports.locationRoutine = exports.timeRoutine = exports.strategy = void 0;
const yup = __importStar(require("yup"));
const pattern_1 = require("./pattern");
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
    ids: array_1.requiredStringArray,
});
// A gameplan is a set of tactics and when they should be used. Of these properties, only tacticIds
// is required.
exports.strategy = yup.object({
    tacticIds: array_1.requiredStringArray,
    suggestedTacticIds: array_1.requiredStringArray,
    conditionalTacticIds: (0, objectOf_1.optionalObjectOf)(yup.array().of(conditional).required()),
});
exports.timeRoutine = exports.strategy.shape({
    weekdays: yup.array().of(yup.number().required()).required(),
    hour: yup.number().required(),
    minute: yup.number().required(),
    title: yup.string().required(),
});
exports.locationRoutine = exports.strategy.shape({
    locationKey: yup.string().required(),
    mode: yup.mixed().oneOf(['enter', 'exit']).required(),
    title: yup.string().required(),
});
exports.gameplanSchema = yup.object().shape({
    uid: yup.string().required(),
    createdAt: timestamp_1.optionalTimestampSchema,
    updatedAt: timestamp_1.optionalTimestampSchema,
    parentIssueIds: array_1.optionalStringArray,
    recommendationsCount: yup.number(),
    timezone: yup.string().required(),
    // Strategies - these are the sequences of tactics to try, including conditional tactics
    impulse: (0, objectOf_1.objectOf)(exports.strategy),
    impulseDebrief: (0, objectOf_1.objectOf)(exports.strategy),
    dayDebrief: yup.lazy(value => (value ? exports.timeRoutine : yup.object().shape({}))),
    // These are the strategies for scheduled times of day...
    time: (0, objectOf_1.optionalObjectOf)(exports.timeRoutine.required()),
    // ...Or when arriving at a location
    location: (0, objectOf_1.optionalObjectOf)(exports.locationRoutine.required()),
    // Data - we keep copies of relevant data on the gameplan document, for performance reasons
    tacticsById: (0, objectOf_1.objectOf)(tactic_1.tacticSchema),
    patternsById: (0, objectOf_1.objectOf)(pattern_1.patternSchema),
    scheduledNotificationIds: array_1.optionalStringArray,
});
exports.SHORT_DAYS = {
    1: 'Sun',
    2: 'Mon',
    3: 'Tue',
    4: 'Wed',
    5: 'Thu',
    6: 'Fri',
    7: 'Sat',
};
exports.LONG_DAYS = [
    '',
    'Sundays',
    'Mondays',
    'Tuesdays',
    'Wednesdays',
    'Thursdays',
    'Fridays',
    'Saturdays',
];
