import * as Factory from 'factory.ts';
import { CommentValue } from '../schema';
import { TimestampLike } from '../utils/TimestampLike';

export const makeCommentFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<CommentValue>({
    profileId: 'abc123',
    authorName: 'Moopy',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    text: 'This is a comment',
  });
