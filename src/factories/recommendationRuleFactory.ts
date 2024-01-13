import * as Factory from 'factory.ts';
import { RecommendationRuleValue } from '../schema/recommendationRule';
import { FakeTimestamp } from '../utils/FakeTimestamp';

export const makeRecommendationRuleFactory = (
  TimestampKlass: typeof FakeTimestamp
) =>
  Factory.makeFactory<RecommendationRuleValue>({
    uid: Factory.each(i => i.toString()),
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    // For now, we need to specify recommendation properties manually, instead of deferring to the
    // existing factory. That's because we're not actually exporting factories here, we're exporting
    // 'builder' functions that take a timestamp class and return a factory. So we can't use the
    // factory here directly. It just means that when we update the recommendation factory, we also
    // need to update this factory... But at least typescript should keep us in check, more or less
    // :)
    recommendation: {
      title: "Let's start with a distraction",
      explanation: 'You should try this!',
      gameplanExplanation: 'Choose a time of day to review',
      tacticIds: [],
      tacticsById: {},
      gameplanId: 'abc123',
      recommenderName: 'Michael',
      recommenderUid: 'abc123',
    },
    forType: 'impulse',
    forIssueIds: [],
    ordinal: 0,
  });
