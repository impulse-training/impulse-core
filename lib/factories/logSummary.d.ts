import * as Factory from 'factory.ts';
import { LogSummaryValue } from '../schema';
import { FakeTimestamp } from '../utils/FakeTimestamp';
export declare const makeLogSummaryFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<LogSummaryValue, keyof LogSummaryValue>;
