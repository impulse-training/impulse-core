import * as Factory from 'factory.ts';
import { ProfileValue } from '../schema';
import { TimestampLike } from '../utils/firestore/TimestampLike';

export const makeProfileFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<ProfileValue>({
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    region: 'US',
    timezone: 'America/Bogota',
    notificationPreferences: {},
    signUpIssueId: null,
    uids: ['uid1', 'uid2'],
    dayReviewTime: null,
  });
