import * as Factory from 'factory.ts';
import { StrategyValue } from '../schema';
import { TimestampLike } from '../utils/firestore/TimestampLike';

export const makeStrategyFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<StrategyValue>({
    name: 'Get moving',
    tacticIds: [],
    tacticsById: {},
    type: 'folder',
    ordinal: Factory.each(i => i),
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
  });
