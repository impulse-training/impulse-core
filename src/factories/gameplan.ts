import * as Factory from 'factory.ts';
import { GameplanValue } from '../schema';
import { TimestampLike } from '../utils';

export const makeGameplanFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<GameplanValue>({
    name: 'Cigarettes',
    type: 'time',
    config: {
      schedule: [{ hour: 9, minute: 0, weekdays: [1, 2, 3, 4, 5, 6, 7] }],
    },
    tacticsById: {},
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
  });
