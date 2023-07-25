import * as Factory from 'factory.ts';
import { IssueValue } from '../schema';
import { FakeTimestamp } from '../utils/FakeTimestamp';
export declare const makeIssueFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<IssueValue, keyof IssueValue>;
