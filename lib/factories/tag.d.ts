import * as Factory from 'factory.ts';
import { TagValue } from '../schema';
import { FakeTimestamp } from '../utils/FakeTimestamp';
export declare const makeTagFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<TagValue, keyof TagValue>;
