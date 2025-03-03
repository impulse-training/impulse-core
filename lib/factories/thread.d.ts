import * as Factory from 'factory.ts';
import { ThreadValue } from '../schema';
import { TimestampLike } from '../utils/firestore/TimestampLike';
export declare const makeThreadFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<ThreadValue, "date" | "isDisplayable" | "dateString" | "logsById" | "navigationTitle" | "agentType" | ("createdAt" | "updatedAt" | "title" | "outcome" | "debriefedAt" | "debriefAfter" | "debriefRoutineSentAt" | "zaraResponseStartedProcessingAt" | "summary" | "suggestedTactics" | "hasImpulse")>;
