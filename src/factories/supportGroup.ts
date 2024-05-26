import * as Factory from 'factory.ts';
import { SupportGroupValue } from '../schema';
import { TimestampLike } from '../utils/firestore/TimestampLike';

export const makeSupportGroupFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<SupportGroupValue>({
    name: 'Movement',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    invitationCode: 'abc123',
    invitationUrl: 'https://impulse.training/support?c=abc123',
  });
