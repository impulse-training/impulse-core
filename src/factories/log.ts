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
  main: [],
  impulseDebrief: [],
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
    location: {},
    locationIsFetching: false,
    patterns: {},
    tacticsById: {},
    gameplan: gameplan,
    gameplans: {},
    seenGameplan: gameplan,
    seenGameplans: {},
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
    location: {},
    tacticsById: {},
    locationIsFetching: false,
    gameplan: gameplan,
    seenGameplan: gameplan,
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
    location: {},
    locationIsFetching: false,
    gameplan: gameplan,
    patterns: {},
    tacticsById: {},
    patternIds: [],
    tacticDataEntries: {},
    seenGameplan: gameplan,
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
    gameplan: gameplan,
    seenGameplan: gameplan,
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
    gameplan: gameplan,
    seenGameplan: gameplan,
  });
