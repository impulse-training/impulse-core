import * as Factory from 'factory.ts';
import { ProfileStrategyValue } from '../schema';
import { TimestampLike } from '../utils/firestore/TimestampLike';
import { makeStrategyFactory } from './strategy';

export const makeProfileStrategyFactory = (
  TimestampKlass: typeof TimestampLike
) =>
  Factory.makeFactory<ProfileStrategyValue>({
    strategy: makeStrategyFactory(TimestampKlass).build(),
    strategyDoc: undefined as any,
    sortBy: 'random',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
  });
