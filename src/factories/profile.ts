import { faker } from '@faker-js/faker';
import { Timestamp } from '@google-cloud/firestore';
import * as Factory from 'factory.ts';
import { ProfileValue } from '../schema';

export const profileFactory = Factory.makeFactory<ProfileValue>({
  uid: Factory.each(i => i.toString()),
  createdAt: Timestamp.now(),
  displayName: faker.name.fullName(),
  email: faker.internet.email(),
  isAdmin: false,
  region: 'US',
  timezone: 'America/Bogota',
  invitationCode: 'abc123',
});

export const adminProfileFactory = profileFactory.extend({
  isAdmin: true,
});
