"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionMultipleChoiceTacticSchema = void 0;
const choice_1 = require("../../choice");
const objectOf_1 = require("../../utils/objectOf");
const base_1 = require("../base");
exports.questionMultipleChoiceTacticSchema = (0, base_1.tacticValueBaseSchema)('question-multiple-choice').shape({
    choicesById: (0, objectOf_1.optionalObjectOf)(choice_1.choiceSchema.required()),
});
