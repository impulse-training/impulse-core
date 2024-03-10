import * as Factory from 'factory.ts';
import { GameplanValue } from '../schema';
import { TimestampLike } from '../utils/TimestampLike';
export declare const makeGameplanFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<GameplanValue, "createdAt" | "updatedAt" | "uid" | "tacticsById" | "main" | "success" | "setback" | "name" | "programId" | "parentIssueIds" | "measureTacticIds" | "time" | "location" | "scheduledNotificationIds">;
