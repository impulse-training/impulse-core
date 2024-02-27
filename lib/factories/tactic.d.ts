import * as Factory from 'factory.ts';
import { TacticValue } from '../schema';
import { TimestampLike } from '../utils/TimestampLike';
export declare const makeTacticFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<TacticValue, "uid" | "updatedAt" | "createdAt" | "ordinal" | "title" | "isTemplate" | "type" | "sourceId" | "subtitle" | "description" | "image" | "backgroundColor" | "language" | "href" | "categoryIds" | "isShared" | "isResponseRequired" | "timerSeconds" | "isAvailableForRecommendation" | "numberOfLikes" | "isSuggested">;
