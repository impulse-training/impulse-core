import * as Factory from 'factory.ts';
import { RecommendationRuleValue } from '../schema/recommendationRule';
import { TimestampLike } from '../utils/TimestampLike';
export declare const makeRecommendationRuleFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<RecommendationRuleValue, keyof RecommendationRuleValue>;
export declare const makeNewRoutineRecommendationRuleFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<RecommendationRuleValue, keyof RecommendationRuleValue>;
