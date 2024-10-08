import * as Factory from 'factory.ts';
import { TimeReminderValue } from '../schema';
import { TimestampLike } from '../utils';

export const makeTimeReminderFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<TimeReminderValue>({
    name: 'Cigarettes',
    profileId: 'abc123',
    type: 'time',
    hour: 9,
    minute: 0,
    weekdays: [1, 2, 3, 4, 5, 6, 7],
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
  });
