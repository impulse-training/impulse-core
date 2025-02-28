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
const notification_1 = require("./notification");
const thread_1 = require("./thread");
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
    currentAppState: yup.mixed().optional(),
    expoPushToken: yup.string().optional(),
    notificationPreferences: (0, objectOf_1.optionalObjectOf)(yup.array().of(notification_1.notificationOptionSchema)),
    goal: yup.string().nullable().optional(),
    verificationCode: yup.string().required(),
    dayReviewTimeMinutes: yup.number().nullable(),
    isReadyForTour: yup.boolean(),
    isOnboardingComplete: yup.boolean(),
    parentIds: array_1.optionalStringArray,
    debriefReminderDelayMinutes: yup.number().nullable(),
    // This determines the type of GPT agent that they're connected to
    agentType: thread_1.agentType.required(),
    androidPermissions: (0, objectOf_1.optionalObjectOf)(yup.boolean().required()),
    // Behavior data
    defaultBehaviorDoc: firestore_1.documentReferenceSchema,
    behaviorsDescription: yup.string(),
    initialImpulseMode: yup
        .mixed()
        .oneOf(['text', 'liveAudio']),
    // System message context for interacting with OpenAI
    historicalInsights: yup.array().of(yup.string().required()),
    recentSummaries: (0, objectOf_1.objectOf)(yup.string().required()),
    activeThread: yup
        .object({
        doc: firestore_1.documentReferenceSchema.required(),
        expiresAt: timestamp_1.timestampSchema,
    })
        .optional(),
    isTourDismissed: yup.boolean(),
    tourCompletedAt: timestamp_1.optionalTimestampSchema,
    region: yup.string().nullable().optional(),
    timezone: yup.string().required(),
    scheduledNotificationIds: array_1.optionalStringArray,
    whatsappStrategyDoc: firestore_1.documentReferenceSchema,
    uids: array_1.requiredStringArray,
    onboardedWithZaraAt: timestamp_1.optionalTimestampSchema,
    enableZara: yup.boolean(),
});
