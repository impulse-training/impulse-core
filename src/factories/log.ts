import * as Factory from 'factory.ts';
import { ImpulseLogValue, LocationLogValue, TimeLogValue } from '../schema/log';
import { TimestampLike } from '../utils/firestore/TimestampLike';

export const makeImpulseLogFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<ImpulseLogValue>({
    profileId: Factory.each(i => i.toString()),
    type: 'impulse',
    setAsActiveImpulse: true,
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    startTime: TimestampKlass.now(),
    timezone: 'America/Botota',
    isDisplayable: true,
    location: {},
    locationIsFetching: false,
    patternId: 'abc123',
    patternIds: ['abc123'],
    patternsById: {},
    tacticIds: [],
    tacticsById: {},
    completedTacticIds: [],
    strategiesPath: 'patterns/abc123/strategies',
    debriefStrategiesPath: 'patterns/abc123/debriefStrategies',
  });

export const makeTimeLogFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<TimeLogValue>({
    profileId: Factory.each(i => i.toString()),
    type: 'time',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    startTime: TimestampKlass.now(),
    timezone: 'America/Botota',
    isDisplayable: true,
    strategiesPath: 'routines/abc123/strategies',
    location: {},
    locationIsFetching: false,
    tacticIds: [],
    tacticsById: {},
    completedTacticIds: [],
  });

export const makeLocationLogFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<LocationLogValue>({
    profileId: Factory.each(i => i.toString()),
    type: 'location',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    startTime: TimestampKlass.now(),
    timezone: 'America/Botota',
    isDisplayable: true,
    locationId: 'abc123',
    locationMode: 'enter',
    locationName: 'Home',
    strategiesPath: 'routines/abc123/strategies',
    location: {},
    locationIsFetching: false,
    tacticIds: [],
    tacticsById: {},
    completedTacticIds: [],
  });
