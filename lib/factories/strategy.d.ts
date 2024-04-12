import * as Factory from 'factory.ts';
import { StrategyValue } from '../schema';
import { TimestampLike } from '../utils/firestore/TimestampLike';
export declare const makeStrategyFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<StrategyValue, "tacticsById" | "name" | "tacticIds" | ("createdAt" | "updatedAt" | "ordinal" | "profileId")>;
