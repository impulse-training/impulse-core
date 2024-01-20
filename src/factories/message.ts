import * as Factory from 'factory.ts';
import { MessageValue } from '../schema';
import { FakeTimestamp } from '../utils/FakeTimestamp';

export const makeMessageFactory = (TimestampKlass: typeof FakeTimestamp) =>
  Factory.makeFactory<MessageValue>({
    fromUid: 'abc123',
    fromName: 'John Doe',
    text: 'Hello World',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
  });
