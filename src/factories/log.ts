import * as Factory from 'factory.ts';
import {
  ImpulseLogValue,
  LocationLogValue,
  MotionLogValue,
  RecapLogValue,
  TimeLogValue,
} from '../schema/logs';
import { TimestampLike } from '../utils/TimestampLike';
import { makeGameplanFactory } from './gameplan';

const strategy = {
  main: {
    tacticIds: [],
    suggestedTacticIds: [],
  },
  impulseRecap: {
    tacticIds: [],
    suggestedTacticIds: [],
  },
};

export const makeImpulseFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<ImpulseLogValue>({
    uid: Factory.each(i => i.toString()),
    type: 'impulse',
    setAsActiveImpulse: true,
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    startTime: TimestampKlass.now(),
    timezone: 'America/Botota',
    isDisplayable: true,
    debriefNotes: '',
    patternId: 'abc123',
    location: {},
    locationIsFetching: false,
    patternsById: {},
    tacticsById: {},
    strategy,
    gameplan: makeGameplanFactory(TimestampKlass).build(),
    seenTacticIds: [],
    completedTacticIds: [],
  });

export const makeTimeLogFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<TimeLogValue>({
    uid: Factory.each(i => i.toString()),
    type: 'time',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    startTime: TimestampKlass.now(),
    timezone: 'America/Botota',
    isDisplayable: true,
    location: {},
    tacticsById: {},
    locationIsFetching: false,
    strategy,
    seenTacticIds: [],
    completedTacticIds: [],
  });

export const makeRecapLogFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<RecapLogValue>({
    uid: Factory.each(i => i.toString()),
    type: 'recap',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    startTime: TimestampKlass.now(),
    timezone: 'America/Botota',
    isDisplayable: true,
    location: {},
    locationIsFetching: false,
    tacticsById: {},
    strategy,
    seenTacticIds: [],
    completedTacticIds: [],
  });

export const makeMotionLogFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<MotionLogValue>({
    uid: Factory.each(i => i.toString()),
    type: 'motion',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    startTime: TimestampKlass.now(),
    timezone: 'America/Botota',
    isDisplayable: false,
    location: {},
    tacticsById: {},
    locationIsFetching: false,
    strategy,
    seenTacticIds: [],
    completedTacticIds: [],
  });

export const makeLocationLogFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<LocationLogValue>({
    uid: Factory.each(i => i.toString()),
    type: 'location',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    startTime: TimestampKlass.now(),
    timezone: 'America/Botota',
    isDisplayable: true,
    locationId: 'abc123',
    locationMode: 'enter',
    locationName: 'Home',
    tacticsById: {},
    location: {},
    locationIsFetching: false,
    strategy,
    seenTacticIds: [],
    completedTacticIds: [],
  });
