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
    activeImpulseDoc?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
    parentIssueIds?: string[] | undefined;
    scheduledNotificationIds?: string[] | undefined;
    currentAppState?: import("react-native/types").AppStateStatus | undefined;
    expoPushToken?: string | undefined;
    notificationPreferences?: {
        [x: string]: NonNullable<"push" | "email" | undefined>[] | undefined;
    } | null | undefined;
    issueName?: string | undefined;
    isReadyForTour?: boolean | undefined;
    isOnboardingComplete?: boolean | undefined;
    setbackThreshold?: number | undefined;
    androidPermissions?: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    longTermMemory?: {
        [x: string]: {
            label?: string | undefined;
            idValue?: string | undefined;
            numericValue?: number | undefined;
            labelColor?: string | undefined;
            setAt: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            stringValue: string;
            unit: string;
        };
    } | null | undefined;
    region?: string | null | undefined;
    uids: string[];
    issueId: string | null;
    currentAgent: import("..").AgentName;
    timezone: string;
}, "uids" | "issueId" | "currentAgent" | "timezone" | ("createdAt" | "updatedAt" | "lastActiveAt" | "widgetInstalledAt" | "widgetLastPressedAt" | "activeImpulseDoc" | "parentIssueIds" | "scheduledNotificationIds" | "currentAppState" | "expoPushToken" | "notificationPreferences" | "issueName" | "isReadyForTour" | "isOnboardingComplete" | "setbackThreshold" | "androidPermissions" | "longTermMemory" | "region")>;
