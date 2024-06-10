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
exports.folderSchema = exports.tacticPreviewSchema = void 0;
const lodash_1 = require("lodash");
const yup = __importStar(require("yup"));
const tactic_1 = require("./tactic");
const array_1 = require("./utils/array");
const image_1 = require("./utils/image");
const objectOf_1 = require("./utils/objectOf");
const timestamp_1 = require("./utils/timestamp");
const tacticType = (0, lodash_1.keys)(tactic_1.tacticSchemas);
exports.tacticPreviewSchema = yup.object({
    title: yup.string().required(),
    type: yup.mixed().oneOf(tacticType).required(),
    image: image_1.imageSchema.optional().nullable(),
    backgroundColor: yup.string().optional(),
    updatedAt: timestamp_1.optionalTimestampSchema,
});
exports.folderSchema = yup.object().shape({
    createdAt: timestamp_1.optionalTimestampSchema,
    updatedAt: timestamp_1.optionalTimestampSchema,
    type: yup.mixed().oneOf(['folder']).required(),
    slug: yup.string(),
    name: yup.string().required(),
    creatorProfileId: yup.string(),
    invitationCode: yup.string().required(),
    invitationUrl: yup.string().url().required(),
    tacticPreviewsById: (0, objectOf_1.objectOf)(exports.tacticPreviewSchema.required()),
    last3TacticPreviews: yup.array().of(exports.tacticPreviewSchema.required()),
    // Template support groups are used to populate user's data on signup
    recommendedForIssueIds: array_1.optionalStringArray,
    recommendedForIssueOrdinals: (0, objectOf_1.optionalObjectOf)(yup.number().required()),
});
