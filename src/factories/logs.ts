import * as Factory from 'factory.ts';
import {
  ImpulseLogValue,
  MotionLogValue,
  TacticsLogValue,
  TimeLogValue,
} from '../schema/logs';
import { FakeTimestamp } from '../utils/FakeTimestamp';

export const makeImpulseFactory = (TimestampKlass: typeof FakeTimestamp) =>
  Factory.makeFactory<ImpulseLogValue>({
    uid: Factory.each(i => i.toString()),
    type: 'impulse',
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
    tagsByTacticId: {},
    locationIsFetching: false,
    tacticIds: [],
    allTacticIds: [],
    tacticResponses: {},
    tagIds: [],
    tagValues: {},
    patterns: {},
    patternUsage: {},
    gameplan: {},
  });

export const makeTacticsLogFactory = (TimestampKlass: typeof FakeTimestamp) =>
  Factory.makeFactory<TacticsLogValue>({
    uid: Factory.each(i => i.toString()),
    type: 'tactics',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    startTime: TimestampKlass.now(),
    isDisplayable: true,
    timezone: 'America/Botota',
    tactics: {},
    location: {},
    tagsByTacticId: {},
    locationIsFetching: false,
    tacticIds: [],
    allTacticIds: [],
    tacticResponses: {},
    tagIds: [],
    tagValues: {},
    gameplan: {},
  });

export const makeTimeLogFactory = (TimestampKlass: typeof FakeTimestamp) =>
  Factory.makeFactory<TimeLogValue>({
    uid: Factory.each(i => i.toString()),
    type: 'time',
    reminderId: 'reminder1',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    startTime: TimestampKlass.now(),
    timezone: 'America/Botota',
    tagIds: [],
    isDisplayable: true,
    tactics: {},
    tagsByTacticId: {},
    location: {},
    locationIsFetching: false,
    tacticIds: [],
    allTacticIds: [],
    tacticResponses: {},
    tagValues: {},
    gameplan: {},
  });

export const makeMotionLogFactory = (TimestampKlass: typeof FakeTimestamp) =>
  Factory.makeFactory<MotionLogValue>({
    uid: Factory.each(i => i.toString()),
    type: 'motion',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    startTime: TimestampKlass.now(),
    timezone: 'America/Botota',
    tagIds: [],
    isDisplayable: false,
    tactics: {},
    tagsByTacticId: {},
    location: {},
    locationIsFetching: false,
    tacticIds: [],
    allTacticIds: [],
    tacticResponses: {},
    tagValues: {},
    gameplan: {},
  });
