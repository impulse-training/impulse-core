import * as Factory from 'factory.ts';
import { ChallengeValue } from '../schema';
import { FakeTimestamp } from '../utils/FakeTimestamp';
export declare const makeChallengeFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<ChallengeValue, keyof ChallengeValue>;
