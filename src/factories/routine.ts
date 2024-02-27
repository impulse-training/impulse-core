import * as Factory from 'factory.ts';

import {
  DayDebriefRoutineValue,
  LocationRoutineValue,
  TimeRoutineValue,
} from '../schema/routine';
import { TimestampLike } from '../utils/TimestampLike';

export const makeLocationRoutineFactory = (
  TimestampKlass: typeof TimestampLike
) =>
  Factory.makeFactory<LocationRoutineValue>({
    uid: Factory.each(i => i.toString()),
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    type: 'location',
    mode: 'enter',
  });

export const makeTimeRoutineFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<TimeRoutineValue>({
    uid: Factory.each(i => i.toString()),
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    timezone: 'America/Los_Angeles',
    type: 'time',
    weekdays: [1, 2, 3, 4, 5, 6, 7],
    hour: 12,
    minute: 0,
  });

export const makeDebriefRoutineFactory = (
  TimestampKlass: typeof TimestampLike
) =>
  Factory.makeFactory<DayDebriefRoutineValue>({
    uid: Factory.each(i => i.toString()),
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    type: 'dayDebrief',
    timezone: 'America/Los_Angeles',
    weekdays: [1, 2, 3, 4, 5, 6, 7],
    hour: 20,
    minute: 0,
  });
