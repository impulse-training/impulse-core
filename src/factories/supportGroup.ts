import { Timestamp } from '@google-cloud/firestore';
import * as Factory from 'factory.ts';
import { SupportGroupValue } from '../schema';

export const supportGroupFactory = Factory.makeFactory<SupportGroupValue>({
  groupName: 'Cold Turkey Warriors',
  participantUids: [],
  thumbnailUrl: '',
  lastUpdated: Timestamp.now(),
  permissions: {},
  unreadCounts: {},
  createdAt: Timestamp.now(),
  creatorName: 'Mooky',
  creatorUid: 'abc123',
  icon: 'group',
});
