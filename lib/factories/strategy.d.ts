import * as Factory from 'factory.ts';
import { StrategyValue } from '../schema';
import { TimestampLike } from '../utils/firestore/TimestampLike';
export declare const makeStrategyFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<StrategyValue, "createdAt" | "updatedAt" | "profileId" | "name" | "recommendedFor" | "recommendedForIssueIds" | "recommendedForIssueOrdinals" | "type" | "ordinal" | "tacticsById" | "tacticIds" | "subscribeToAllTactics" | "stream">;
