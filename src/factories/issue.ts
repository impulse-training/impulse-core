import * as Factory from 'factory.ts';
import { IssueValue } from '../schema';
import { FakeTimestamp } from '../utils/FakeTimestamp';

export const makeIssueFactory = (TimestampKlass: typeof FakeTimestamp) =>
  Factory.makeFactory<IssueValue>({
    name: 'YouTube',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    synonyms: ['Videos'],
    unit: 'time',
    impulse: {
      llmPrompt:
        'Please suggest tactics for overcoming an impulse to watch youtube',
      suggestedTacticIds: [],
    },
    success: {
      llmPrompt:
        'Please suggest tactics after overcoming an impulse to watch youtube',
      suggestedTacticIds: [],
    },
    setback: {
      llmPrompt: 'Please suggest tactics after binging on youtube',
      suggestedTacticIds: [],
    },
  });
