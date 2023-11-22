import * as Factory from 'factory.ts';
import { TacticValue } from '../schema';
import { FakeTimestamp } from '../utils/FakeTimestamp';
export declare const makeTacticFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<TacticValue, "type" | "createdAt" | "updatedAt" | "uid" | "isTemplate" | "title" | "isSuggested" | "description" | "image" | "backgroundColor" | "language" | "href" | "categoryIds" | "isShared" | "isResponseRequired">;
