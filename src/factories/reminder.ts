import * as Factory from 'factory.ts';

import { LocationReminderValue, TimeReminderValue } from '../schema/reminder';
import { FakeTimestamp } from '../utils/FakeTimestamp';

export const makeLocationReminderFactory = (
  TimestampKlass: typeof FakeTimestamp
) =>
  Factory.makeFactory<LocationReminderValue>({
    uid: Factory.each(i => i.toString()),
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    tacticId: 'abc123',
    type: 'location',
    locationId: '1',
    mode: 'enter',
  });

export const makeTimeReminderFactory = (TimestampKlass: typeof FakeTimestamp) =>
  Factory.makeFactory<TimeReminderValue>({
    uid: Factory.each(i => i.toString()),
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    timezone: 'America/Los_Angeles',
    tacticId: 'abc123',
    type: 'time',
    weekdays: [1, 2, 3, 4, 5, 6, 7],
    hour: 12,
    minute: 0,
  });
