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
    lastActiveAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    widgetInstalledAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    activeImpulseId: string | undefined;
    currentAppState: AppStateStatus | undefined;
    expoPushToken: string | undefined;
    notificationPreferences: {
        [x: string]: NonNullable<"push" | "email" | undefined>[] | undefined;
    } | null | undefined;
    issueId: string | null;
    issueName: string | undefined;
    parentIssueIds: string[] | undefined;
    hashedPhoneNumber: string | undefined;
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
    lastActiveAt: undefined;
    widgetInstalledAt: undefined;
    activeImpulseId: undefined;
    currentAppState: undefined;
    expoPushToken: undefined;
    notificationPreferences: undefined;
    issueId: undefined;
    issueName: undefined;
    parentIssueIds: "";
    hashedPhoneNumber: undefined;
    setbackThreshold: undefined;
    isTourCompleted: undefined;
    androidPermissions: undefined;
    region: undefined;
    timezone: undefined;
    scheduledNotificationIds: "";
    uids: "";
}, "">;
export type ProfileValue = yup.InferType<typeof profileSchema>;
