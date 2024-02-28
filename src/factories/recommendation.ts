import * as Factory from 'factory.ts';
import { RecommendationValue } from '../schema';
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
    property: 'impulse',
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
    routineExplanation: 'Choose a time of day to review',
    tacticIds: [],
    tacticsById: {},
    patternIds: [],
    recommenderName: 'Michael',
    recommenderUid: 'abc123',
    property: 'routine',
    ordinal: 0,
    appliedAt: null,
    dismissedAt: null,
  });

export const makeNewRoutineRecommendationFactory = (
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
    },
    recommenderName: 'Michael',
    recommenderUid: 'abc123',
    ordinal: 0,
    appliedAt: null,
    dismissedAt: null,
  });
