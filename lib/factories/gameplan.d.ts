import * as Factory from 'factory.ts';
import { ImpulseGameplanValue, LocationGameplanValue, TimeGameplanValue } from '../schema/gameplan';
import { TimestampLike } from '../utils/TimestampLike';
export declare const makeImpulseGameplanFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<ImpulseGameplanValue, "type" | "uid" | "createdAt" | "updatedAt" | "tacticIds" | "tacticsById" | "suggestedTacticIds" | "patternId" | ("title" | "isTemplate" | "navigationTitle" | "timezone" | "patternName" | "issueId" | "parentIssueIds")>;
export declare const makeLocationGameplanFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<LocationGameplanValue, "type" | "uid" | "createdAt" | "updatedAt" | "tacticIds" | "tacticsById" | "suggestedTacticIds" | "mode" | ("title" | "isTemplate" | "navigationTitle" | "timezone" | "patternName" | "issueId" | "parentIssueIds" | "locationId")>;
export declare const makeTimeGameplanFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<TimeGameplanValue, "type" | "uid" | "createdAt" | "updatedAt" | "tacticIds" | "tacticsById" | "suggestedTacticIds" | "timezone" | "weekdays" | "hour" | "minute" | ("title" | "isTemplate" | "navigationTitle" | "patternName" | "issueId" | "parentIssueIds" | "scheduledNotificationIds")>;
export declare const makeSetbackGameplanFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<ImpulseGameplanValue, "type" | "uid" | "createdAt" | "updatedAt" | "tacticIds" | "tacticsById" | "suggestedTacticIds" | "patternId" | ("title" | "isTemplate" | "navigationTitle" | "timezone" | "patternName" | "issueId" | "parentIssueIds")>;
export declare const makeSuccessGameplanFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<ImpulseGameplanValue, "type" | "uid" | "createdAt" | "updatedAt" | "tacticIds" | "tacticsById" | "suggestedTacticIds" | "patternId" | ("title" | "isTemplate" | "navigationTitle" | "timezone" | "patternName" | "issueId" | "parentIssueIds")>;
