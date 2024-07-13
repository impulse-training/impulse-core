"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQuestions = void 0;
const lodash_1 = require("lodash");
function getQuestions(questionsById, category) {
    // First, filter the questions that have the category
    const questionsWithIds = (0, lodash_1.map)(questionsById, (question, id) => ({
        id,
        question,
    }));
    const questions = questionsWithIds.filter(({ question }) => { var _a; return (_a = question.categories) === null || _a === void 0 ? void 0 : _a.includes(category); });
    return (0, lodash_1.sortBy)(questions, ({ question }) => { var _a; return (_a = question.ordinals) === null || _a === void 0 ? void 0 : _a[category]; });
}
exports.getQuestions = getQuestions;
