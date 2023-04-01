import * as Factory from 'factory.ts';
import { SupportGroupValue } from '../schema';

export const supportGroupFactory = Factory.makeFactory<SupportGroupValue>({
  groupName: 'Cold Turkey Warriors',
  participantUids: [],
  thumbnailUrl: '',
  lastUpdated: null as any,
  permissions: {},
  unreadCounts: {},
  createdAt: null as any,
  creatorName: 'Mooky',
  creatorUid: 'abc123',
  icon: 'group',
});
