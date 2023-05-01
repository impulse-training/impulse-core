import * as Factory from 'factory.ts';
import { ImpulseLogValue, TacticsLogValue, TimeLogValue } from '../schema/logs';

const fakeTimestamp = { toDate: () => new Date() } as any;

export const impulseFactory = Factory.makeFactory<ImpulseLogValue>({
  uid: Factory.each(i => i.toString()),
  isShared: false,
  type: 'impulse',
  createdAt: fakeTimestamp,
  updatedAt: fakeTimestamp,
  startTime: fakeTimestamp,
  timezone: 'America/Botota',
  outcome: 'indeterminate',
  isDisplayable: true,
  debriefNotes: '',
  patternIds: [],
  tactics: {},
  location: {},
  tagsByTacticId: {},
  locationIsFetching: false,
  tacticIds: [],
  tacticResponses: {},
  tagIds: [],
  tagValues: {},
  patterns: {},
  patternUsage: {},
});

export const tacticsLogFactory = Factory.makeFactory<TacticsLogValue>({
  uid: Factory.each(i => i.toString()),
  type: 'tactics',
  isShared: false,
  createdAt: fakeTimestamp,
  updatedAt: fakeTimestamp,
  startTime: fakeTimestamp,
  isDisplayable: true,
  timezone: 'America/Botota',
  tactics: {},
  location: {},
  tagsByTacticId: {},
  locationIsFetching: false,
  tacticIds: [],
  tacticResponses: {},
  tagIds: [],
  tagValues: {},
});

export const timeLogFactory = Factory.makeFactory<TimeLogValue>({
  uid: Factory.each(i => i.toString()),
  type: 'time',
  isShared: false,
  reminderId: 'reminder1',
  createdAt: fakeTimestamp,
  updatedAt: fakeTimestamp,
  startTime: fakeTimestamp,
  timezone: 'America/Botota',
  tagIds: [],
  isDisplayable: true,
  tactics: {},
  tagsByTacticId: {},
  location: {},
  locationIsFetching: false,
  tacticIds: [],
  tacticResponses: {},
  tagValues: {},
});
