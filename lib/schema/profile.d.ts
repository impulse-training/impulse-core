import { AppStateStatus } from 'react-native';
import * as yup from 'yup';
export declare const profileSchema: yup.ObjectSchema<{
    createdAt: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    lastActiveAt: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    widgetInstalledAt: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    widgetLastPressedAt: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    currentAppState: AppStateStatus | undefined;
    expoPushToken: string | undefined;
    notificationPreferences: {
        [x: string]: NonNullable<"push" | "email" | undefined>[] | undefined;
    } | null | undefined;
    goal: string | null | undefined;
    verificationCode: string;
    dayReviewTimeMinutes: number | null | undefined;
    isReadyForTour: boolean | undefined;
    isOnboardingComplete: boolean | undefined;
    parentIds: string[] | undefined;
    debriefReminderDelayMinutes: number | null | undefined;
    androidPermissions: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    defaultBehaviorDoc: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
    behaviorsDescription: string | undefined;
    initialImpulseMode: "text" | "liveAudio" | undefined;
    historicalInsights: string[] | undefined;
    recentSummaries: {
        [x: string]: string;
    };
    activeThread: {
        doc: import("./utils/firestore").DocumentReferenceLike<unknown>;
        expiresAt: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        };
    } | undefined;
    isTourDismissed: boolean | undefined;
    tourCompletedAt: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    region: string | null | undefined;
    timezone: string;
    scheduledNotificationIds: string[] | undefined;
    whatsappStrategyDoc: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
    uids: string[];
    onboardedWithZaraAt: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    enableZara: boolean | undefined;
}, yup.AnyObject, {
    createdAt: undefined;
    updatedAt: undefined;
    lastActiveAt: undefined;
    widgetInstalledAt: undefined;
    widgetLastPressedAt: undefined;
    currentAppState: undefined;
    expoPushToken: undefined;
    notificationPreferences: undefined;
    goal: undefined;
    verificationCode: undefined;
    dayReviewTimeMinutes: undefined;
    isReadyForTour: undefined;
    isOnboardingComplete: undefined;
    parentIds: "";
    debriefReminderDelayMinutes: undefined;
    androidPermissions: undefined;
    defaultBehaviorDoc: undefined;
    behaviorsDescription: undefined;
    initialImpulseMode: undefined;
    historicalInsights: "";
    recentSummaries: undefined;
    activeThread: {
        doc: undefined;
        expiresAt: {
            seconds: undefined;
            nanoseconds: undefined;
            isEqual: undefined;
            toMillis: undefined;
            toDate: undefined;
        };
    };
    isTourDismissed: undefined;
    tourCompletedAt: undefined;
    region: undefined;
    timezone: undefined;
    scheduledNotificationIds: "";
    whatsappStrategyDoc: undefined;
    uids: "";
    onboardedWithZaraAt: undefined;
    enableZara: undefined;
}, "">;
export type ProfileValue = yup.InferType<typeof profileSchema>;
