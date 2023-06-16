import * as Factory from 'factory.ts';
import { FakeTimestamp } from '../utils/FakeTimestamp';
export declare const makeLocationReminderFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<LocationReminderValue, string | number | symbol>;
export declare const makeTimeReminderFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<TimeReminderValue, string | number | symbol>;
