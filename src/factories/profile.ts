import { faker } from '@faker-js/faker';
import * as Factory from 'factory.ts';
import { ProfileValue } from '../schema';
import { TimestampLike } from '../utils/TimestampLike';

export const makeProfileFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<ProfileValue>({
    uid: Factory.each(i => i.toString()),
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    displayName: faker.name.fullName(),
    email: faker.internet.email(),
    isAdmin: false,
    region: 'US',
    timezone: 'America/Bogota',
    invitationCode: 'abc123',
    notificationPreferences: {},
    gameplans: {},
    gameplansUpdatedAt: TimestampKlass.now(),
  });

export const makeAdminProfileFactory = (TimestampKlass: typeof TimestampLike) =>
  makeProfileFactory(TimestampKlass).extend({
    isAdmin: true,
  });
