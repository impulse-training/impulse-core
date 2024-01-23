import * as Factory from 'factory.ts';
import { LogSummaryValue } from '../schema';
import { TimestampLike } from '../utils/TimestampLike';
export declare const makeLogSummaryFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<LogSummaryValue, keyof LogSummaryValue>;
