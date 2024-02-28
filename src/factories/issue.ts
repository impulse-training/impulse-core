import * as Factory from 'factory.ts';
import { IssueValue } from '../schema';
import { TimestampLike } from '../utils/TimestampLike';

export const makeIssueFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<IssueValue>({
    name: 'YouTube',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    synonyms: ['Videos'],
    unit: 'time',
    parentIds: [],
    parentNames: [
      'Behavioral pattern',
      'Addiction',
      'Process addiction',
      'YouTube',
    ],
    impulse: {
      llmPrompt:
        'Please suggest tactics for overcoming an impulse to watch youtube',
      suggestedTacticIds: [],
    },
    impulseDebrief: {
      llmPrompt:
        'Please suggest tactics after overcoming an impulse to watch youtube',
      suggestedTacticIds: [],
    },
  });
