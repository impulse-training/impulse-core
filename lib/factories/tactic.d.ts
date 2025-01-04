import * as Factory from 'factory.ts';
import { TacticValue } from '../schema';
import { TimestampLike } from '../utils/firestore/TimestampLike';
export declare const makeTacticFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<TacticValue, "createdAt" | "updatedAt" | "sourceFile" | "sharedWithIssueIds" | "uid" | "recommendedForIssueIds" | "recommendedForIssueOrdinals" | "prompt" | "isShared" | "description" | "type" | "pastTenseTitle" | "debriefAfterMinutes" | "image" | "backgroundColor" | "likesCount" | "timerSeconds" | "isSuggested">;
