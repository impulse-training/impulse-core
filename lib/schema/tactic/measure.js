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
exports.measureTacticSchema = exports.measureTacticSchemas = exports.measureTacticSubsetSchema = exports.measureTacticSubsetSchemas = exports.measureCounterTacticSchema = exports.measureTimeTacticSchema = exports.measureSliderTacticSchema = void 0;
const yup = __importStar(require("yup"));
const base_1 = require("./base");
exports.measureSliderTacticSchema = (0, base_1.tacticValueBaseSchema)('measure-slider').shape({
    lowEmoji: yup.string().notRequired(),
    highEmoji: yup.string().notRequired(),
});
exports.measureTimeTacticSchema = (0, base_1.tacticValueBaseSchema)('measure-time');
exports.measureCounterTacticSchema = (0, base_1.tacticValueBaseSchema)('measure-counter');
exports.measureTacticSubsetSchemas = {
    'measure-time': exports.measureTimeTacticSchema,
    'measure-counter': exports.measureCounterTacticSchema,
};
exports.measureTacticSubsetSchema = yup.lazy(value => {
    if (!value)
        return yup.mixed().required();
    if (typeof value.type === 'string' &&
        value.type in exports.measureTacticSubsetSchemas) {
        return exports.measureTacticSubsetSchemas[value.type];
    }
    return yup.object({
        type: yup
            .mixed()
            .oneOf(Object.keys(exports.measureTacticSubsetSchemas))
            .required(),
    });
});
// We also have this subset of the measure tactic schema that we use in the pattern schema - it's
// either a measure-time or measure-counter tactic
exports.measureTacticSchemas = {
    'measure-time': exports.measureTimeTacticSchema,
    'measure-slider': exports.measureSliderTacticSchema,
    'measure-counter': exports.measureCounterTacticSchema,
};
exports.measureTacticSchema = yup.lazy(value => {
    if (!value)
        return yup.mixed().required();
    if (typeof value.type === 'string' && value.type in exports.measureTacticSchemas) {
        return exports.measureTacticSchemas[value.type];
    }
    return yup.object({
        type: yup
            .mixed()
            .oneOf(Object.keys(exports.measureTacticSchemas))
            .required(),
    });
});
