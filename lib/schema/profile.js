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
const image_1 = require("./utils/image");
const objectOf_1 = require("./utils/objectOf");
const timestamp_1 = require("./utils/timestamp");
exports.profileSchema = yup.object().shape({
    uid: yup.string().required(),
    createdAt: timestamp_1.optionalTimestampSchema,
    updatedAt: timestamp_1.optionalTimestampSchema,
    buttonId: yup.string().optional(),
    isAdmin: yup.boolean().optional(),
    isSuperAdmin: yup.boolean().optional(),
    activeImpulseId: yup.string().optional(),
    email: yup.string().email().required(),
    currentAppState: yup.mixed().optional(),
    showStorybook: yup.boolean().optional(),
    lastActiveAt: yup.date().optional(),
    expoPushToken: yup.string().optional(),
    releaseChannel: yup.string().oneOf(['default', 'canary']).optional(),
    widgetInstalledAt: timestamp_1.optionalTimestampSchema,
    notificationPreferences: (0, objectOf_1.optionalObjectOf)(yup.array().of(notification_1.notificationOptionSchema)),
    isCurrentlyTrackingMotion: yup.boolean().optional(),
    showTacticsFromSupportGroups: yup.boolean().optional(),
    androidPermissions: (0, objectOf_1.optionalObjectOf)(yup.boolean().required()),
    parentIssueIds: yup.array().of(yup.string()).optional(),
    stepTrackingEnabled: yup.boolean().optional(),
    displayName: yup.string().optional(),
    firstName: yup.string().optional(),
    lastName: yup.string().optional(),
    nickName: yup.string().optional(),
    region: yup.string().nullable().optional(),
    timezone: yup.string().required(),
    phoneNumber: yup.string().optional(),
    avatar: image_1.imageSchema.optional().default(undefined),
    isTourCompleted: yup.boolean().optional(),
    isButtonSetupSkipped: yup.boolean().optional(),
    invitationCode: yup.string().required(),
});
// programsCount: yup.number(),
// scheduledNotificationIds: optionalStringArray,
