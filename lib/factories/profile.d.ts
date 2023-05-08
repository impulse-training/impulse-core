import * as Factory from 'factory.ts';
import { ProfileValue } from '../schema';
import { FakeTimestamp } from '../utils/FakeTimestamp';
export declare const makeProfileFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<ProfileValue, keyof ProfileValue>;
export declare const makeAdminProfileFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<ProfileValue, keyof ProfileValue>;
