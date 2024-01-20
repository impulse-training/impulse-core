import * as Factory from 'factory.ts';
import { MessageValue } from '../schema';
import { FakeTimestamp } from '../utils/FakeTimestamp';
export declare const makeMessageFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<MessageValue, keyof MessageValue>;
