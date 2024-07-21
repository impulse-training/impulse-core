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
exports.followUpSchema = exports.followUpSchemas = void 0;
const yup = __importStar(require("yup"));
const askAnotherQuestion_1 = require("./askAnotherQuestion");
const showTour_1 = require("./showTour");
const writeAnswerToProfile_1 = require("./writeAnswerToProfile");
const writeValueToProfile_1 = require("./writeValueToProfile");
__exportStar(require("./askAnotherQuestion"), exports);
__exportStar(require("./showTour"), exports);
__exportStar(require("./writeAnswerToProfile"), exports);
__exportStar(require("./writeValueToProfile"), exports);
exports.followUpSchemas = {
    askAnotherQuestion: askAnotherQuestion_1.askAnotherQuestionSchema,
    writeAnswerToProfile: writeAnswerToProfile_1.writeAnswerToProfileSchema,
    writeValueToProfile: writeValueToProfile_1.writeValueToProfileSchema,
    showTour: showTour_1.showTourFollowUpSchema,
};
exports.followUpSchema = yup.lazy(value => {
    if (!value)
        return yup.mixed().required();
    if (typeof value.type === 'string' && value.type in exports.followUpSchemas) {
        return exports.followUpSchemas[value.type];
    }
    return yup.object({
        type: yup
            .mixed()
            .oneOf(Object.keys(exports.followUpSchemas))
            .required(),
    });
});
