import * as Factory from 'factory.ts';
import { MessageValue } from '../schema';
import { TimestampLike } from '../utils/firestore/TimestampLike';

export const makeMessageFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<MessageValue>({
    fromProfileId: 'abc123',
    fromName: 'John Doe',
    text: 'Hello World',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
  });
