import * as Factory from 'factory.ts';
import { MessageValue } from '../schema';
import { TimestampLike } from '../utils/firestore/TimestampLike';
export declare const makeMessageFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<MessageValue, keyof MessageValue>;
