import * as Factory from 'factory.ts';
import {
  ImpulseLogValue,
  LocationLogValue,
  TimeLogValue,
} from '../schema/logs';
import { TimestampLike } from '../utils/TimestampLike';

export const makeImpulseLogFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<ImpulseLogValue>({
    profileId: Factory.each(i => i.toString()),
    uids: [],
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
    strategy: {
      tacticIds: [],
      suggestedTacticIds: [],
    },
    seenStrategy: {},
    completedTacticIds: [],
  });

export const makeTimeLogFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<TimeLogValue>({
    profileId: Factory.each(i => i.toString()),
    uids: [],
    type: 'time',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    startTime: TimestampKlass.now(),
    timezone: 'America/Botota',
    isDisplayable: true,
    location: {},
    tacticsById: {},
    locationIsFetching: false,
    strategy: {
      tacticIds: [],
      suggestedTacticIds: [],
    },
    seenStrategy: {},
    completedTacticIds: [],
  });

export const makeLocationLogFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<LocationLogValue>({
    profileId: Factory.each(i => i.toString()),
    uids: [],
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
    strategy: {
      tacticIds: [],
      suggestedTacticIds: [],
    },
    seenStrategy: {},
    completedTacticIds: [],
  });
