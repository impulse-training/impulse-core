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
exports.CONVERSATION_PERMISSIONS = exports.supportGroupSchema = void 0;
const yup = __importStar(require("yup"));
const timestamp_1 = require("./utils/timestamp");
// export interface SupportGroupValue {
//   createdAt: TimestampLike;
//   updatedAt: TimestampLike;
//   templateId?: string;
//   everythingPermissions?: boolean;
//   participantUids: Array<string>;
//   groupName: string;
//   groupNameAliases?: Record<string, string>;
//   groupDescription?: string;
//   creatorName: string;
//   creatorUid: string;
//   icon: 'bugs' | 'team' | 'group' | 'tactics';
//   thumbnailUrl: string;
//   lastMessagePreview?: string;
//   invitationCode?: string;
//   invitationUrl?: string;
//   lastMessageUid?: string;
//   isSharingDisabled?: boolean;
//   isTemplate?: boolean;
//   unreadCounts: { [uid: string]: number };
//   // TODO: deprecated, to remove
//   permissions: SupportGroupPermissions;
//   // A map of tactics that have been suggested by different participants. The key is the uid of the
//   // participant who made the suggestion, and the value is an array of tactic ids.
//   suggestedTacticIds: Record<string, Array<string>>;
// }
// yup schema for SupportGroupValue
exports.supportGroupSchema = yup.object().shape({
    createdAt: timestamp_1.timestampSchema.required(),
    updatedAt: timestamp_1.timestampSchema.required(),
    templateId: yup.string().optional(),
    everythingPermissions: yup.boolean().optional(),
    participantUids: yup.array().of(yup.string()).required(),
    memberTargetCount: yup.number().optional(),
    groupName: yup.string().required(),
    groupNameAliases: yup
        .lazy(obj => yup.object().shape(Object.keys(obj).reduce((acc, key) => {
        acc[key] = yup.string().required();
        return acc;
    }, {})))
        .optional(),
    groupDescription: yup.string().optional(),
    creatorName: yup.string().required(),
    creatorUid: yup.string().required(),
    icon: yup.mixed().oneOf(['bugs', 'team', 'group', 'tactics']).required(),
    thumbnailUrl: yup.string().url().required(),
    lastMessagePreview: yup.string().optional(),
    invitationCode: yup.string().optional(),
    invitationUrl: yup.string().url().optional(),
    lastMessageUid: yup.string().optional(),
    isSharingDisabled: yup.boolean().optional(),
    isTemplate: yup.boolean().optional(),
    unreadCounts: yup.object().required(),
    permissions: yup.mixed().required(),
    suggestedTacticIds: yup.object().required(),
});
exports.CONVERSATION_PERMISSIONS = {
    logs: 'Show my logs',
    tactics: 'Show my tactics',
    editTactics: 'Allow to edit my tactics',
    insights: 'Show my insights',
};
