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
exports.schemaMap = exports.documentSchema = void 0;
const lodash_1 = require("lodash");
const yup = __importStar(require("yup"));
const schemas = __importStar(require("."));
// Can take any document snapshot from firestore, get its collection type, and return a schema for
// validation.
exports.documentSchema = yup.lazy(snap => {
    const path = snap.ref.path;
    const collection = (0, lodash_1.nth)((0, lodash_1.split)(path, '/'), -2);
    if (typeof snap.type === 'string' && snap.type in schemas) {
        return exports.schemaMap[collection];
    }
    return yup.object();
});
exports.schemaMap = {
    tactics: schemas.tacticSchema,
    logs: schemas.logSchema,
    streams: schemas.streamSchema,
    comments: schemas.commentSchema,
    locations: schemas.locationSchema,
    profiles: schemas.profileSchema,
    issues: schemas.issueSchema,
    mailTemplates: schemas.mailTemplateSchema,
    // NOT implemented
    // invitations: schemas.invitationSchema,
    // categories: schemas.categorySchema,
};
