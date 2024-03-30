import * as Factory from 'factory.ts';
import { ProfileValue } from '../schema';
import { TimestampLike } from '../utils/TimestampLike';
export declare const makeProfileFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<ProfileValue, "createdAt" | "updatedAt" | "tacticsById" | "parentIssueIds" | "timezone" | "scheduledStrategies" | "locationStrategies" | "activeImpulseId" | "currentAppState" | "lastActiveAt" | "expoPushToken" | "widgetInstalledAt" | "notificationPreferences" | "androidPermissions" | "region" | "invitationCode" | "programId" | "scheduledNotificationIds" | "impulseStrategiesByPatternId">;
