import * as Factory from 'factory.ts';
import { CommentValue } from '../schema';
import { TimestampLike } from '../utils/TimestampLike';
export declare const makeCommentFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<CommentValue, keyof CommentValue>;
