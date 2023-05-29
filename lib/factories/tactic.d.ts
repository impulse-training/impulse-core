import * as Factory from 'factory.ts';
import { TacticValue } from '../schema';
import { FakeTimestamp } from '../utils/FakeTimestamp';
export declare const makeTacticFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<TacticValue, "type" | "createdAt" | "updatedAt" | "uid" | "ordinal" | "isTemplate" | "originalId" | "title" | "description" | "image" | "language" | "href" | "isBooster" | "tagsSummary" | "featuredCategory" | "showResponseBox" | "deviceTimeRemindersDigest" | "deviceLocationRemindersDigest" | "dataDigest" | "allPatterns" | "checkInEntries">;
