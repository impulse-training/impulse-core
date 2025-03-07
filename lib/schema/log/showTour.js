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
exports.showTourLogSchema = exports.tourStepSchema = exports.TourIcon = void 0;
const yup = __importStar(require("yup"));
const timestamp_1 = require("../utils/timestamp");
const base_1 = require("./base");
var TourIcon;
(function (TourIcon) {
    TourIcon["DockBehaviorsButton"] = "dockBehaviorsButton";
    TourIcon["DockMetricsButton"] = "dockMetricsButton";
})(TourIcon = exports.TourIcon || (exports.TourIcon = {}));
exports.tourStepSchema = yup.object({
    elementRefName: yup.string().required(),
    title: yup.string().required(),
    description: yup.string().required(),
    confirmButtonLabel: yup.string().required().default('Ok'),
    nextOnImpulseButtonPress: yup.boolean(),
    borderRadius: yup.number(),
    innerPadding: yup.number(),
});
exports.showTourLogSchema = (0, base_1.logBaseSchema)('showTour').shape({
    role: yup.mixed().oneOf(['assistant']).required(),
    steps: yup.array().of(exports.tourStepSchema).required(),
    firstNavigateToRoute: yup.string(),
    startButtonLabel: yup.string(),
    animationFileName: yup.string(),
    completedAt: timestamp_1.optionalTimestampSchema,
    icon: yup
        .mixed()
        .oneOf(Object.values(TourIcon), 'Invalid icon')
        .optional(),
});
