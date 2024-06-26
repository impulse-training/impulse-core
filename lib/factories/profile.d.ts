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
    issueName?: string | undefined;
    isOnboardingComplete?: boolean | undefined;
    parentIssueIds?: string[] | undefined;
    encryptedPhoneNumber?: string | undefined;
    hashedPhoneNumber?: string | undefined;
    setbackThreshold?: number | undefined;
    androidPermissions?: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    longTermMemory?: {
        [x: string]: {} | null | undefined;
    } | null | undefined;
    region?: string | null | undefined;
    scheduledNotificationIds?: string[] | undefined;
    issueId: string | null;
    currentAgent: import("..").AgentName;
    timezone: string;
    uids: string[];
}, "issueId" | "currentAgent" | "timezone" | "uids" | ("createdAt" | "updatedAt" | "lastActiveAt" | "widgetInstalledAt" | "widgetLastPressedAt" | "activeImpulseId" | "currentAppState" | "expoPushToken" | "notificationPreferences" | "issueName" | "isOnboardingComplete" | "parentIssueIds" | "encryptedPhoneNumber" | "hashedPhoneNumber" | "setbackThreshold" | "androidPermissions" | "longTermMemory" | "region" | "scheduledNotificationIds")>;
