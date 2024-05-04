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
exports.dayLogsSummarySchema = void 0;
const yup = __importStar(require("yup"));
const log_1 = require("./log");
const option_1 = require("./option");
const objectOf_1 = require("./utils/objectOf");
// And this is a summary of all the tactics for a given log entry
const logSummarySchema = yup.object({
    type: yup.mixed().oneOf(['time', 'impulse']).required(),
    hour: yup.number().required(),
    minute: yup.number().required(),
    tacticDataById: (0, objectOf_1.objectOf)(log_1.tacticDataSchema),
    optionsById: (0, objectOf_1.objectOf)(option_1.optionSchema),
});
// Which is combined into a daily summary. Note that this document doesn't include profileId, as
// that's encoded into the document path
exports.dayLogsSummarySchema = (0, objectOf_1.objectOf)(logSummarySchema);
