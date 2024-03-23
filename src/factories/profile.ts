import * as Factory from 'factory.ts';
import { ProfileValue } from '../schema';
import { TimestampLike } from '../utils/TimestampLike';

export const makeProfileFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<ProfileValue>({
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    uids: [],
    region: 'US',
    impulseStrategies: {},
    tacticsById: {},
    timezone: 'America/Bogota',
    invitationCode: 'abc123',
    notificationPreferences: {},
  });
