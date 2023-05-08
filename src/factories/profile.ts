import { faker } from '@faker-js/faker';
import * as Factory from 'factory.ts';
import { ProfileValue } from '../schema';
import { FakeTimestamp } from '../utils/FakeTimestamp';

export const makeProfileFactory = (TimestampKlass: typeof FakeTimestamp) =>
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
  });

export const makeAdminProfileFactory = (TimestampKlass: typeof FakeTimestamp) =>
  makeProfileFactory(TimestampKlass).extend({
    isAdmin: true,
  });
