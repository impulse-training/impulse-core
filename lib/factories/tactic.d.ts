import * as Factory from 'factory.ts';
import { TacticValue } from '../schema';
import { TimestampLike } from '../utils/firestore/TimestampLike';
export declare const makeTacticFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<TacticValue, "profileId" | "recommendedForIssueIds" | "recommendedForIssueOrdinals" | "ordinal" | "prompt" | "description" | "type" | "createdAt" | "updatedAt" | "pastTenseTitle" | "debriefAfterMinutes" | "image" | "backgroundColor" | "setbackThreshold" | "likesCount" | "timerSeconds" | "isSuggested">;
