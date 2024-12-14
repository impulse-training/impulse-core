import * as Factory from 'factory.ts';
import { DayValue } from '../schema';
import { TimestampLike } from '../utils';

export const makeDayFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<DayValue>({
    date: TimestampKlass.now(),
    issueName: 'YouTube addiction',
    summary: null,
    logsById: {},
    behaviorsById: {},
  });
