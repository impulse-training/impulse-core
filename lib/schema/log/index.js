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
exports.logSchema = exports.logSchemas = void 0;
const yup = __importStar(require("yup"));
const actionRecap_1 = require("./actionRecap");
const animationLog_1 = require("./animationLog");
const audioLog_1 = require("./audioLog");
const dayReview_1 = require("./dayReview");
const impulseLog_1 = require("./impulseLog");
const messageLog_1 = require("./messageLog");
const questionsLog_1 = require("./questionsLog");
const showTourLog_1 = require("./showTourLog");
const strategiesLog_1 = require("./strategiesLog");
const whatsappMessageLog_1 = require("./whatsappMessageLog");
__exportStar(require("./actionRecap"), exports);
__exportStar(require("./animationLog"), exports);
__exportStar(require("./audioLog"), exports);
__exportStar(require("./dayReview"), exports);
__exportStar(require("./impulseLog"), exports);
__exportStar(require("./messageLog"), exports);
__exportStar(require("./questionsLog"), exports);
__exportStar(require("./showTourLog"), exports);
__exportStar(require("./strategiesLog"), exports);
__exportStar(require("./whatsappMessageLog"), exports);
__exportStar(require("./utils/guards"), exports);
exports.logSchemas = {
    audio: audioLog_1.audioLogSchema,
    animation: animationLog_1.animationLogSchema,
    impulse: impulseLog_1.impulseLogSchema,
    message: messageLog_1.messageLogSchema,
    question: questionsLog_1.questionsLogSchema,
    strategies: strategiesLog_1.strategiesLogSchema,
    actionRecap: actionRecap_1.actionRecapLogSchema,
    showTour: showTourLog_1.showTourLogSchema,
    dayReview: dayReview_1.dayReviewLogSchema,
    whatsappMessage: whatsappMessageLog_1.whatsappMessageLogSchema,
};
exports.logSchema = yup.lazy((value) => {
    if (!value)
        return yup.mixed().required();
    if (typeof value.type === 'string' && value.type in exports.logSchemas) {
        return exports.logSchemas[value.type];
    }
    return yup.object({
        type: yup
            .mixed()
            .oneOf(Object.keys(exports.logSchemas))
            .required(),
    });
});
