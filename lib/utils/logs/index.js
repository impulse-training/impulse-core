"use strict";
// We can probably structure this better, for example, by setting up converters on our documents to
// wrap them in a class that has a toGptInput method. We actually used to use converters, but it was
Object.defineProperty(exports, "__esModule", { value: true });
exports.logGptPayload = void 0;
const lodash_1 = require("lodash");
const SEPARATOR = '|';
// half-hearted, and added complexity without much benefit. We should revisit this.
function logGptPayload(log) {
    var _a;
    switch (log.type) {
        case 'impulse':
            return [
                {
                    role: 'user',
                    content: `I'm facing an ${log.issueName} impulse right now (craving or urge)`,
                },
            ];
        case 'message':
            return [
                {
                    role: log.isGptSender ? 'assistant' : 'user',
                    content: log.text,
                },
            ];
        case 'questions':
            return (0, lodash_1.compact)((0, lodash_1.flatMap)(log.questionsById, (question, questionId) => {
                var _a;
                const prompt = question.prompt;
                const userAnswer = (_a = log.questionData) === null || _a === void 0 ? void 0 : _a[questionId];
                const goalText = (userAnswer === null || userAnswer === void 0 ? void 0 : userAnswer.setbackThreshold)
                    ? ` (Reminder: your goal is ${userAnswer.setbackThreshold} or less)`
                    : '';
                if (!userAnswer)
                    return null;
                return [
                    {
                        role: 'assistant',
                        content: prompt + goalText,
                    },
                    {
                        role: 'user',
                        content: userAnswer.stringValue,
                    },
                ];
            }));
        case 'tactics':
            const suggestedTactics = (0, lodash_1.map)(log.tacticsById, tactic => tactic.prompt).join(SEPARATOR);
            const assistantMessage = {
                role: 'assistant',
                content: `SUGGESTED ACTIONS: ${suggestedTactics}`,
            };
            const userMessage = ((_a = log.completedTacticIds) === null || _a === void 0 ? void 0 : _a.length)
                ? {
                    role: 'user',
                    content: `I'VE COMPLETED: ${(0, lodash_1.map)(log.completedTacticIds, id => log.tacticsById[id].prompt).join(SEPARATOR)}`,
                }
                : null;
            return (0, lodash_1.compact)([assistantMessage, userMessage]);
        default:
            if (log.text)
                return [
                    {
                        role: 'user',
                        content: log.text,
                    },
                ];
            return null;
    }
}
exports.logGptPayload = logGptPayload;
