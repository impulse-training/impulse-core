import * as Factory from 'factory.ts';
import { ImpulseLogValue, LocationLogValue, TimeLogValue } from '../schema/log';
import { TimestampLike } from '../utils/firestore/TimestampLike';
export declare const makeImpulseLogFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<ImpulseLogValue, "createdAt" | "updatedAt" | "profileId" | "type" | "tacticsById" | "location" | "startTime" | "timezone" | "locationIsFetching" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "strategyIds" | "seenTacticsById" | "completedTacticIds" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds" | "setAsActiveImpulse" | "pressCount" | "isDisplayable" | "buttonPressSecondsSinceEpoch" | "strategiesByPatternId" | "outcome" | "patternId" | "patternsById" | "debriefNotes" | "debriefReminderSentAt" | "debriefedAt">;
export declare const makeTimeLogFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<TimeLogValue, "createdAt" | "updatedAt" | "profileId" | "type" | "tacticsById" | "location" | "startTime" | "timezone" | "locationIsFetching" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "strategyIds" | "seenTacticsById" | "completedTacticIds" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds" | "isDisplayable">;
export declare const makeLocationLogFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<LocationLogValue, "createdAt" | "updatedAt" | "profileId" | "type" | "tacticsById" | "location" | "locationId" | "startTime" | "timezone" | "locationIsFetching" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "strategyIds" | "seenTacticsById" | "completedTacticIds" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds" | "isDisplayable" | "locationName" | "locationMode">;
