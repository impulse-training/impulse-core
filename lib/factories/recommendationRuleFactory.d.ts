import * as Factory from 'factory.ts';
import { RecommendationRuleValue } from '../schema/recommendationRule';
import { FakeTimestamp } from '../utils/FakeTimestamp';
export declare const makeRecommendationRuleFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<RecommendationRuleValue, keyof RecommendationRuleValue>;
