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
exports.gameplanSchema = exports.timeGameplanSchema = exports.locationGameplanSchema = exports.impulseGameplanSchema = exports.debriefGameplanSchema = exports.gameplanBaseSchema = void 0;
const yup = __importStar(require("yup"));
const TimestampLike_1 = require("../utils/TimestampLike");
const tactic_1 = require("./tactic");
exports.gameplanBaseSchema = yup.object().shape({
    tacticIds: yup.array().of(yup.string().required()).required(),
    suggestedTacticIds: yup.array().of(yup.string().required()).required(),
    tacticsById: yup
        .object()
        .shape({
        [yup.ref('$placeholderKey')]: tactic_1.tacticSchema,
    })
        .required(),
});
// Base schema for GameplanValueBase
const gameplanValueBaseSchema = exports.gameplanBaseSchema.concat(yup.object().shape({
    uid: yup.string().required(),
    createdAt: yup
        .mixed()
        .test('is-fake-timestamp', 'Must be a TimestampLike', value => value instanceof TimestampLike_1.TimestampLike)
        .required(),
    updatedAt: yup
        .mixed()
        .test('is-fake-timestamp', 'Must be a TimestampLike', value => value instanceof TimestampLike_1.TimestampLike)
        .required(),
    title: yup.string().nullable(),
    navigationTitle: yup.string().nullable(),
    isTemplate: yup.boolean().nullable(),
    tacticsUpdatedAt: yup
        .mixed()
        .test('is-fake-timestamp', 'Must be a TimestampLike', value => value instanceof TimestampLike_1.TimestampLike)
        .nullable(),
    timezone: yup.string().nullable(),
    patternName: yup.string().nullable(),
    issueId: yup.string().nullable(),
    parentIssueIds: yup.array().of(yup.string().required()).nullable(),
}));
const impulseGameplanSchema = gameplanValueBaseSchema.concat(yup.object().shape({
    type: yup
        .mixed()
        .oneOf(['impulse', 'success', 'setback'])
        .required(),
    patternId: yup.string().required(),
}));
exports.impulseGameplanSchema = impulseGameplanSchema;
const schedulableGameplanSchema = gameplanValueBaseSchema.concat(yup.object().shape({
    weekdays: yup.array().of(yup.number().min(1).max(7).required()).required(),
    hour: yup.number().min(0).max(23).required(),
    minute: yup.number().min(0).max(59).required(),
    timezone: yup.string().required(),
    scheduledNotificationIds: yup
        .array()
        .of(yup.string().required())
        .nullable(),
}));
const timeGameplanSchema = schedulableGameplanSchema.concat(yup.object().shape({
    type: yup.mixed().oneOf(['time']).required(),
}));
exports.timeGameplanSchema = timeGameplanSchema;
const debriefGameplanSchema = schedulableGameplanSchema.concat(yup.object().shape({
    type: yup.mixed().oneOf(['debrief']).required(),
}));
exports.debriefGameplanSchema = debriefGameplanSchema;
const locationGameplanSchema = gameplanValueBaseSchema.concat(yup.object().shape({
    type: yup.mixed().oneOf(['location']).required(),
    locationId: yup.string().nullable(),
    mode: yup.mixed().oneOf(['enter', 'exit']).required(),
}));
exports.locationGameplanSchema = locationGameplanSchema;
exports.gameplanSchema = yup.lazy(value => {
    switch (value.type) {
        case 'time':
            return timeGameplanSchema;
        case 'location':
            return locationGameplanSchema;
        case 'impulse':
            return impulseGameplanSchema;
        case 'debrief':
            return debriefGameplanSchema;
        default:
            throw new yup.ValidationError(`Unknown type: ${value.type}`);
    }
});
