import * as Factory from 'factory.ts';
import { CommentValue } from '../schema';
import { FakeTimestamp } from '../utils/FakeTimestamp';
export declare const makeCommentFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<CommentValue, keyof CommentValue>;
