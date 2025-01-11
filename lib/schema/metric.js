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
exports.metricSchema = exports.metricAttributeSchema = exports.MetricIcons = void 0;
const yup = __importStar(require("yup"));
var MetricIcons;
(function (MetricIcons) {
    MetricIcons["Happy"] = "happy";
    MetricIcons["Sad"] = "sad";
    MetricIcons["Calm"] = "calm";
    MetricIcons["Anxious"] = "anxious";
    MetricIcons["Excited"] = "excited";
    MetricIcons["Bored"] = "bored";
    MetricIcons["Grateful"] = "grateful";
    MetricIcons["Resentful"] = "resentful";
    MetricIcons["Confident"] = "confident";
    MetricIcons["Unsure"] = "unsure";
    MetricIcons["Energetic"] = "energetic";
    MetricIcons["Tired"] = "tired";
    MetricIcons["Hopeful"] = "hopeful";
    MetricIcons["Hopeless"] = "hopeless";
    MetricIcons["Relaxed"] = "relaxed";
    MetricIcons["Stressed"] = "stressed";
    MetricIcons["Connected"] = "connected";
    MetricIcons["Lonely"] = "lonely";
    MetricIcons["Focused"] = "focused";
    MetricIcons["Distracted"] = "distracted";
})(MetricIcons = exports.MetricIcons || (exports.MetricIcons = {}));
exports.metricAttributeSchema = yup.object({
    key: yup.string().required('is required'),
    name: yup.string().required('is required'),
    icon: yup
        .mixed()
        .oneOf(Object.values(MetricIcons), 'Invalid icon')
        .required(),
});
exports.metricSchema = yup.object({
    positiveAttribute: exports.metricAttributeSchema.required(),
    negativeAttribute: exports.metricAttributeSchema.optional().default(undefined),
    isRecommendedForExperiments: yup.boolean(),
    overallDescription: yup.string(),
});
