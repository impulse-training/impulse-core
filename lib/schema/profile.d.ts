import { AppStateStatus } from 'react-native';
import * as yup from 'yup';
export declare const profileSchema: yup.ObjectSchema<{
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    activeImpulseId: string | undefined;
    currentAppState: AppStateStatus | undefined;
    lastActiveAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    expoPushToken: string | undefined;
    widgetInstalledAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    notificationPreferences: {
        [x: string]: NonNullable<"push" | "email" | undefined>[] | undefined;
    } | null | undefined;
    supportGroups: {
        seenTacticIds: string[];
        docRefs: import("./utils/firestore").DocumentReferenceLike<unknown>[];
    };
    suggestedSupportGroups: {
        seenTacticIds: string[];
        docRefs: import("./utils/firestore").DocumentReferenceLike<unknown>[];
    };
    issueId: string | null;
    issueName: string | undefined;
    parentIssueIds: string[] | undefined;
    setbackThreshold: number | undefined;
    isTourCompleted: boolean | undefined;
    androidPermissions: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    region: string | null | undefined;
    timezone: string;
    scheduledNotificationIds: string[] | undefined;
    uids: string[];
}, yup.AnyObject, {
    createdAt: undefined;
    updatedAt: undefined;
    activeImpulseId: undefined;
    currentAppState: undefined;
    lastActiveAt: undefined;
    expoPushToken: undefined;
    widgetInstalledAt: undefined;
    notificationPreferences: undefined;
    supportGroups: {
        seenTacticIds: "";
        docRefs: "";
    };
    suggestedSupportGroups: {
        seenTacticIds: "";
        docRefs: "";
    };
    issueId: undefined;
    issueName: undefined;
    parentIssueIds: "";
    setbackThreshold: undefined;
    isTourCompleted: undefined;
    androidPermissions: undefined;
    region: undefined;
    timezone: undefined;
    scheduledNotificationIds: "";
    uids: "";
}, "">;
export type ProfileValue = yup.InferType<typeof profileSchema>;
