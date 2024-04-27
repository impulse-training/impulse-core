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
    lastActiveAt: Date | undefined;
    expoPushToken: string | undefined;
    widgetInstalledAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    notificationPreferences: {
        [x: string]: NonNullable<"push" | "email" | undefined>[] | undefined;
    } | null | undefined;
    isTourCompleted: boolean | undefined;
    defaultNickname: string | undefined;
    androidPermissions: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    parentIssueIds: string[] | undefined;
    region: string | null | undefined;
    timezone: string;
    invitationCode: string;
    scheduledNotificationIds: string[] | undefined;
    seenRecommendedStrategyIds: string[] | undefined;
}, yup.AnyObject, {
    createdAt: undefined;
    updatedAt: undefined;
    activeImpulseId: undefined;
    currentAppState: undefined;
    lastActiveAt: undefined;
    expoPushToken: undefined;
    widgetInstalledAt: undefined;
    notificationPreferences: undefined;
    isTourCompleted: undefined;
    defaultNickname: undefined;
    androidPermissions: undefined;
    parentIssueIds: "";
    region: undefined;
    timezone: undefined;
    invitationCode: undefined;
    scheduledNotificationIds: "";
    seenRecommendedStrategyIds: "";
}, "">;
export type ProfileValue = yup.InferType<typeof profileSchema>;
