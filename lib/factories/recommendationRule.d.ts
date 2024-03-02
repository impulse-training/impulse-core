import * as Factory from 'factory.ts';
import { RecommendationRuleValue } from '../schema';
import { TimestampLike } from '../utils/TimestampLike';
export declare const makeImpulseRecommendationRuleFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<RecommendationRuleValue, "createdAt" | "updatedAt" | "uid" | "ordinal" | "type" | "recommendation" | "forIssueIds" | "issueNames" | "issueNamesSummary" | "recommendationSummary">;
