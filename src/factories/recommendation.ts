import * as Factory from 'factory.ts';
import { NewGameplanRecommendationValue, RecommendationValue } from '../schema';
import { FakeTimestamp } from '../utils/FakeTimestamp';

export const makeRecommendationFactory = (
  TimestampKlass: typeof FakeTimestamp
) =>
  Factory.makeFactory<RecommendationValue>({
    uid: Factory.each(i => i.toString()),
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    title: "Let's start with a distraction",
    explanation: 'You should try this!',
    tacticIds: [],
    tacticsById: {},
    recommenderName: 'Michael',
    recommenderUid: 'abc123',
    ordinal: 0,
    appliedAt: null,
    dismissedAt: null,
  });

export const makeExistingGameplanRecommendationFactory = (
  TimestampKlass: typeof FakeTimestamp
) =>
  Factory.makeFactory<RecommendationValue>({
    uid: Factory.each(i => i.toString()),
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    title: "Let's start with a distraction",
    explanation: 'You should try this!',
    gameplanExplanation: 'Choose a time of day to review',
    tacticIds: [],
    tacticsById: {},
    gameplanId: 'abc123',
    recommenderName: 'Michael',
    recommenderUid: 'abc123',
    ordinal: 0,
    appliedAt: null,
    dismissedAt: null,
  });

export const makeNewGameplanRecommendationFactory = (
  TimestampKlass: typeof FakeTimestamp
) =>
  Factory.makeFactory<NewGameplanRecommendationValue>({
    uid: Factory.each(i => i.toString()),
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    title: "Let's start with a distraction",
    explanation: 'You should try this!',
    tacticIds: [],
    tacticsById: {},
    gameplan: {
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
    ordinal: 0,
    appliedAt: null,
    dismissedAt: null,
  });
