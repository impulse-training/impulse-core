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
exports.logSchema = exports.logIsButtonLog = exports.logIsMotionLog = exports.logIsRecapLog = exports.logIsTimeLog = exports.logIsLocationLog = exports.logIsImpulseLog = exports.tacticDataSchema = void 0;
// Logs are records of either impulses (cravings or urges), or applied tactics (actions that we
// take)
const yup = __importStar(require("yup"));
const comment_1 = require("./comment");
const gameplan_1 = require("./gameplan");
const pattern_1 = require("./pattern");
const tactic_1 = require("./tactic");
const array_1 = require("./utils/array");
const objectOf_1 = require("./utils/objectOf");
const timestamp_1 = require("./utils/timestamp");
exports.tacticDataSchema = yup.object({
    value: yup.number().required(),
    unit: yup.string().required(),
    formattedValue: yup.string().required(),
    isTotal: yup.boolean().notRequired(),
    lowEmoji: yup.string().notRequired(),
    highEmoji: yup.string().notRequired(),
});
const baseLogSchema = yup.object().shape({
    uid: yup.string().required(),
    createdAt: timestamp_1.optionalTimestampSchema,
    updatedAt: timestamp_1.optionalTimestampSchema,
    startTime: timestamp_1.timestampSchema,
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
    commentCount: yup.number().notRequired(),
    commentsById: yup.object().notRequired(),
    commentsByTacticId: (0, objectOf_1.optionalObjectOf)(yup.object().shape({
        tacticTitle: yup.string().required(),
        commentsById: (0, objectOf_1.objectOf)(comment_1.commentSchema),
    })),
    steps: yup.number().notRequired(),
    // The heart of the log is the strategy - the tactics that should be shown to the user (including
    // conditional tactics). The main property is required, which is the default. However, impulse
    // logs also have a debrief strategy. Additionally, we store tactics by id, so the log always has
    // the data to render the tactics from the strategy, even if those tactics are deleted or modified
    // later.
    strategy: yup.object({
        main: gameplan_1.strategy.required(),
        impulseDebrief: gameplan_1.strategy.notRequired(),
    }),
    // Tactics are a complex union type. We omit this key from the base log schema and add it back in
    // using typescript, so we just "neuter" it here to tell typescript to relax. This saves 10k+
    // lines of type annotations in the generated typescript file.
    tacticsById: (0, objectOf_1.objectOf)(tactic_1.tacticSchema),
    seenTacticIds: array_1.requiredStringArray,
    completedTacticIds: array_1.requiredStringArray,
    tacticLikes: (0, objectOf_1.optionalObjectOf)(yup.boolean().required()),
    tacticData: (0, objectOf_1.optionalObjectOf)(exports.tacticDataSchema),
    sharedWithSupportGroupIds: array_1.optionalStringArray,
});
function logIsImpulseLog(log) {
    return log.type === 'impulse';
}
exports.logIsImpulseLog = logIsImpulseLog;
const impulseLogSchema = baseLogSchema.concat(yup.object().shape({
    type: yup.mixed().oneOf(['impulse']).required(),
    setAsActiveImpulse: yup.boolean().notRequired(),
    pressCount: yup.number().notRequired(),
    isDisplayable: yup.boolean().oneOf([true]).required(),
    buttonPressSecondsSinceEpoch: yup.number().notRequired(),
    // In addition to the strategy field, which is the set of tactics for the currently-selected
    // pattern, we also store the entire "gameplan" on impulse log documents, which is copied from
    // the user's gameplan document at the time.
    gameplan: gameplan_1.gameplanSchema,
    outcome: yup
        .mixed()
        .oneOf(['success', 'setback', 'indeterminate']),
    patternId: yup.string().required(),
    patternsById: (0, objectOf_1.objectOf)(pattern_1.patternSchema),
    debriefNotes: yup.string().notRequired(),
    debriefReminderSentAt: yup.mixed().notRequired(),
    debriefedAt: yup.mixed().notRequired(),
}));
function logIsLocationLog(log) {
    return log.type === 'location';
}
exports.logIsLocationLog = logIsLocationLog;
const locationLogSchema = baseLogSchema.concat(yup.object().shape({
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
const timeLogSchema = baseLogSchema.concat(yup.object().shape({
    type: yup.mixed().oneOf(['time']).required(),
    isDisplayable: yup.boolean().oneOf([true]).required(),
}));
function logIsRecapLog(log) {
    return log.type === 'recap';
}
exports.logIsRecapLog = logIsRecapLog;
const recapLogSchema = baseLogSchema.concat(yup.object().shape({
    type: yup.mixed().oneOf(['recap']).required(),
    isDisplayable: yup.boolean().oneOf([true]).required(),
}));
function logIsMotionLog(log) {
    return log.type === 'motion';
}
exports.logIsMotionLog = logIsMotionLog;
const motionLogSchema = baseLogSchema.concat(yup.object().shape({
    type: yup.mixed().oneOf(['motion']).required(),
    isDisplayable: yup.boolean().oneOf([false]).required(),
}));
function logIsButtonLog(log) {
    return log.type === 'button';
}
exports.logIsButtonLog = logIsButtonLog;
const buttonLogSchema = baseLogSchema.concat(yup.object().shape({
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
        case 'recap':
            return recapLogSchema;
        case 'motion':
            return motionLogSchema;
        case 'button':
            return buttonLogSchema;
        default:
            throw new yup.ValidationError(`Unknown type: ${value.type}`);
    }
});
