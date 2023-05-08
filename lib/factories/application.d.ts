import * as Factory from 'factory.ts';
import { ApplicationValue } from '../schema';
import { FakeTimestamp } from '../utils/FakeTimestamp';
export declare const makeApplicationFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<ApplicationValue, keyof ApplicationValue>;
