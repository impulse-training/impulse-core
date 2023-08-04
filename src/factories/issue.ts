import * as Factory from 'factory.ts';
import { IssueValue } from '../schema';
import { FakeTimestamp } from '../utils/FakeTimestamp';

export const makeIssueFactory = (TimestampKlass: typeof FakeTimestamp) =>
  Factory.makeFactory<IssueValue>({
    name: 'YouTube',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    synonyms: ['Videos'],
  });
