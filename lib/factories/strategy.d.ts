import * as Factory from 'factory.ts';
import { ImpulseStrategyValue, TimeStrategyValue } from '../schema';
import { TimestampLike } from '../utils/TimestampLike';
export declare const makeImpulseStrategyFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<ImpulseStrategyValue, "type" | "tacticsById" | "tacticIds" | "name" | ("createdAt" | "updatedAt" | "ordinal")>;
export declare const makeTimeStrategyFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<TimeStrategyValue, "type" | "tacticsById" | "tacticIds" | "name" | "weekdays" | "hour" | "minute" | ("createdAt" | "updatedAt" | "ordinal")>;
