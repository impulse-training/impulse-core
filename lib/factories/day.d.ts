import * as Factory from 'factory.ts';
import { DayValue } from '../schema';
import { TimestampLike } from '../utils';
export declare const makeDayFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<DayValue, "issueName" | "date" | "logsById" | "isProcessing" | ("createdAt" | "updatedAt")>;