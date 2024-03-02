import * as Factory from 'factory.ts';
import {
  ImpulseDebriefRecommendationValue,
  ImpulseRecommendationValue,
  LocationRecommendationValue,
  TimeRecommendationValue,
} from '../schema';
import { TimestampLike } from '../utils/TimestampLike';

export const makeImpulseRecommendationFactory = (
  TimestampKlass: typeof TimestampLike
) =>
  Factory.makeFactory<ImpulseRecommendationValue>({
    uid: Factory.each(i => i.toString()),
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    title: "Let's start with a distraction",
    tacticIds: [],
    tacticsById: {},
    recommenderName: 'Michael',
    recommenderUid: 'abc123',
    ordinal: 0,
    appliedAt: null,
    dismissedAt: null,
    patternIds: [],
    type: 'impulse',
  });

export const makeImpulseDebriefRecommendationFactory = (
  TimestampKlass: typeof TimestampLike
) =>
  Factory.makeFactory<ImpulseDebriefRecommendationValue>({
    uid: Factory.each(i => i.toString()),
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    title: "Let's start with a distraction",
    tacticIds: [],
    tacticsById: {},
    recommenderName: 'Michael',
    recommenderUid: 'abc123',
    ordinal: 0,
    appliedAt: null,
    dismissedAt: null,
    type: 'impulseDebrief',
    patternIds: [],
  });

export const makeTimeRecommendationFactory = (
  TimestampKlass: typeof TimestampLike
) =>
  Factory.makeFactory<TimeRecommendationValue>({
    uid: Factory.each(i => i.toString()),
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    title: "Let's start with a distraction",
    tacticIds: [],
    tacticsById: {},
    recommenderName: 'Michael',
    recommenderUid: 'abc123',
    ordinal: 0,
    appliedAt: null,
    dismissedAt: null,
    type: 'time',
    time: {
      hour: 0,
      minute: 0,
      weekdays: [],
    },
  });

export const makeLocationRecommendationFactory = (
  TimestampKlass: typeof TimestampLike
) =>
  Factory.makeFactory<LocationRecommendationValue>({
    uid: Factory.each(i => i.toString()),
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    title: "Let's start with a distraction",
    tacticIds: [],
    tacticsById: {},
    recommenderName: 'Michael',
    recommenderUid: 'abc123',
    ordinal: 0,
    appliedAt: null,
    dismissedAt: null,
    type: 'location',
    locationKey: 'home',
  });
