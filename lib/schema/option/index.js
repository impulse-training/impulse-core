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
exports.optionText = exports.optionMatches = exports.optionSchema = exports.optionSchemas = void 0;
const yup = __importStar(require("yup"));
const multipleChoice_1 = require("./multipleChoice");
const numeric_1 = require("./numeric");
__exportStar(require("./multipleChoice"), exports);
__exportStar(require("./numeric"), exports);
exports.optionSchemas = {
    'question-time': numeric_1.timeOptionSchema,
    'question-counter': numeric_1.counterOptionSchema,
    'question-multiple-choice': multipleChoice_1.multipleChoiceOptionSchema,
};
exports.optionSchema = yup.lazy(value => {
    if (!value)
        return yup.mixed().required();
    if (typeof value.type === 'string' && value.type in exports.optionSchemas) {
        return exports.optionSchemas[value.type];
    }
    return yup.object({
        type: yup
            .mixed()
            .oneOf(Object.keys(exports.optionSchemas))
            .required(),
    });
});
function optionMatches(option, data) {
    if ((0, multipleChoice_1.optionIsMultipleChoiceOption)(option)) {
        return option.value === data.value;
    }
    if (option.greaterThan != null) {
        return typeof data.value === 'number' && data.value > option.greaterThan;
    }
    if (option.lessThanOrEqualTo != null) {
        return (typeof data.value === 'number' && data.value <= option.lessThanOrEqualTo);
    }
}
exports.optionMatches = optionMatches;
function optionText(option) {
    if ((0, numeric_1.optionIsTimeOption)(option) || (0, numeric_1.optionIsCounterOption)(option)) {
        return (0, numeric_1.numericOptionText)(option);
    }
    if ((0, multipleChoice_1.optionIsMultipleChoiceOption)(option)) {
        return option.value;
    }
    return '';
}
exports.optionText = optionText;
