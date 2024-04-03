import * as Factory from 'factory.ts';
import { ImpulseStrategyValue, TimeStrategyValue } from '../schema';
import { TimestampLike } from '../utils/TimestampLike';

export const makeImpulseStrategyFactory = (
  TimestampKlass: typeof TimestampLike
) =>
  Factory.makeFactory<ImpulseStrategyValue>({
    name: 'Cigarettes',
    type: 'impulse',
    tacticIds: [],
    tacticsById: {},
    ordinal: Factory.each(i => i),
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
  });

export const makeTimeStrategyFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<TimeStrategyValue>({
    name: 'Cigarettes',
    type: 'time',
    tacticIds: [],
    tacticsById: {},
    hour: 9,
    minute: 0,
    weekdays: [1, 2, 3, 4, 5, 6, 7],
    ordinal: Factory.each(i => i),
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
  });
