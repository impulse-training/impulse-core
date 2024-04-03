import * as Factory from 'factory.ts';
import { sample } from 'lodash';
import { IssueValue, tacticColors } from '../schema';
import { TimestampLike } from '../utils/TimestampLike';

export const makeIssueFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<IssueValue>({
    name: 'YouTube',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    synonyms: ['Videos'],
    measureTactic: {
      type: 'measure-time',
      title: 'How long did you spend?',
      backgroundColor: sample(tacticColors)!,
    },
    parentIds: [],
    parentNames: [
      'Behavioral pattern',
      'Addiction',
      'Process addiction',
      'YouTube',
    ],
    impulseStrategies: [],
    scheduledStrategies: [],
    locationStrategies: [],
  });
