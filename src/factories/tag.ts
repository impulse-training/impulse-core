import * as Factory from 'factory.ts';
import { TagValue } from '../schema';

export const tagFactory = Factory.makeFactory<TagValue>({
  uid: Factory.each(i => i.toString()),
  createdAt: { toDate: () => new Date() } as any,
  updatedAt: { toDate: () => new Date() } as any,
  name: 'Sad',
  ordinal: 0,
  emoji: '😭',
});
