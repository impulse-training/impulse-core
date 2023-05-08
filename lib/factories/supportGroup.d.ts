import * as Factory from 'factory.ts';
import { SupportGroupValue } from '../schema';
import { FakeTimestamp } from '../utils/FakeTimestamp';
export declare const makeSupportGroupFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<SupportGroupValue, keyof SupportGroupValue>;
