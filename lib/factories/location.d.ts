import * as Factory from 'factory.ts';
import { TimestampLike } from '../utils/TimestampLike';
export declare const makeLocationFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
    createdAt?: TimestampLike | import("yup").Maybe<null>;
    updatedAt?: TimestampLike | import("yup").Maybe<null>;
    latitude?: number | undefined;
    longitude?: number | undefined;
    uid: string;
    name: string;
    address: string;
}, "uid" | "name" | "address" | ("createdAt" | "updatedAt" | "latitude" | "longitude")>;
