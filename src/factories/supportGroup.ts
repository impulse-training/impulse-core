import * as Factory from 'factory.ts';
import { SupportGroupValue } from '../schema';

export const supportGroupFactory = Factory.makeFactory<SupportGroupValue>({
  groupName: 'Cold Turkey Warriors',
  participantUids: [],
  thumbnailUrl: '',
  hasTactics: true,
  permissions: {},
  unreadCounts: {},
  createdAt: { toDate: () => new Date() } as any,
  updatedAt: { toDate: () => new Date() } as any,
  creatorName: 'Mooky',
  creatorUid: 'abc123',
  icon: 'group',
});
