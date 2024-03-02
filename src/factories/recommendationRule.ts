import * as Factory from 'factory.ts';
import { RecommendationRuleValue } from '../schema';
import { TimestampLike } from '../utils/TimestampLike';
import {
  makeImpulseDebriefRecommendationFactory,
  makeImpulseRecommendationFactory,
} from './recommendation';

export const makeImpulseRecommendationRuleFactory = (
  TimestampKlass: typeof TimestampLike
) =>
  Factory.makeFactory<RecommendationRuleValue>({
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    type: 'impulse',
    uid: Factory.each(i => `impulse-recommendation-rule-${i}`),
    recommendation: makeImpulseRecommendationFactory(TimestampKlass).build(),
    forIssueIds: [],
    ordinal: 0,
  });

export const makeImpulseDebriefRecommendationRuleFactory = (
  TimestampKlass: typeof TimestampLike
) =>
  Factory.makeFactory<RecommendationRuleValue>({
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    type: 'impulseDebrief',
    uid: Factory.each(i => `impulse-debrief-recommendation-rule-${i}`),
    recommendation:
      makeImpulseDebriefRecommendationFactory(TimestampKlass).build(),
    forIssueIds: [],
    ordinal: 0,
  });
