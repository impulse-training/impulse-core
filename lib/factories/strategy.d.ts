import * as Factory from 'factory.ts';
import { StrategyValue } from '../schema';
import { TimestampLike } from '../utils/TimestampLike';
export declare const makeStrategyFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<StrategyValue, "createdAt" | "updatedAt" | "type" | "title" | "tacticsById" | "forIssueIds" | "tacticIds" | "issueNames" | "issueNamesSummary" | "recommendationSummary">;
