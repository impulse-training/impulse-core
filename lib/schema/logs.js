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
exports.logSchema = exports.logIsButtonLog = exports.logIsMotionLog = exports.logIsDebriefLog = exports.logIsTimeLog = exports.logIsLocationLog = exports.logIsImpulseLog = void 0;
// Logs are records of either impulses (cravings or urges), or applied tactics (actions that we
// take)
const yup = __importStar(require("yup"));
const gameplan_1 = require("./gameplan");
const pattern_1 = require("./pattern");
const tactic_1 = require("./tactic");
const objectOf_1 = require("./utils/objectOf");
const timestamp_1 = require("./utils/timestamp");
const BaseLogSchema = yup.object().shape({
    uid: yup.string().required(),
    createdAt: timestamp_1.timestampSchema.required(),
    updatedAt: timestamp_1.timestampSchema.required(),
    startTime: timestamp_1.timestampSchema.required(),
    timezone: yup.string().required(),
    location: yup.object().shape({
        latitude: yup.number(),
        longitude: yup.number(),
        altitude: yup.number(),
        accuracy: yup.number(),
        altitudeAccuracy: yup.number(),
        heading: yup.number(),
        speed: yup.number(),
    }),
    locationIsFetching: yup.boolean().required(),
    locationFormatted: yup.string().notRequired(),
    allTacticIds: yup.array().of(yup.string()).required(),
    commentCount: yup.number().notRequired(),
    commentsById: yup.object().notRequired(),
    commentsByTacticId: (0, objectOf_1.optionalObjectOf)(yup
        .object()
        .shape({ tacticTitle: yup.string().required(), comments: yup.object() })),
    steps: yup.number().notRequired(),
    tacticIds: yup.array().of(yup.string().required()).required(),
    tactics: (0, objectOf_1.objectOf)(tactic_1.tacticSchema),
    suggestedTacticIds: yup.array().of(yup.string()).notRequired(),
    isUpdatingSuggestions: yup.boolean().notRequired(),
    supportGroupSuggestedTacticIds: yup
        .object()
        .shape({
        impulse: yup.object().shape({}),
        impulseDebrief: yup.object().shape({}),
        all: yup.object().shape({}), // Replace with Record<string, string> if defined
    })
        .notRequired(),
    tacticUsage: yup.object().shape({}).notRequired(),
    tacticData: yup.object().shape({}).notRequired(),
    sharedWithSupportGroupIds: yup.array().of(yup.string()).notRequired(),
});
function logIsImpulseLog(log) {
    return log.type === 'impulse';
}
exports.logIsImpulseLog = logIsImpulseLog;
const impulseLogSchema = BaseLogSchema.concat(yup.object().shape({
    type: yup.mixed().oneOf(['impulse']).required(),
    setAsActiveImpulse: yup.boolean().notRequired(),
    pressCount: yup.number().notRequired(),
    outcome: yup
        .mixed()
        .oneOf(['success', 'setback', 'indeterminate'])
        .required(),
    isDisplayable: yup.boolean().oneOf([true]).required(),
    buttonPressSecondsSinceEpoch: yup.number().notRequired(),
    gameplans: (0, objectOf_1.objectOf)(yup
        .object()
        .shape({ main: gameplan_1.gameplanBaseSchema, impulseDebrief: gameplan_1.gameplanBaseSchema })),
    patterns: (0, objectOf_1.objectOf)(pattern_1.patternSchema),
    patternId: yup.string().required(),
    patternIds: yup.array().of(yup.string()).required(),
    patternUsage: (0, objectOf_1.objectOf)(pattern_1.patternUsageSchema),
    debriefNotes: yup.string().notRequired(),
    debriefReminderSentAt: yup.mixed().notRequired(),
    debriefedAt: yup.mixed().notRequired(),
}));
function logIsLocationLog(log) {
    return log.type === 'location';
}
exports.logIsLocationLog = logIsLocationLog;
const locationLogSchema = BaseLogSchema.concat(yup.object().shape({
    type: yup.mixed().oneOf(['location']).required(),
    locationId: yup.string().required(),
    isDisplayable: yup.boolean().oneOf([true]).required(),
    locationName: yup.string().required(),
    locationMode: yup.mixed().oneOf(['enter', 'exit']).required(),
}));
function logIsTimeLog(log) {
    return log.type === 'time';
}
exports.logIsTimeLog = logIsTimeLog;
const timeLogSchema = BaseLogSchema.concat(yup.object().shape({
    type: yup.mixed().oneOf(['time']).required(),
    isDisplayable: yup.boolean().oneOf([true]).required(),
    gameplanId: yup.string().required(),
}));
function logIsDebriefLog(log) {
    return log.type === 'debrief';
}
exports.logIsDebriefLog = logIsDebriefLog;
const debriefLogSchema = BaseLogSchema.concat(yup.object().shape({
    type: yup.mixed().oneOf(['debrief']).required(),
    outcome: yup
        .mixed()
        .oneOf(['success', 'setback', 'indeterminate'])
        .required(),
    patterns: (0, objectOf_1.objectOf)(pattern_1.patternSchema),
    isDisplayable: yup.boolean().oneOf([true]).required(),
    gameplanId: yup.string().required(),
    patternIds: yup.array().of(yup.string()).required(),
    patternUsage: yup.object().shape({}).required(),
    patternUsageEntries: yup.object().shape({}).required(), // Replace with Record<string, Record<string, PatternUsageSchema>> if defined
}));
function logIsMotionLog(log) {
    return log.type === 'motion';
}
exports.logIsMotionLog = logIsMotionLog;
const motionLogSchema = BaseLogSchema.concat(yup.object().shape({
    type: yup.mixed().oneOf(['motion']).required(),
    isDisplayable: yup.boolean().oneOf([false]).required(),
}));
function logIsButtonLog(log) {
    return log.type === 'button';
}
exports.logIsButtonLog = logIsButtonLog;
const buttonLogSchema = BaseLogSchema.concat(yup.object().shape({
    type: yup.mixed().oneOf(['button']).required(),
    isDisplayable: yup.boolean().oneOf([false]).required(),
    isDeviceConnected: yup.boolean().required(),
    characteristics: yup.object().shape({}).required(),
}));
exports.logSchema = yup.lazy(value => {
    switch (value.type) {
        case 'impulse':
            return impulseLogSchema;
        case 'location':
            return locationLogSchema;
        case 'time':
            return timeLogSchema;
        case 'debrief':
            return debriefLogSchema;
        case 'motion':
            return motionLogSchema;
        case 'button':
            return buttonLogSchema;
        default:
            throw new yup.ValidationError(`Unknown type: ${value.type}`);
    }
});
