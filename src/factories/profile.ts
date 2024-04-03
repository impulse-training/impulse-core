import * as Factory from 'factory.ts';
import { ProfileValue } from '../schema';
import { TimestampLike } from '../utils/TimestampLike';

export const makeProfileFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<ProfileValue>({
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    region: 'US',
    timezone: 'America/Bogota',
    invitationCode: 'abc123',
    notificationPreferences: {},
    impulseStrategiesByPatternId: {},
    scheduledStrategies: {},
    locationStrategies: {},
    tacticsById: {},
  });
