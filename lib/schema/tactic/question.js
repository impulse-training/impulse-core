"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionTacticSchema = void 0;
const question_1 = require("../question");
const base_1 = require("./base");
exports.questionTacticSchema = (0, base_1.tacticValueBaseSchema)('question').shape({
    question: question_1.questionSchema,
});
