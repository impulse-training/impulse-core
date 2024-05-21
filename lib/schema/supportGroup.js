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
exports.CONVERSATION_PERMISSIONS = exports.supportGroupSchema = exports.tacticPreviewSchema = void 0;
const lodash_1 = require("lodash");
const yup = __importStar(require("yup"));
const array_1 = require("./utils/array");
const image_1 = require("./utils/image");
const objectOf_1 = require("./utils/objectOf");
const timestamp_1 = require("./utils/timestamp");
exports.tacticPreviewSchema = yup.object({
    title: yup.string().required(),
    image: image_1.imageSchema.optional(),
    backgroundColor: yup.string().optional(),
    updatedAt: timestamp_1.optionalTimestampSchema,
});
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
    creatorProfileId: yup.string(),
    lastMessagePreview: yup.string().optional(),
    invitationCode: yup.string().required(),
    invitationUrl: yup.string().url().required(),
    lastMessageProfileId: yup.string().optional(),
    isSharingDisabled: yup.boolean().optional(),
    tacticPreviewsById: yup.array().of(exports.tacticPreviewSchema.required()),
    unreadCounts: (0, objectOf_1.optionalObjectOf)(yup.number().required()),
    permissions: yup.object().optional(),
});
exports.CONVERSATION_PERMISSIONS = {
    logs: 'Show my logs',
    tactics: 'Show my tactics',
    editTactics: 'Allow to edit my tactics',
    insights: 'Show my insights',
};
