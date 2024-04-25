import * as Factory from 'factory.ts';
import { ImpulseLogValue, LocationLogValue, TimeLogValue } from '../schema/log';
import { TimestampLike } from '../utils/firestore/TimestampLike';
export declare const makeImpulseLogFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<ImpulseLogValue, "createdAt" | "updatedAt" | "profileId" | "startTime" | "timezone" | "location" | "locationIsFetching" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "strategiesPath" | "tacticIds" | "tacticsById" | "type" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds" | "setAsActiveImpulse" | "pressCount" | "isDisplayable" | "patternId" | "patternIds" | "patternsById" | "debriefReminderSentAt" | "debriefedAt" | "debriefStrategiesPath">;
export declare const makeTimeLogFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<TimeLogValue, "createdAt" | "updatedAt" | "profileId" | "startTime" | "timezone" | "location" | "locationIsFetching" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "strategiesPath" | "tacticIds" | "tacticsById" | "type" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds" | "isDisplayable">;
export declare const makeLocationLogFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<LocationLogValue, "createdAt" | "updatedAt" | "profileId" | "startTime" | "timezone" | "location" | "locationIsFetching" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "strategiesPath" | "tacticIds" | "tacticsById" | "type" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds" | "isDisplayable" | "locationId" | "locationName" | "locationMode">;
