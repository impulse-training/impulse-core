import * as Factory from 'factory.ts';
import { FolderValue } from '../schema';
import { TimestampLike } from '../utils/firestore/TimestampLike';

export const makeFolderFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<FolderValue>({
    name: 'Movement',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    invitationCode: 'abc123',
    invitationUrl: 'https://impulse.training/support?c=abc123',
    tacticPreviewsById: {},
    last3TacticPreviews: [],
  });
