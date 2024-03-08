import * as Factory from 'factory.ts';
import { GameplanValue } from '../schema';
import { TimestampLike } from '../utils/TimestampLike';
export declare const makeGameplanFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<GameplanValue, "createdAt" | "updatedAt" | "uid" | "tacticsById" | "name" | "programId" | "parentIssueIds" | "impulse" | "impulseDebrief" | "time" | "location" | "scheduledNotificationIds" | "dontGenerateRecapTacticsForTacticIds">;
