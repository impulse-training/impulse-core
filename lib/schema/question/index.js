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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionSchema = exports.questionSchemas = void 0;
const yup = __importStar(require("yup"));
const counter_1 = require("./counter");
const issue_1 = require("./issue");
const multipleChoice_1 = require("./multipleChoice");
const scaleOf1To10_1 = require("./scaleOf1To10");
const text_1 = require("./text");
const time_1 = require("./time");
__exportStar(require("./counter"), exports);
__exportStar(require("./issue"), exports);
__exportStar(require("./multipleChoice"), exports);
__exportStar(require("./scaleOf1To10"), exports);
__exportStar(require("./time"), exports);
__exportStar(require("./utils/guards"), exports);
exports.questionSchemas = {
    text: text_1.questionTextSchema,
    time: time_1.questionTimeSchema,
    counter: counter_1.questionCounterSchema,
    issue: issue_1.questionIssueSchema,
    scaleOf1To10: scaleOf1To10_1.questionScaleOf1To10Schema,
    multipleChoice: multipleChoice_1.questionMultipleChoiceSchema,
};
exports.questionSchema = yup.lazy(value => {
    if (!value)
        return yup.mixed().required();
    if (typeof value.type === 'string' && value.type in exports.questionSchemas) {
        return exports.questionSchemas[value.type];
    }
    return yup.object({
        type: yup
            .mixed()
            .oneOf(Object.keys(exports.questionSchemas))
            .required(),
    });
});
