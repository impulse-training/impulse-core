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
    debriefAfterMinutes?: number | undefined;
    debriefTactic?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
    activeImpulseId?: string | undefined;
    currentAppState?: import("react-native/types").AppStateStatus | undefined;
    lastActiveAt?: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    expoPushToken?: string | undefined;
    widgetInstalledAt?: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    notificationPreferences?: {
        [x: string]: NonNullable<"push" | "email" | undefined>[] | undefined;
    } | null | undefined;
    issueName?: string | undefined;
    isTourCompleted?: boolean | undefined;
    androidPermissions?: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    parentIssueIds?: string[] | undefined;
    region?: string | null | undefined;
    scheduledNotificationIds?: string[] | undefined;
    timezone: string;
    invitationCode: string;
    supportGroups: import("../schema/utils/firestore").DocumentReferenceLike<unknown>[];
    uids: string[];
}, "timezone" | "invitationCode" | "supportGroups" | "uids" | ("createdAt" | "updatedAt" | "setbackThreshold" | "debriefAfterMinutes" | "debriefTactic" | "activeImpulseId" | "currentAppState" | "lastActiveAt" | "expoPushToken" | "widgetInstalledAt" | "notificationPreferences" | "issueName" | "isTourCompleted" | "androidPermissions" | "parentIssueIds" | "region" | "scheduledNotificationIds")>;
