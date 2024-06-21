import * as Factory from 'factory.ts';
import { DayValue } from '../schema';
import { TimestampLike } from '../utils';

export const makeDayFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<DayValue>({
    date: TimestampKlass.now(),
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    issueName: 'YouTube addiction',
    logsById: {},
    isProcessing: false,
  });
