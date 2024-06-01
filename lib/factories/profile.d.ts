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
    setbackThreshold?: number | undefined;
    parentIssueIds?: string[] | undefined;
    lastActiveAt?: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    widgetInstalledAt?: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    activeImpulseId?: string | undefined;
    currentAppState?: import("react-native/types").AppStateStatus | undefined;
    expoPushToken?: string | undefined;
    notificationPreferences?: {
        [x: string]: NonNullable<"push" | "email" | undefined>[] | undefined;
    } | null | undefined;
    issueName?: string | undefined;
    isTourCompleted?: boolean | undefined;
    androidPermissions?: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    region?: string | null | undefined;
    scheduledNotificationIds?: string[] | undefined;
    timezone: string;
    issueId: string | null;
    uids: string[];
}, "timezone" | "issueId" | "uids" | ("createdAt" | "updatedAt" | "setbackThreshold" | "parentIssueIds" | "lastActiveAt" | "widgetInstalledAt" | "activeImpulseId" | "currentAppState" | "expoPushToken" | "notificationPreferences" | "issueName" | "isTourCompleted" | "androidPermissions" | "region" | "scheduledNotificationIds")>;
