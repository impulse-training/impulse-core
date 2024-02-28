import * as Factory from 'factory.ts';
import { GameplanValue } from '../schema';
import { TimestampLike } from '../utils/TimestampLike';
export declare const makeGameplanFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<GameplanValue, "uid" | "updatedAt" | "createdAt" | "parentIssueIds" | "tacticsById" | "recommendationsCount" | "impulse" | "impulseDebrief" | "routine" | "routinesById" | "patternsById">;
