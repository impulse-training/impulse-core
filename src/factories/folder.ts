import * as Factory from 'factory.ts';
import { FolderValue } from '../schema';
import { TimestampLike } from '../utils/firestore/TimestampLike';

export const makeFolderFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<FolderValue>({
    type: 'folder',
    title: 'Movement',
    ordinal: 0,
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    invitationCode: 'abc123',
    invitationUrl: 'https://impulse.training/support?c=abc123',
    tacticsById: {},
    last3Tactics: [],
  });
