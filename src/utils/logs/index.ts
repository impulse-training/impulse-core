// We can probably structure this better, for example, by setting up converters on our documents to
// wrap them in a class that has a toGptInput method. We actually used to use converters, but it was

import { compact, flatMap, map } from 'lodash';
import { LogValue } from '../../schema';

const SEPARATOR = '|';

// half-hearted, and added complexity without much benefit. We should revisit this.
export function logGptPayload(log: LogValue) {
  switch (log.type) {
    case 'message':
      return [
        {
          role: log.isGptSender ? 'assistant' : 'user',
          content: log.text,
        },
      ];
    case 'questions':
      return flatMap(log.questionsById, (question, questionId) => [
        {
          role: 'assistant',
          content: question.prompt,
        },
        {
          role: 'user',
          content: log.questionData?.[questionId].stringValue,
        },
      ]);
    case 'strategies':
      const suggestedStrategies = map(
        log.strategiesById,
        strategy => strategy.prompt
      ).join(SEPARATOR);
      const assistantMessage = {
        role: 'assistant',
        content: `SUGGESTED ACTIONS: ${suggestedStrategies}`,
      };
      const userMessage = log.completedTacticIds?.length
        ? {
            role: 'user',
            content: `I'VE COMPLETED: ${map(
              log.completedTacticIds,
              id => log.strategiesById[id].prompt
            ).join(SEPARATOR)}`,
          }
        : null;
      return compact([assistantMessage, userMessage]);
    default:
      return null;
  }
}
