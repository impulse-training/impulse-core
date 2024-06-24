import * as Factory from 'factory.ts';
import { TacticValue } from '../schema';
import { TimestampLike } from '../utils/firestore/TimestampLike';
export declare const makeTacticFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<TacticValue, "createdAt" | "updatedAt" | "profileId" | "type" | "setbackThreshold" | "prompt" | "ordinal" | "recommendedForIssueIds" | "recommendedForIssueOrdinals" | "pastTenseTitle" | "commentCount" | "description" | "debriefAfterMinutes" | "image" | "backgroundColor" | "likesCount" | "timerSeconds" | "isSuggested">;
