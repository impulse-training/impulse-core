"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionMultipleChoiceSchema = void 0;
const array_1 = require("../utils/array");
const base_1 = require("./base");
exports.questionMultipleChoiceSchema = (0, base_1.questionBaseSchema)('multipleChoice').shape({
    options: array_1.optionalStringArray,
});
