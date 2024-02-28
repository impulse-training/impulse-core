import * as Factory from 'factory.ts';
import { RecommendationRuleValue } from '../schema';
import { TimestampLike } from '../utils/TimestampLike';

export const makeRecommendationRuleFactory = (
  TimestampKlass: typeof TimestampLike
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
      routineExplanation: 'Choose a time of day to review',
      tacticIds: [],
      tacticsById: {},
      patternIds: [],
      recommenderName: 'Michael',
      recommenderUid: 'abc123',
      property: 'impulseDebrief',
    },
    forIssueIds: [],
    ordinal: 0,
  });

export const makeNewRoutineRecommendationRuleFactory = (
  TimestampKlass: typeof TimestampLike
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
      tacticIds: [],
      tacticsById: {},
      property: 'routine',
      routine: {
        uid: 'abc',
        createdAt: TimestampKlass.now(),
        updatedAt: TimestampKlass.now(),
        hour: 8,
        minute: 0,
        timezone: 'America/Chihuahua',
        weekdays: [1, 2, 3, 4, 5],
        type: 'time',
        tacticIds: [],
        suggestedTacticIds: [],
        tacticsById: {},
      },
      recommenderName: 'Michael',
      recommenderUid: 'abc123',
    },
    forIssueIds: [],
    ordinal: 0,
  });
