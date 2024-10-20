"use strict";
// We can probably structure this better, for example, by setting up converters on our documents to
// wrap them in a class that has a toGptInput method. We actually used to use converters, but it was
Object.defineProperty(exports, "__esModule", { value: true });
exports.logTextForGpt = void 0;
const lodash_1 = require("lodash");
const SEPARATOR = ',';
// Given a log, generate a text description that can be used as input to an LLM
function logTextForGpt(log) {
    let text = log.text + ' ';
    // Handle tactics that have been completed
    if (log.questionData) {
        const questionsDescription = (0, lodash_1.compact)((0, lodash_1.flatMap)(log.questionsById, (question, questionId) => {
            var _a;
            const prompt = question.prompt;
            const userAnswer = (_a = log.questionData) === null || _a === void 0 ? void 0 : _a[questionId];
            const goalText = (userAnswer === null || userAnswer === void 0 ? void 0 : userAnswer.setbackThreshold)
                ? ` (goal is ${userAnswer.setbackThreshold} or less)`
                : '';
            if (!userAnswer)
                return null;
            return [prompt + goalText, userAnswer.stringValue].join(': ');
        }));
        text += questionsDescription.join(SEPARATOR);
    }
    return text;
}
exports.logTextForGpt = logTextForGpt;
