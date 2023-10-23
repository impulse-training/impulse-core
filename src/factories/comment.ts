import * as Factory from 'factory.ts';
import { CommentValue } from '../schema';
import { FakeTimestamp } from '../utils/FakeTimestamp';

export const makeCommentFactory = (TimestampKlass: typeof FakeTimestamp) =>
  Factory.makeFactory<CommentValue>({
    uid: 'abc123',
    authorName: 'Moopy',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    text: 'This is a comment',
  });
