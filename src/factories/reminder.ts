import * as Factory from 'factory.ts';
import { ScheduledRoutineValue } from '../schema';
import { TimestampLike } from '../utils';

export const makeRoutineFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<ScheduledRoutineValue>({
    name: 'Cigarettes',
    checkboxLabel: 'Craving for cigarettes',
    type: 'scheduled',
    schedule: [{ hour: 9, minute: 0, weekdays: [1, 2, 3, 4, 5, 6, 7] }],
    tacticsById: {},
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
  });
