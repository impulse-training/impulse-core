import * as Factory from 'factory.ts';
import { TimestampLike } from '../utils/firestore/TimestampLike';
export declare const makeProfileFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
    createdAt?: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt?: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    activeImpulseId?: string | undefined;
    currentAppState?: import("react-native/types").AppStateStatus | undefined;
    lastActiveAt?: Date | undefined;
    expoPushToken?: string | undefined;
    widgetInstalledAt?: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    notificationPreferences?: {
        [x: string]: NonNullable<"push" | "email" | undefined>[] | undefined;
    } | null | undefined;
    isTourCompleted?: boolean | undefined;
    defaultNickname?: string | undefined;
    androidPermissions?: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    parentIssueIds?: string[] | undefined;
    region?: string | null | undefined;
    scheduledNotificationIds?: string[] | undefined;
    seenRecommendedStrategyIds?: string[] | undefined;
    timezone: string;
    invitationCode: string;
}, "timezone" | "invitationCode" | ("createdAt" | "updatedAt" | "activeImpulseId" | "currentAppState" | "lastActiveAt" | "expoPushToken" | "widgetInstalledAt" | "notificationPreferences" | "isTourCompleted" | "defaultNickname" | "androidPermissions" | "parentIssueIds" | "region" | "scheduledNotificationIds" | "seenRecommendedStrategyIds")>;
