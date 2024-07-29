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
        case 'message':
            return [
                {
                    role: log.isGptSender ? 'assistant' : 'user',
                    content: log.text,
                },
            ];
        case 'questions':
            return (0, lodash_1.flatMap)(log.questionsById, (question, questionId) => {
                var _a;
                return [
                    {
                        role: 'assistant',
                        content: question.prompt,
                    },
                    {
                        role: 'user',
                        content: (_a = log.questionData) === null || _a === void 0 ? void 0 : _a[questionId].stringValue,
                    },
                ];
            });
        case 'strategies':
            const suggestedStrategies = (0, lodash_1.map)(log.strategiesById, strategy => strategy.prompt).join(SEPARATOR);
            const assistantMessage = {
                role: 'assistant',
                content: `SUGGESTED ACTIONS: ${suggestedStrategies}`,
            };
            const userMessage = ((_a = log.completedTacticIds) === null || _a === void 0 ? void 0 : _a.length)
                ? {
                    role: 'user',
                    content: `I'VE COMPLETED: ${(0, lodash_1.map)(log.completedTacticIds, id => log.strategiesById[id].prompt).join(SEPARATOR)}`,
                }
                : null;
            return (0, lodash_1.compact)([assistantMessage, userMessage]);
        default:
            return null;
    }
}
exports.logGptPayload = logGptPayload;
