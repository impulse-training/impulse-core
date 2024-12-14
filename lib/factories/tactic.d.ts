import * as Factory from 'factory.ts';
import { TacticValue } from '../schema';
import { TimestampLike } from '../utils/firestore/TimestampLike';
export declare const makeTacticFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<TacticValue, "createdAt" | "updatedAt" | "ordinal" | "setbackThreshold" | "type" | "uid" | "sourceFile" | "sharedWithIssueIds" | "recommendedForIssueIds" | "recommendedForIssueOrdinals" | "prompt" | "isShared" | "description" | "pastTenseTitle" | "debriefAfterMinutes" | "image" | "backgroundColor" | "likesCount" | "timerSeconds" | "isSuggested">;
