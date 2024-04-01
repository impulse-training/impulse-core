import * as Factory from 'factory.ts';
import { StrategyValue } from '../schema';
import { TimestampLike } from '../utils/TimestampLike';

export const makeStrategyFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<StrategyValue>({
    type: 'impulse',
    title: 'Default',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    forIssueIds: [],
    issueNamesSummary: '',
    issueNames: {},
    tacticIds: [],
    tacticsById: {},
  });
