import * as Factory from 'factory.ts';
import { NewRoutineRecommendationValue, RecommendationValue } from '../schema';
import { TimestampLike } from '../utils/TimestampLike';

export const makeRecommendationFactory = (
  TimestampKlass: typeof TimestampLike
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

export const makeExistingRoutineRecommendationFactory = (
  TimestampKlass: typeof TimestampLike
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
    gameplanIds: [],
    recommenderName: 'Michael',
    recommenderUid: 'abc123',
    ordinal: 0,
    appliedAt: null,
    dismissedAt: null,
  });

export const makeNewRoutineRecommendationFactory = (
  TimestampKlass: typeof TimestampLike
) =>
  Factory.makeFactory<NewRoutineRecommendationValue>({
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
    },
    recommenderName: 'Michael',
    recommenderUid: 'abc123',
    ordinal: 0,
    appliedAt: null,
    dismissedAt: null,
  });
