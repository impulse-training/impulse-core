import * as Factory from 'factory.ts';
import { ThreadValue } from '../schema';
import { TimestampLike } from '../utils/firestore/TimestampLike';
export declare const makeThreadFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<ThreadValue, "date" | "dateString" | "logsById" | "agentType" | ("createdAt" | "updatedAt" | "title" | "outcome" | "debriefedAt" | "debriefAfter" | "debriefRoutineSentAt" | "summary" | "behaviorsById" | "suggestedTactics" | "hasImpulse")>;
