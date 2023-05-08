import * as Factory from 'factory.ts';
import { LocationValue } from '../schema';
import { FakeTimestamp } from '../utils/FakeTimestamp';
export declare const makeLocationFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<LocationValue, keyof LocationValue>;
