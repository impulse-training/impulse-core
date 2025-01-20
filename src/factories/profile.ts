import * as Factory from 'factory.ts';
import { ProfileValue } from '../schema';
import { TimestampLike } from '../utils/firestore/TimestampLike';

export const makeProfileFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<ProfileValue>({
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    region: 'US',
    historicalInsights: ['The user is struggling with YouTube addiction.'],
    recentSummaries: {},
    timezone: 'America/Bogota',
    verificationCode: '12345',
    notificationPreferences: {},
    uids: ['uid1', 'uid2'],
    dayReviewTimeMinutes: null,
  });
