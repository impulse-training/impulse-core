import * as Factory from 'factory.ts';
import { ProfileSupportGroupValue } from '../schema';
import { TimestampLike } from '../utils/firestore/TimestampLike';

export const makeProfileSupportGroupFactory = (
  TimestampKlass: typeof TimestampLike
) =>
  Factory.makeFactory<ProfileSupportGroupValue>({
    data: {
      name: 'Movement',
      createdAt: TimestampKlass.now(),
      updatedAt: TimestampKlass.now(),
      invitationCode: 'abc123',
      invitationUrl: 'https://impulse.training/support?c=abc123',
      tacticPreviewsById: {},
      last3TacticPreviews: [],
    },
    ordinal: 0,
    seenTactics: {},
    tacticOrdinals: {},
    tacticLikes: {},
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
  });
