import * as Factory from 'factory.ts';
import { LocationValue } from '../schema';
import { TimestampLike } from '../utils/TimestampLike';
export declare const makeLocationFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<LocationValue, keyof LocationValue>;
