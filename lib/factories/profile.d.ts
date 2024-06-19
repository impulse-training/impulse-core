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
    issueName?: string | undefined;
    parentIssueIds?: string[] | undefined;
    setbackThreshold?: number | undefined;
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
    widgetLastPressedAt?: {
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
    encryptedPhoneNumber?: string | undefined;
    hashedPhoneNumber?: string | undefined;
    isTourCompleted?: boolean | undefined;
    androidPermissions?: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    region?: string | null | undefined;
    scheduledNotificationIds?: string[] | undefined;
    issueId: string | null;
    timezone: string;
    uids: string[];
}, "issueId" | "timezone" | "uids" | ("createdAt" | "updatedAt" | "issueName" | "parentIssueIds" | "setbackThreshold" | "lastActiveAt" | "widgetInstalledAt" | "widgetLastPressedAt" | "activeImpulseId" | "currentAppState" | "expoPushToken" | "notificationPreferences" | "encryptedPhoneNumber" | "hashedPhoneNumber" | "isTourCompleted" | "androidPermissions" | "region" | "scheduledNotificationIds")>;
