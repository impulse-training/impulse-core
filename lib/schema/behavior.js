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
exports.behaviorSchema = void 0;
const yup = __importStar(require("yup"));
const log_1 = require("./log");
const timestamp_1 = require("./utils/timestamp");
exports.behaviorSchema = yup.object({
    name: yup.string().required(),
    ordinal: yup.number().required(),
    trackingType: yup
        .mixed()
        .oneOf(['time', 'counter'])
        .required(),
    trackingUnit: yup.string().when('trackingType', {
        is: 'counter',
        then: schema => schema.required('Unit is required when tracking type is "counter".'),
        otherwise: schema => schema.notRequired(),
    }),
    tacticsById: log_1.tacticsById,
    dailyLimit: yup.number(),
    isHelpful: yup.boolean().nullable().defined(),
    createdAt: timestamp_1.optionalTimestampSchema,
    updatedAt: timestamp_1.optionalTimestampSchema,
});
