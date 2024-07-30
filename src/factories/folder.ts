import * as Factory from 'factory.ts';
import { FolderValue } from '../schema';
import { TimestampLike } from '../utils/firestore/TimestampLike';

export const makeFolderFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<FolderValue>({
    type: 'folder',
    prompt: 'Movement',
    ordinal: 0,
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    isShared: false,
    invitationCode: 'abc123',
    invitationUrl: 'https://impulse.training/support?c=abc123',
    tacticsById: {},
    next3Tactics: [],
  });
