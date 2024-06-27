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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.folderSchema = void 0;
const yup = __importStar(require("yup"));
const objectOf_1 = require("../../utils/objectOf");
const timestamp_1 = require("../../utils/timestamp");
const base_1 = __importDefault(require("../base"));
const tactic_1 = require("../tactic");
exports.folderSchema = (0, base_1.default)().shape({
    createdAt: timestamp_1.optionalTimestampSchema,
    updatedAt: timestamp_1.optionalTimestampSchema,
    type: yup.mixed().oneOf(['folder']).required(),
    slug: yup.string(),
    creatorProfileId: yup.string(),
    invitationCode: yup.string().required(),
    invitationUrl: yup.string().url().required(),
    tacticsById: (0, objectOf_1.optionalObjectOf)(tactic_1.tacticSchema),
    next3Tactics: yup.array().of(tactic_1.tacticSchema),
});
