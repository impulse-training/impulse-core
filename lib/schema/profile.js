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
const tactic_1 = require("./tactic");
const array_1 = require("./utils/array");
const objectOf_1 = require("./utils/objectOf");
const strategy_1 = require("./utils/strategy");
const timestamp_1 = require("./utils/timestamp");
exports.profileSchema = yup.object().shape({
    createdAt: timestamp_1.optionalTimestampSchema,
    updatedAt: timestamp_1.optionalTimestampSchema,
    activeImpulseId: yup.string().optional(),
    currentAppState: yup.mixed().optional(),
    lastActiveAt: yup.date().optional(),
    expoPushToken: yup.string().optional(),
    widgetInstalledAt: timestamp_1.optionalTimestampSchema,
    notificationPreferences: (0, objectOf_1.optionalObjectOf)(yup.array().of(notification_1.notificationOptionSchema)),
    androidPermissions: (0, objectOf_1.optionalObjectOf)(yup.boolean().required()),
    parentIssueIds: yup.array().of(yup.string()).optional(),
    region: yup.string().nullable().optional(),
    timezone: yup.string().required(),
    invitationCode: yup.string().required(),
    programId: yup.string().notRequired(),
    scheduledNotificationIds: array_1.optionalStringArray,
    // My set of tactics for overcoming impulses
    impulseStrategiesByPattern: (0, objectOf_1.objectOf)(yup.array(strategy_1.strategySchema)),
    scheduledStrategies: yup.array(strategy_1.timeStrategySchema.required()).required(),
    locationStrategies: yup.array(strategy_1.locationStrategySchema.required()).required(),
    // The any keyword helps to reduce the complexity of generated types. If we leave it up to yup,
    // it will compile very complex union types, but we if do it ourselves, we can simply say
    // tacticsById is a Record<string, TacticValue> and be done with it.
    tacticsById: (0, objectOf_1.objectOf)(tactic_1.tacticSchema),
});
