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
exports.logBaseSchema = void 0;
const yup = __importStar(require("yup"));
const file_1 = require("../utils/file");
const objectOf_1 = require("../utils/objectOf");
const timestamp_1 = require("../utils/timestamp");
const behaviorData_1 = require("./utils/behaviorData");
const metricData_1 = require("./utils/metricData");
const tacticData_1 = require("./utils/tacticData");
function logBaseSchema(type) {
    return yup.object({
        createdAt: timestamp_1.optionalTimestampSchema,
        updatedAt: timestamp_1.optionalTimestampSchema,
        type: yup.mixed().oneOf([type]).defined(),
        uid: yup.string().required(),
        audioFile: file_1.fileSchema.optional().default(undefined),
        // This is set to false for tool call logs, etc
        isDisplayable: yup.boolean().required(),
        // When explicitly set to true, we'll force Zara not to respond
        skipGptResponse: yup.boolean(),
        // We deal with metrics and behaviors separately
        metricData: (0, objectOf_1.optionalObjectOf)(metricData_1.metricAttributeAndDataSchema),
        behaviorData: (0, objectOf_1.optionalObjectOf)(behaviorData_1.behaviorAndBehaviorDataSchema),
        tacticsData: tacticData_1.tacticsById,
        text: yup.string().nullable(),
        date: timestamp_1.timestampSchema,
        dateString: yup.string().required(),
        senderUid: yup.string().nullable(),
        senderName: yup.string().nullable(),
    });
}
exports.logBaseSchema = logBaseSchema;
