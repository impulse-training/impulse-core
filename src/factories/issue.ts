import * as Factory from 'factory.ts';
import { IssueValue } from '../schema';
import { TimestampLike } from '../utils/firestore/TimestampLike';

export const makeIssueFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<IssueValue>({
    name: 'YouTube',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    synonyms: ['Videos'],
    ordinal: 0,
    questionIds: [],
    parentIds: [],
    parentNames: [
      'Behavioral pattern',
      'Addiction',
      'Process addiction',
      'YouTube',
    ],
  });
