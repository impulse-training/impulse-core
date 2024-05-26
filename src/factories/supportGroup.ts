import * as Factory from 'factory.ts';
import { SupportGroupValue } from '../schema';
import { TimestampLike } from '../utils/firestore/TimestampLike';

export const makeSupportGroupFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<SupportGroupValue>({
    groupName: 'Cold Turkey Warriors',
    participantProfileIds: [],
    permissions: {},
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    creatorProfileId: 'abc123',
    invitationCode: 'abc123',
    invitationUrl: 'https://impulse.training/support?c=abc123',
  });
