import * as Factory from 'factory.ts';
import { ImpulseLogValue, LocationLogValue, TimeLogValue } from '../schema/log';
import { TimestampLike } from '../utils/firestore/TimestampLike';
export declare const makeImpulseLogFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<ImpulseLogValue, "createdAt" | "updatedAt" | "profileId" | "type" | "strategiesPath" | "tacticsById" | "startTime" | "timezone" | "location" | "locationIsFetching" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "tacticIds" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds" | "setAsActiveImpulse" | "isDisplayable" | "debriefTactic" | "debriefAfter" | "debriefReminderSentAt" | "debriefedAt">;
export declare const makeTimeLogFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<TimeLogValue, "createdAt" | "updatedAt" | "profileId" | "type" | "strategiesPath" | "tacticsById" | "startTime" | "timezone" | "location" | "locationIsFetching" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "tacticIds" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds" | "isDisplayable">;
export declare const makeLocationLogFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<LocationLogValue, "createdAt" | "updatedAt" | "profileId" | "type" | "strategiesPath" | "tacticsById" | "startTime" | "timezone" | "location" | "locationIsFetching" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "tacticIds" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds" | "isDisplayable" | "locationId" | "locationName" | "locationMode">;
