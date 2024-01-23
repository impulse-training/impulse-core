import * as Factory from 'factory.ts';
import { ProfileValue } from '../schema';
import { TimestampLike } from '../utils/TimestampLike';
export declare const makeProfileFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<ProfileValue, keyof ProfileValue>;
export declare const makeAdminProfileFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<ProfileValue, keyof ProfileValue>;
