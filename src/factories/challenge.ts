import * as Factory from 'factory.ts';
import { ChallengeValue } from '../schema';

export const challengeFactory = Factory.makeFactory<ChallengeValue>({
  uid: 'abc123',
  createdAt: null as any,
  startDate: null as any,
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
