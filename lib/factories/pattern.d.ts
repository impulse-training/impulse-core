import * as Factory from 'factory.ts';
import { PatternValue } from '../schema';
import { TimestampLike } from '../utils/firestore/TimestampLike';
export declare const makePatternFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<PatternValue, "profileId" | "ordinal" | "tacticsById" | "name" | ("createdAt" | "updatedAt" | "supportGroupIds" | "notification" | "measureTacticId" | "issueId" | "parentIssueIds" | "sendWeeklyReports")>;
