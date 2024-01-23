import * as Factory from 'factory.ts';
import { IssueValue } from '../schema';
import { TimestampLike } from '../utils/TimestampLike';
export declare const makeIssueFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<IssueValue, keyof IssueValue>;
