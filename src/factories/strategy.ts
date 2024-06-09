import * as Factory from 'factory.ts';
import { StrategyValue } from '../schema';
import { TimestampLike } from '../utils/firestore/TimestampLike';
import { makeFolderFactory } from './folder';
import { makeTacticFactory } from './tactic';

export const makeFolderStrategyFactory = (
  TimestampKlass: typeof TimestampLike
) =>
  Factory.makeFactory<StrategyValue>({
    type: 'folder',
    docRef: {
      id: 'abc123',
      path: 'strategies/abc123',
      get: async () => ({} as any),
      collection: () => ({} as any),
    },
    docData: makeFolderFactory(TimestampKlass).build(),
    ordinal: 0,
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
  });

export const makeTacticStrategyFactory = (
  TimestampKlass: typeof TimestampLike
) =>
  Factory.makeFactory<StrategyValue>({
    type: 'tactic',
    docRef: {
      id: 'abc123',
      path: 'strategies/abc123',
      get: async () => ({} as any),
      collection: () => ({} as any),
    },
    docData: makeTacticFactory(TimestampKlass).build(),
    ordinal: 0,
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
  });
