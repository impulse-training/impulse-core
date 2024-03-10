import * as Factory from 'factory.ts';
import { ProgramValue } from '../schema';
import { TimestampLike } from '../utils/TimestampLike';
export declare const makeProgramFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<ProgramValue, "createdAt" | "updatedAt" | "uid" | "tacticsById" | "impulse" | "setback" | "success" | "time" | "location" | "forIssueIds" | "issueNames" | "issueNamesSummary" | "recommendationSummary">;
