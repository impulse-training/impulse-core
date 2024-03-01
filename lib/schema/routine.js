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
exports.routineSchema = exports.timeRoutineSchema = exports.locationRoutineSchema = exports.dayDebriefRoutineSchema = void 0;
const yup = __importStar(require("yup"));
const array_1 = require("./utils/array");
const timestamp_1 = require("./utils/timestamp");
// Base schema for RoutineValueBase
const routineBaseSchema = yup.object({
    uid: yup.string().required(),
    createdAt: timestamp_1.optionalTimestampSchema,
    updatedAt: timestamp_1.optionalTimestampSchema,
    title: yup.string().required(),
    summary: yup.string().required(),
    isTemplate: yup.boolean().nullable(),
    timezone: yup.string().nullable(),
});
const schedulableRoutineSchema = routineBaseSchema.concat(yup.object({
    type: yup
        .mixed()
        .oneOf(['time', 'dayDebrief'])
        .required(),
    weekdays: (0, array_1.requiredArrayOf)(yup.number().min(1).max(7)),
    hour: yup.number().min(0).max(23).required(),
    minute: yup.number().min(0).max(59).required(),
    timezone: yup.string().required(),
    scheduledNotificationIds: (0, array_1.optionalArrayOf)(yup.string()),
}));
const timeRoutineSchema = schedulableRoutineSchema.concat(yup.object({
    type: yup.mixed().oneOf(['time']).required(),
}));
exports.timeRoutineSchema = timeRoutineSchema;
const dayDebriefRoutineSchema = schedulableRoutineSchema.concat(yup.object({
    type: yup.mixed().oneOf(['dayDebrief']).required(),
}));
exports.dayDebriefRoutineSchema = dayDebriefRoutineSchema;
const locationRoutineSchema = routineBaseSchema.concat(yup.object({
    type: yup.mixed().oneOf(['location']).required(),
    locationId: yup.string().nullable(),
    mode: yup.mixed().oneOf(['enter', 'exit']).required(),
}));
exports.locationRoutineSchema = locationRoutineSchema;
exports.routineSchema = yup.lazy(value => {
    switch (value.type) {
        case 'time':
            return timeRoutineSchema;
        case 'location':
            return locationRoutineSchema;
        case 'dayDebrief':
            return dayDebriefRoutineSchema;
        default:
            throw new yup.ValidationError(`Unknown type: ${value.type}`);
    }
});
