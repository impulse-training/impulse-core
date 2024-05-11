import * as Factory from 'factory.ts';
import { sample } from 'lodash';
import { IssueValue, tacticColors } from '../schema';
import { TimestampLike } from '../utils/firestore/TimestampLike';

export const makeIssueFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<IssueValue>({
    name: 'YouTube',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    synonyms: ['Videos'],
    debriefTactic: {
      type: 'question-time',
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
  });
