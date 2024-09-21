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
const yup = __importStar(require("yup"));
const log_1 = require("../log");
const array_1 = require("../utils/array");
const firestore_1 = require("../utils/firestore");
const objectOf_1 = require("../utils/objectOf");
const timestamp_1 = require("../utils/timestamp");
function threadBase(type) {
    return yup.object({
        type: yup.mixed().oneOf([type]).required(),
        dateString: yup.string().required(),
        date: timestamp_1.timestampSchema,
        firstLogId: yup.string(),
        profileId: yup.string().required(),
        isProcessing: yup.boolean(),
        isVisible: yup.boolean().required(),
        title: yup.string(),
        gptSystemMessage: yup.string(),
        tacticsWithCommentsIds: array_1.optionalStringArray,
        sharedWithFolderIds: array_1.optionalStringArray,
        logsById: (0, objectOf_1.objectOf)(log_1.logSchema),
        createdAt: timestamp_1.optionalTimestampSchema,
        updatedAt: timestamp_1.optionalTimestampSchema,
        profileEmojiIDString: yup.string(),
        debriefedAt: timestamp_1.optionalTimestampSchema,
        debriefAfter: timestamp_1.optionalTimestampSchema,
        debriefReminderSentAt: timestamp_1.optionalTimestampSchema,
        // We're introducing a "whatsapp thread", which is
        // Optionally, whatsapp threads can be pointed at a folder, and can write tactics into that folder
        whatsappSupportGroupDoc: firestore_1.documentReferenceSchema,
    });
}
exports.default = threadBase;
