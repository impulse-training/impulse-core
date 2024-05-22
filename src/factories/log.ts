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
    timezone: 'America/Bogota',
    isDisplayable: true,
    location: {},
    locationIsFetching: false,
    tacticIds: [],
    tacticsById: {},
    tacticData: {},
    supportGroups: [],
    commentsById: {},
  });

export const makeTimeLogFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<TimeLogValue>({
    profileId: Factory.each(i => i.toString()),
    type: 'time',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    startTime: TimestampKlass.now(),
    timezone: 'America/Bogota',
    isDisplayable: true,
    supportGroups: [],
    location: {},
    locationIsFetching: false,
    tacticIds: [],
    tacticsById: {},
    tacticData: {},
    commentsById: {},
  });

export const makeLocationLogFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<LocationLogValue>({
    profileId: Factory.each(i => i.toString()),
    type: 'location',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    startTime: TimestampKlass.now(),
    timezone: 'America/Bogota',
    isDisplayable: true,
    locationId: 'abc123',
    locationMode: 'enter',
    locationName: 'Home',
    supportGroups: [],
    location: {},
    locationIsFetching: false,
    tacticIds: [],
    tacticsById: {},
    tacticData: {},
    commentsById: {},
  });
