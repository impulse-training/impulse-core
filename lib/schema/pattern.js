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
exports.patternSchema = void 0;
const Yup = __importStar(require("yup"));
const gameplan_1 = require("./gameplan");
const timestamp_1 = require("./utils/timestamp");
exports.patternSchema = Yup.object().shape({
    uid: Yup.string().required(),
    createdAt: timestamp_1.timestampSchema.required(),
    updatedAt: timestamp_1.timestampSchema.required(),
    name: Yup.string().required(),
    ordinal: Yup.number().required(),
    supportGroupIds: Yup.array().of(Yup.string()).notRequired(),
    notification: Yup.object({
        title: Yup.string().required(),
        body: Yup.string().required(),
    }).notRequired(),
    setbackTacticId: Yup.string().notRequired(),
    setbackThreshold: Yup.number().required(),
    issueId: Yup.string().notRequired(),
    sendWeeklyReports: Yup.boolean().required(),
    gameplanId: Yup.string().notRequired(),
    debriefGameplanId: Yup.string().notRequired(),
    impulse: gameplan_1.gameplanBaseSchema,
    debrief: gameplan_1.gameplanBaseSchema,
});
