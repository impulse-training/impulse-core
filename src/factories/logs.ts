import * as Factory from 'factory.ts';
import {
  DebriefLogValue,
  ImpulseLogValue,
  MotionLogValue,
  TimeLogValue,
} from '../schema/logs';
import { FakeTimestamp } from '../utils/FakeTimestamp';

const gameplan = {
  main: { tacticIds: [], suggestedTacticIds: [], tacticsById: {} },
  success: { tacticIds: [], suggestedTacticIds: [], tacticsById: {} },
  setback: { tacticIds: [], suggestedTacticIds: [], tacticsById: {} },
};

export const makeImpulseFactory = (TimestampKlass: typeof FakeTimestamp) =>
  Factory.makeFactory<ImpulseLogValue>({
    uid: Factory.each(i => i.toString()),
    type: 'impulse',
    setAsActiveImpulse: true,
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    startTime: TimestampKlass.now(),
    timezone: 'America/Botota',
    outcome: 'indeterminate',
    isDisplayable: true,
    debriefNotes: '',
    patternId: 'abc123',
    patternIds: [],
    tactics: {},
    location: {},
    locationIsFetching: false,
    tacticIds: [],
    allTacticIds: [],
    patterns: {},
    patternUsage: {},
    gameplans: {},
    gameplan: gameplan,
  });

export const makeTimeLogFactory = (TimestampKlass: typeof FakeTimestamp) =>
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
    allTacticIds: [],
    gameplan: gameplan,
  });

export const makeDebriefLogFactory = (TimestampKlass: typeof FakeTimestamp) =>
  Factory.makeFactory<DebriefLogValue>({
    uid: Factory.each(i => i.toString()),
    type: 'debrief',
    gameplanId: 'reminder1',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    startTime: TimestampKlass.now(),
    timezone: 'America/Botota',
    isDisplayable: true,
    tactics: {},
    location: {},
    locationIsFetching: false,
    outcome: 'indeterminate',
    tacticIds: [],
    allTacticIds: [],
    gameplan: gameplan,
    patterns: {},
    patternIds: [],
    patternUsage: {},
    patternUsageEntries: {},
  });

export const makeMotionLogFactory = (TimestampKlass: typeof FakeTimestamp) =>
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
    allTacticIds: [],
    gameplan: gameplan,
  });
