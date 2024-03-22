import { faker } from '@faker-js/faker';
import * as Factory from 'factory.ts';
import { LocationValue } from '../schema';
import { TimestampLike } from '../utils/TimestampLike';

export const makeLocationFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<LocationValue>({
    profileId: Factory.each(i => i.toString()),
    uids: [],
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    name: 'Home',
    latitude: Number(faker.address.latitude()),
    longitude: Number(faker.address.longitude()),
    address: faker.address.streetAddress(),
  });
