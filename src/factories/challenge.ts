import { Timestamp } from '@google-cloud/firestore';
import * as Factory from 'factory.ts';
import { ChallengeValue } from '../schema';

export const challengeFactory = Factory.makeFactory<ChallengeValue>({
  uid: 'abc123',
  createdAt: Timestamp.now(),
  startDate: Timestamp.now(),
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
