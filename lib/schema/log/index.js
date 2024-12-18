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
const callLog_1 = require("./callLog");
const gptLog_1 = require("./gptLog");
const impulseLog_1 = require("./impulseLog");
const showTourLog_1 = require("./showTourLog");
const toolCallLog_1 = require("./toolCallLog");
const userLog_1 = require("./userLog");
const whatsappMessageLog_1 = require("./whatsappMessageLog");
__exportStar(require("./gptLog"), exports);
__exportStar(require("./impulseLog"), exports);
__exportStar(require("./showTourLog"), exports);
__exportStar(require("./toolCallLog"), exports);
__exportStar(require("./userLog"), exports);
__exportStar(require("./whatsappMessageLog"), exports);
// Utils
__exportStar(require("./utils/behaviorData"), exports);
__exportStar(require("./utils/emotionData"), exports);
__exportStar(require("./utils/tacticData"), exports);
exports.logSchemas = {
    impulseLog: impulseLog_1.impulseLogSchema,
    callLog: callLog_1.callLogSchema,
    toolCallLog: toolCallLog_1.toolCallLogSchema,
    showTourLog: showTourLog_1.showTourLogSchema,
    userLog: userLog_1.userLogSchema,
    gptLog: gptLog_1.gptLogSchema,
    whatsappMessageLog: whatsappMessageLog_1.whatsappMessageLogSchema,
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
