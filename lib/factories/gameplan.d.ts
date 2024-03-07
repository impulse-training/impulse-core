import * as Factory from 'factory.ts';
import { GameplanValue } from '../schema';
import { TimestampLike } from '../utils/TimestampLike';
export declare const makeGameplanFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<GameplanValue, "createdAt" | "updatedAt" | "uid" | "name" | "parentIssueIds" | "tacticsById" | "recap" | "isFeatured" | "impulse" | "impulseDebrief" | "time" | "location" | "patternsById" | "scheduledNotificationIds" | "dontGenerateRecapTacticsForTacticIds">;
