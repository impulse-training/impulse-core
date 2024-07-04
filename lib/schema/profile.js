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
exports.profileSchema = void 0;
const yup = __importStar(require("yup"));
const log_1 = require("./log");
const notification_1 = require("./notification");
const array_1 = require("./utils/array");
const firestore_1 = require("./utils/firestore");
const objectOf_1 = require("./utils/objectOf");
const timestamp_1 = require("./utils/timestamp");
exports.profileSchema = yup.object({
    createdAt: timestamp_1.optionalTimestampSchema,
    updatedAt: timestamp_1.optionalTimestampSchema,
    lastActiveAt: timestamp_1.optionalTimestampSchema,
    widgetInstalledAt: timestamp_1.optionalTimestampSchema,
    widgetLastPressedAt: timestamp_1.optionalTimestampSchema,
    activeImpulseDoc: firestore_1.documentReferenceSchema,
    currentAppState: yup.mixed().optional(),
    expoPushToken: yup.string().optional(),
    notificationPreferences: (0, objectOf_1.optionalObjectOf)(yup.array().of(notification_1.notificationOptionSchema)),
    issueId: yup.string().required().nullable(),
    issueName: yup.string(),
    isReadyForTour: yup.boolean(),
    isOnboardingComplete: yup.boolean(),
    parentIssueIds: array_1.optionalStringArray,
    setbackThreshold: yup.number(),
    currentAgent: yup.mixed().default('onboarding'),
    androidPermissions: (0, objectOf_1.optionalObjectOf)(yup.boolean().required()),
    // This is a record of question data, that may be accessed by the LLM
    longTermMemory: (0, objectOf_1.optionalObjectOf)(log_1.questionDataSchema),
    region: yup.string().nullable().optional(),
    timezone: yup.string().required(),
    scheduledNotificationIds: array_1.optionalStringArray,
    uids: array_1.requiredStringArray,
});
