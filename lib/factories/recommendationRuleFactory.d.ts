import * as Factory from 'factory.ts';
import { RecommendationRuleValue } from '../schema';
import { TimestampLike } from '../utils/TimestampLike';
export declare const makeRecommendationRuleFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<RecommendationRuleValue, "createdAt" | "updatedAt" | "uid" | "ordinal" | "recommendation" | "forIssueIds" | ("issueNames" | "issueNamesSummary" | "recommendationSummary")>;
export declare const makeNewRoutineRecommendationRuleFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<RecommendationRuleValue, "createdAt" | "updatedAt" | "uid" | "ordinal" | "recommendation" | "forIssueIds" | ("issueNames" | "issueNamesSummary" | "recommendationSummary")>;
