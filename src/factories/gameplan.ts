import * as Factory from 'factory.ts';

import {
  ImpulseGameplanValue,
  LocationGameplanValue,
  TimeGameplanValue,
} from '../schema/gameplan';
import { TimestampLike } from '../utils/TimestampLike';

export const makeImpulseGameplanFactory = (
  TimestampKlass: typeof TimestampLike
) =>
  Factory.makeFactory<ImpulseGameplanValue>({
    uid: Factory.each(i => i.toString()),
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    tacticIds: [],
    patternId: 'abc123',
    type: 'impulse',
    suggestedTacticIds: [],
    tacticsById: {},
  });

export const makeLocationGameplanFactory = (
  TimestampKlass: typeof TimestampLike
) =>
  Factory.makeFactory<LocationGameplanValue>({
    uid: Factory.each(i => i.toString()),
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    tacticIds: [],
    type: 'location',
    mode: 'enter',
    suggestedTacticIds: [],
    tacticsById: {},
  });

export const makeTimeGameplanFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<TimeGameplanValue>({
    uid: Factory.each(i => i.toString()),
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    timezone: 'America/Los_Angeles',
    tacticIds: [],
    type: 'time',
    weekdays: [1, 2, 3, 4, 5, 6, 7],
    hour: 12,
    minute: 0,
    suggestedTacticIds: [],
    tacticsById: {},
  });

export const makeSetbackGameplanFactory = (
  TimestampKlass: typeof TimestampLike
) =>
  Factory.makeFactory<ImpulseGameplanValue>({
    uid: Factory.each(i => i.toString()),
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    patternId: 'abc123',
    tacticIds: [],
    type: 'setback',
    suggestedTacticIds: [],
    tacticsById: {},
  });

export const makeSuccessGameplanFactory = (
  TimestampKlass: typeof TimestampLike
) =>
  Factory.makeFactory<ImpulseGameplanValue>({
    uid: Factory.each(i => i.toString()),
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    patternId: 'abc123',
    tacticIds: [],
    type: 'success',
    suggestedTacticIds: [],
    tacticsById: {},
  });
