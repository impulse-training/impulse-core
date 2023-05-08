import * as Factory from 'factory.ts';
import { PatternValue } from '../schema';
import { FakeTimestamp } from '../utils/FakeTimestamp';
export declare const makePatternFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<PatternValue, keyof PatternValue>;
