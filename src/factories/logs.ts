import * as Factory from 'factory.ts';
import { ImpulseLogValue, TacticsLogValue } from '../schema/logs';

export const impulseFactory = Factory.makeFactory<ImpulseLogValue>({
  uid: Factory.each(i => i.toString()),
  type: 'impulse',
  createdAt: { toDate: () => new Date() } as any,
  updatedAt: { toDate: () => new Date() } as any,
  startTime: { toDate: () => new Date() } as any,
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
  createdAt: { toDate: () => new Date() } as any,
  updatedAt: { toDate: () => new Date() } as any,
  startTime: { toDate: () => new Date() } as any,
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
