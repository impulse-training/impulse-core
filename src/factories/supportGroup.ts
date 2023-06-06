import * as Factory from 'factory.ts';
import { SupportGroupValue } from '../schema';
import { FakeTimestamp } from '../utils/FakeTimestamp';

export const makeSupportGroupFactory = (TimestampKlass: typeof FakeTimestamp) =>
  Factory.makeFactory<SupportGroupValue>({
    groupName: 'Cold Turkey Warriors',
    participantUids: [],
    thumbnailUrl: '',
    permissions: {},
    unreadCounts: {},
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    creatorName: 'Mooky',
    creatorUid: 'abc123',
    icon: 'group',
    tacticIds: {},
  });
