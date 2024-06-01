import * as Factory from 'factory.ts';
import { StreamMembershipValue } from '../schema';
import { TimestampLike } from '../utils/firestore/TimestampLike';

export const makeStreamFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<StreamMembershipValue>({
    streamRef: {
      id: 'abc123',
      path: 'streams/abc123',
      get: async () => ({} as any),
    },
    streamData: {
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
