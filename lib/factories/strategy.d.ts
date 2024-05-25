import * as Factory from 'factory.ts';
import { StrategyValue } from '../schema';
import { TimestampLike } from '../utils/firestore/TimestampLike';
export declare const makeStrategyFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<StrategyValue, "createdAt" | "updatedAt" | "profileId" | "type" | "ordinal" | "tacticsById" | "tacticIds" | "name" | "recommendedForIssueIds" | "recommendedFor" | "recommendedForIssueOrdinals" | "subscribeToAllTactics" | "supportGroup">;
