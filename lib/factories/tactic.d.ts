import * as Factory from 'factory.ts';
import { TacticValue } from '../schema';
import { FakeTimestamp } from '../utils/FakeTimestamp';
export declare const makeTacticFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<TacticValue, "type" | "createdAt" | "updatedAt" | "uid" | "ordinal" | "isTemplate" | "title" | "originalId" | "description" | "image" | "language" | "href" | "templateFor" | "suggestedFor" | "isBooster" | "tagsSummary" | "categoryIds" | "isShared" | "showResponseBox" | "deviceTimeRemindersDigest" | "deviceLocationRemindersDigest" | "dataDigest" | "checkInEntries">;
