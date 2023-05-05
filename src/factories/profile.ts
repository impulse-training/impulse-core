import { faker } from '@faker-js/faker';
import * as Factory from 'factory.ts';
import { ProfileValue } from '../schema';

export const profileFactory = Factory.makeFactory<ProfileValue>({
  uid: Factory.each(i => i.toString()),
  createdAt: { toDate: () => new Date() } as any,
  updatedAt: { toDate: () => new Date() } as any,
  displayName: faker.name.fullName(),
  email: faker.internet.email(),
  isAdmin: false,
  region: 'US',
  timezone: 'America/Bogota',
  invitationCode: 'abc123',
  notificationPreferences: {},
});

export const adminProfileFactory = profileFactory.extend({
  isAdmin: true,
});
