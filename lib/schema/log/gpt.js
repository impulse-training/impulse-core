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
exports.gptLogSchema = void 0;
const yup = __importStar(require("yup"));
const base_1 = require("./base");
exports.gptLogSchema = (0, base_1.logBaseSchema)('gpt').shape({
    role: yup.mixed().oneOf(['assistant']).required(),
    suggestedResponses: yup.array().of(yup.string().required()),
    message: yup.object({
        role: yup.mixed().oneOf(['assistant']),
        tool_calls: yup.array().of(yup.mixed()),
    }),
    toolCallResponses: yup.array().of(yup.object({
        role: yup.mixed().oneOf(['tool']).required(),
        tool_call_id: yup.string().required(),
        content: yup.string().required(),
    })),
});
