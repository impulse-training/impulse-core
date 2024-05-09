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
exports.logSchema = exports.logIsTimeLog = exports.logIsLocationLog = exports.logIsImpulseLog = exports.tacticDataSchema = void 0;
// Logs are records of either impulses (cravings or urges), or applied tactics (actions that we
// take)
const yup = __importStar(require("yup"));
const comment_1 = require("./comment");
const tactic_1 = require("./tactic");
const array_1 = require("./utils/array");
const firestore_1 = require("./utils/firestore");
const objectOf_1 = require("./utils/objectOf");
const timestamp_1 = require("./utils/timestamp");
exports.tacticDataSchema = yup.object({
    value: yup.number(),
    unit: yup.mixed().oneOf(['time', 'custom']).required(),
    customUnit: yup.string(),
    optionId: yup.string().nullable(),
    optionLabel: yup.string(),
    optionColor: yup.string(),
    optionTextColor: yup.string(),
    isCompleted: yup.boolean(),
    nextStrategiesPath: yup.string(),
    formattedValue: yup.string().required(),
    lowEmoji: yup.string().notRequired(),
    highEmoji: yup.string().notRequired(),
});
const baseLogSchema = yup.object().shape({
    profileId: yup.string().required(),
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
    strategiesPath: yup.string().required(),
    // TODO: These represent seen tactics, but this may need some clarification
    tacticIds: array_1.requiredStringArray,
    tacticsById: (0, objectOf_1.objectOf)(tactic_1.tacticSchema),
    tacticLikes: (0, objectOf_1.optionalObjectOf)(yup.boolean().required()),
    tacticData: (0, objectOf_1.objectOf)(exports.tacticDataSchema),
    sharedWithSupportGroupIds: array_1.optionalStringArray,
});
function logIsImpulseLog(log) {
    return log.type === 'impulse';
}
exports.logIsImpulseLog = logIsImpulseLog;
const impulseLogSchema = baseLogSchema.concat(yup.object().shape({
    type: yup.mixed().oneOf(['impulse']).required(),
    setAsActiveImpulse: yup.boolean().notRequired(),
    isDisplayable: yup.boolean().oneOf([true]).required(),
    debriefTactic: firestore_1.documentReferenceSchema,
    debriefAfter: timestamp_1.optionalTimestampSchema,
    debriefReminderSentAt: timestamp_1.optionalTimestampSchema,
    debriefedAt: timestamp_1.optionalTimestampSchema,
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
exports.logSchema = yup.lazy(value => {
    switch (value.type) {
        case 'impulse':
            return impulseLogSchema;
        case 'location':
            return locationLogSchema;
        case 'time':
            return timeLogSchema;
        default:
            throw new yup.ValidationError(`Unknown type: ${value.type}`);
    }
});
