import * as Factory from 'factory.ts';
import { PatternValue } from '../schema';
import { TimestampLike } from '../utils/firestore/TimestampLike';
export declare const makePatternFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<PatternValue, "profileId" | "name" | "ordinal" | ("createdAt" | "updatedAt" | "supportGroupIds" | "notification" | "measureTacticId" | "measureCallToAction" | "issueId" | "parentIssueIds" | "sendWeeklyReports") | "tacticsById">;
