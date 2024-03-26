import * as Factory from 'factory.ts';
import { ProgramValue } from '../schema';
import { TimestampLike } from '../utils/TimestampLike';
export declare const makeProgramFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<ProgramValue, "createdAt" | "updatedAt" | "title" | "tacticsById" | "forIssueIds" | "issueNames" | "issueNamesSummary" | "recommendationSummary" | "impulseStrategies" | "scheduledStrategies" | "locationStrategies">;
