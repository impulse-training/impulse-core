import * as Factory from 'factory.ts';
import { OriginalProfileStrategyValue } from '../schema';
import { TimestampLike } from '../utils/firestore/TimestampLike';
import { makeStrategyFactory } from './strategy';

export const makeProfileStrategyFactory = (
  TimestampKlass: typeof TimestampLike
) =>
  Factory.makeFactory<OriginalProfileStrategyValue>({
    type: 'original',
    strategy: makeStrategyFactory(TimestampKlass).build(),
    strategyDoc: undefined as any,
    sortBy: 'random',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
  });
