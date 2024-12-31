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
const call_1 = require("./call");
const gameplan_1 = require("./gameplan");
const gpt_1 = require("./gpt");
const showTour_1 = require("./showTour");
const toolCall_1 = require("./toolCall");
const user_1 = require("./user");
const whatsappMessage_1 = require("./whatsappMessage");
__exportStar(require("./gameplan"), exports);
__exportStar(require("./gpt"), exports);
__exportStar(require("./showTour"), exports);
__exportStar(require("./toolCall"), exports);
__exportStar(require("./user"), exports);
__exportStar(require("./whatsappMessage"), exports);
// Utils
__exportStar(require("./utils/behaviorData"), exports);
__exportStar(require("./utils/emotionData"), exports);
__exportStar(require("./utils/tacticData"), exports);
exports.logSchemas = {
    gameplan: gameplan_1.gameplanLogSchema,
    call: call_1.callLogSchema,
    toolCall: toolCall_1.toolCallLogSchema,
    showTour: showTour_1.showTourLogSchema,
    user: user_1.userLogSchema,
    gpt: gpt_1.gptLogSchema,
    whatsappMessage: whatsappMessage_1.whatsappMessageLogSchema,
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
