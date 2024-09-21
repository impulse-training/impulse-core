import * as Factory from 'factory.ts';
import { TacticValue } from '../schema';
import { TimestampLike } from '../utils/firestore/TimestampLike';
export declare const makeTacticFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<TacticValue, "createdAt" | "updatedAt" | "profileId" | "recommendedForIssueIds" | "recommendedForIssueOrdinals" | "ordinal" | "prompt" | "description" | "type" | "pastTenseTitle" | "debriefAfterMinutes" | "image" | "backgroundColor" | "setbackThreshold" | "likesCount" | "timerSeconds" | "isSuggested">;
