// We can probably structure this better, for example, by setting up converters on our documents to
// wrap them in a class that has a toGptInput method. We actually used to use converters, but it was

import { compact, flatMap, map } from 'lodash';
import OpenAI from 'openai';
import { LogValue } from '../../schema';

const SEPARATOR = '|';

type Message = OpenAI.Chat.Completions.ChatCompletionMessageParam;

// half-hearted, and added complexity without much benefit. We should revisit this.
export function logGptPayload(log: LogValue): Message[] | null {
  switch (log.type) {
    case 'message':
      return [
        {
          role: log.isGptSender ? 'assistant' : 'user',
          content: log.text,
        },
      ];
    case 'questions':
      return compact(
        flatMap(log.questionsById, (question, questionId) => {
          const prompt = question.prompt;
          const userAnswer = log.questionData?.[questionId];
          const goalText = userAnswer?.setbackThreshold
            ? ` (Reminder: your goal is ${userAnswer.setbackThreshold} or less)`
            : '';
          if (!userAnswer) return null;
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
        })
      );
    case 'strategies':
      const suggestedStrategies = map(
        log.strategiesById,
        strategy => strategy.prompt
      ).join(SEPARATOR);
      const assistantMessage: Message = {
        role: 'assistant',
        content: `SUGGESTED ACTIONS: ${suggestedStrategies}`,
      };
      const userMessage: Message | null = log.completedTacticIds?.length
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
