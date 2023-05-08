import * as Factory from 'factory.ts';
import { TagValue } from '../schema';
import { FakeTimestamp } from '../utils/FakeTimestamp';

export const makeTagFactory = (TimestampKlass: typeof FakeTimestamp) =>
  Factory.makeFactory<TagValue>({
    uid: Factory.each(i => i.toString()),
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    name: 'Sad',
    ordinal: 0,
    emoji: '😭',
  });
