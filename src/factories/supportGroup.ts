import * as Factory from 'factory.ts';
import { SupportGroupValue } from '../schema';
import { TimestampLike } from '../utils/firestore/TimestampLike';

export const makeSupportGroupFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<SupportGroupValue>({
    groupName: 'Cold Turkey Warriors',
    participantProfileIds: [],
    thumbnailUrl: '',
    permissions: {},
    unreadCounts: {},
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    creatorName: 'Mooky',
    creatorUid: 'abc123',
    icon: 'group',
    suggestedTacticIds: {},
  });
