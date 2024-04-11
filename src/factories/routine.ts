import * as Factory from 'factory.ts';
import { TimeRoutineValue } from '../schema';
import { TimestampLike } from '../utils';

export const makeTimeRoutineFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<TimeRoutineValue>({
    name: 'Cigarettes',
    type: 'time',
    hour: 9,
    minute: 0,
    weekdays: [1, 2, 3, 4, 5, 6, 7],
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
  });
