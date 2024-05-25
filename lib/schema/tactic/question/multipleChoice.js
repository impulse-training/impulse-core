"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionMultipleChoiceTacticSchema = void 0;
const array_1 = require("../../utils/array");
const base_1 = require("./base");
exports.questionMultipleChoiceTacticSchema = (0, base_1.questionTacticValueBaseSchema)('question-multiple-choice').shape({
    options: array_1.requiredStringArray,
});
