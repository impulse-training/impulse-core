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
exports.timeGameplanValueSchema = exports.locationGameplanValueSchema = exports.impulseGameplanValueSchema = exports.debriefGameplanValueSchema = exports.gameplanSchema = void 0;
const yup = __importStar(require("yup"));
const TimestampLike_1 = require("../utils/TimestampLike");
const tactic_1 = require("./tactic");
exports.gameplanSchema = yup.object().shape({
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
const gameplanValueBaseSchema = exports.gameplanSchema.concat(yup.object().shape({
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
const impulseGameplanValueSchema = gameplanValueBaseSchema.concat(yup.object().shape({
    type: yup
        .mixed()
        .oneOf(['impulse', 'success', 'setback'])
        .required(),
    patternId: yup.string().required(),
}));
exports.impulseGameplanValueSchema = impulseGameplanValueSchema;
const schedulableGameplanValueSchema = gameplanValueBaseSchema.concat(yup.object().shape({
    weekdays: yup.array().of(yup.number().min(1).max(7).required()).required(),
    hour: yup.number().min(0).max(23).required(),
    minute: yup.number().min(0).max(59).required(),
    timezone: yup.string().required(),
    scheduledNotificationIds: yup
        .array()
        .of(yup.string().required())
        .nullable(),
}));
const timeGameplanValueSchema = schedulableGameplanValueSchema.concat(yup.object().shape({
    type: yup.mixed().oneOf(['time']).required(),
}));
exports.timeGameplanValueSchema = timeGameplanValueSchema;
const debriefGameplanValueSchema = schedulableGameplanValueSchema.concat(yup.object().shape({
    type: yup.mixed().oneOf(['debrief']).required(),
}));
exports.debriefGameplanValueSchema = debriefGameplanValueSchema;
const locationGameplanValueSchema = gameplanValueBaseSchema.concat(yup.object().shape({
    type: yup.mixed().oneOf(['location']).required(),
    locationId: yup.string().nullable(),
    mode: yup.mixed().oneOf(['enter', 'exit']).required(),
}));
exports.locationGameplanValueSchema = locationGameplanValueSchema;
