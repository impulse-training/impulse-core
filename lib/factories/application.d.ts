import * as Factory from 'factory.ts';
import { ApplicationValue } from '../schema';
import { TimestampLike } from '../utils/TimestampLike';
export declare const makeApplicationFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<ApplicationValue, keyof ApplicationValue>;
