import * as Factory from 'factory.ts';
import { StrategyValue } from '../schema';
import { TimestampLike } from '../utils/firestore/TimestampLike';

export const makeStrategy = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<StrategyValue>({
    type: 'folder',
    docRef: {
      id: 'abc123',
      path: 'folders/abc123',
      get: async () => ({} as any),
      collection: () => ({} as any),
    },
    docData: {
      name: 'Movement',
      createdAt: TimestampKlass.now(),
      updatedAt: TimestampKlass.now(),
      invitationCode: 'abc123',
      invitationUrl: 'https://impulse.training/support?c=abc123',
      tacticPreviewsById: {},
      last3TacticPreviews: [],
    },
    ordinal: 0,
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
  });
