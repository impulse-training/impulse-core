import * as Factory from 'factory.ts';
import {
  DebriefLogValue,
  ImpulseLogValue,
  LocationLogValue,
  MotionLogValue,
  TimeLogValue,
} from '../schema/logs';
import { TimestampLike } from '../utils/TimestampLike';

const gameplan = {
  main: { tacticIds: [], suggestedTacticIds: [], tacticsById: {} },
  impulseDebrief: { tacticIds: [], suggestedTacticIds: [], tacticsById: {} },
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
    patternIds: [],
    tactics: {},
    location: {},
    locationIsFetching: false,
    tacticIds: [],
    patterns: {},
    gameplans: {},
    gameplan: gameplan,
  });

export const makeTimeLogFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<TimeLogValue>({
    uid: Factory.each(i => i.toString()),
    type: 'time',
    gameplanId: 'reminder1',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    startTime: TimestampKlass.now(),
    timezone: 'America/Botota',
    isDisplayable: true,
    tactics: {},
    location: {},
    locationIsFetching: false,
    tacticIds: [],
    gameplan: gameplan,
  });

export const makeDebriefLogFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<DebriefLogValue>({
    uid: Factory.each(i => i.toString()),
    type: 'dayDebrief',
    gameplanId: 'reminder1',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    startTime: TimestampKlass.now(),
    timezone: 'America/Botota',
    isDisplayable: true,
    tactics: {},
    location: {},
    locationIsFetching: false,
    tacticIds: [],
    gameplan: gameplan,
    patterns: {},
    patternIds: [],
    tacticDataEntries: {},
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
    tactics: {},
    location: {},
    locationIsFetching: false,
    tacticIds: [],
    gameplan: gameplan,
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
    tactics: {},
    location: {},
    locationIsFetching: false,
    tacticIds: [],
    gameplan: gameplan,
  });
