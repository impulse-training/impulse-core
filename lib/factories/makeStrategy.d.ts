import * as Factory from 'factory.ts';
import { StrategyValue } from '../schema';
import { TimestampLike } from '../utils/firestore/TimestampLike';
export declare const makeStrategy: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<StrategyValue, "createdAt" | "updatedAt" | "type" | "ordinal" | "docData" | "docRef">;
