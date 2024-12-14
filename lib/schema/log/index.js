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
const dayReview_1 = require("./dayReview");
const regular_1 = require("./regular");
const showTourLog_1 = require("./showTourLog");
const whatsappMessageLog_1 = require("./whatsappMessageLog");
__exportStar(require("./dayReview"), exports);
__exportStar(require("./regular"), exports);
__exportStar(require("./showTourLog"), exports);
__exportStar(require("./tacticsLog"), exports);
__exportStar(require("./whatsappMessageLog"), exports);
// Utils
__exportStar(require("./utils/behaviorData"), exports);
__exportStar(require("./utils/guards"), exports);
exports.logSchemas = {
    call: call_1.callLogSchema,
    regular: regular_1.regularLogSchema,
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
