import * as Factory from 'factory.ts';
import { FolderMembershipValue } from '../schema';
import { TimestampLike } from '../utils/firestore/TimestampLike';

export const makeFolderFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<FolderMembershipValue>({
    folderRef: {
      id: 'abc123',
      path: 'folders/abc123',
      get: async () => ({} as any),
      collection: () => ({} as any),
    },
    folderData: {
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
