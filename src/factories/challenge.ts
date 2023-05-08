import * as Factory from 'factory.ts';
import { ChallengeValue } from '../schema';
import { FakeTimestamp } from '../utils/FakeTimestamp';

export const makeChallengeFactory = (TimestampKlass: typeof FakeTimestamp) =>
  Factory.makeFactory<ChallengeValue>({
    uid: 'abc123',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    startDate: TimestampKlass.now(),
    ordinal: 0,
    days: 5,
    type: 'button',
    isTemplate: false,
    consecutive: true,
    icon: 'trophy',
    eligibleLogDatesById: {},
    datesCumulativeProgress: {},
    currentDayCount: 0,
  });
