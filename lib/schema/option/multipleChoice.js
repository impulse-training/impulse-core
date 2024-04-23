"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optionIsMultipleChoiceOption = exports.multipleChoiceOptionSchema = void 0;
const base_1 = require("./base");
exports.multipleChoiceOptionSchema = (0, base_1.optionValueBaseSchema)('question-multiple-choice');
function optionIsMultipleChoiceOption(option) {
    return option.type === 'question-multiple-choice';
}
exports.optionIsMultipleChoiceOption = optionIsMultipleChoiceOption;
