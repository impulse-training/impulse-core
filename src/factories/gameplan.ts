import * as Factory from 'factory.ts';

import {
  DebriefGameplanValue,
  LocationGameplanValue,
  PatternGameplanValue,
  TimeGameplanValue,
} from '../schema/gameplan';
import { FakeTimestamp } from '../utils/FakeTimestamp';

export const makePatternGameplanFactory = (
  TimestampKlass: typeof FakeTimestamp
) =>
  Factory.makeFactory<PatternGameplanValue>({
    uid: Factory.each(i => i.toString()),
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    tacticIds: [],
    patternId: 'abc123',
    type: 'pattern',
    suggestedTacticIds: [],
    tacticsById: {},
  });

export const makeLocationGameplanFactory = (
  TimestampKlass: typeof FakeTimestamp
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

export const makeTimeGameplanFactory = (TimestampKlass: typeof FakeTimestamp) =>
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

export const makeDebriefGameplanFactory = (
  TimestampKlass: typeof FakeTimestamp
) =>
  Factory.makeFactory<DebriefGameplanValue>({
    uid: Factory.each(i => i.toString()),
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    timezone: 'America/Los_Angeles',
    tacticIds: [],
    type: 'debrief',
    weekdays: [1, 2, 3, 4, 5, 6, 7],
    hour: 12,
    minute: 0,
    suggestedTacticIds: [],
    tacticsById: {},
  });
