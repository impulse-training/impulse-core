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
const lodash_1 = require("lodash");
const yup = __importStar(require("yup"));
const array_1 = require("./utils/array");
const objectOf_1 = require("./utils/objectOf");
const timestamp_1 = require("./utils/timestamp");
exports.supportGroupSchema = yup.object().shape({
    createdAt: timestamp_1.optionalTimestampSchema,
    updatedAt: timestamp_1.optionalTimestampSchema,
    slug: yup.string(),
    templateId: yup.string().optional(),
    everythingPermissions: yup.boolean().optional(),
    participantProfileIds: array_1.requiredStringArray,
    memberTargetCount: yup.number().optional(),
    groupName: yup.string().required(),
    groupNameAliases: yup
        .lazy(obj => yup.object((0, lodash_1.mapValues)(obj, () => yup.string().required())))
        .optional(),
    groupDescription: yup.string().optional(),
    creatorName: yup.string().required(),
    creatorProfileId: yup.string().required(),
    icon: yup.mixed().oneOf(['bugs', 'team', 'group', 'tactics']).required(),
    thumbnailUrl: yup.string().url().required(),
    lastMessagePreview: yup.string().optional(),
    invitationCode: yup.string().optional(),
    invitationUrl: yup.string().url().optional(),
    lastMessageProfileId: yup.string().optional(),
    isSharingDisabled: yup.boolean().optional(),
    isTemplate: yup.boolean().optional(),
    unreadCounts: (0, objectOf_1.objectOf)(yup.number().required()),
    permissions: yup.mixed().required(),
    suggestedTacticIds: yup.object().required(),
});
exports.CONVERSATION_PERMISSIONS = {
    logs: 'Show my logs',
    tactics: 'Show my tactics',
    editTactics: 'Allow to edit my tactics',
    insights: 'Show my insights',
};
