import * as Factory from 'factory.ts';
import {
  ImpulseLogValue,
  LocationLogValue,
  MotionLogValue,
  TimeLogValue,
} from '../schema/logs';
import { TimestampLike } from '../utils/TimestampLike';
import { makeGameplanFactory } from './gameplan';

const strategy = {
  main: {
    tacticIds: [],
    suggestedTacticIds: [],
  },
  impulseDebrief: {
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
    seenStrategy: {},
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
    seenStrategy: {},
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
    seenStrategy: {},
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
    seenStrategy: {},
    completedTacticIds: [],
  });
