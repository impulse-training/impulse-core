import * as Factory from 'factory.ts';
import { TagValue } from '../schema';
import { Timestamp } from '../utils/Timestamp';

export const tagFactory = Factory.makeFactory<TagValue>({
  uid: Factory.each(i => i.toString()),
  createdAt: Timestamp.now(),
  name: 'Sad',
  ordinal: 0,
  emoji: '😭',
});
