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
    activeImpulseDoc: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
    currentAppState: AppStateStatus | undefined;
    addToStrategy: boolean | undefined;
    emojiID: string[] | undefined;
    expoPushToken: string | undefined;
    notificationPreferences: {
        [x: string]: NonNullable<"push" | "email" | undefined>[] | undefined;
    } | null | undefined;
    verificationCode: string;
    dayReviewTime: {
        hour: number;
        minute: number;
    } | null;
    issuesById: {
        [x: string]: {
            path?: string | null | undefined;
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            ordinal?: number | undefined;
            parentId?: string | null | undefined;
            parentName?: string | null | undefined;
            hasDebriefQuestion?: boolean | undefined;
            synonyms?: string[] | undefined;
            parentIds?: string[] | undefined;
            parentNames?: string[] | undefined;
            profileCount?: number | null | undefined;
            isFeatured?: boolean | null | undefined;
            blandContext?: string | undefined;
            recommendedStrategies?: import("./utils/firestore").DocumentReferenceLike<unknown>[] | undefined;
            strategyOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            gameplanTactics?: import("./utils/firestore").DocumentReferenceLike<unknown>[] | undefined;
            name: string;
        };
    } | null | undefined;
    signUpIssueId: string | null;
    signUpIssueName: string | null | undefined;
    isReadyForTour: boolean | undefined;
    isOnboardingComplete: boolean | undefined;
    parentIds: string[] | undefined;
    sendDebriefRemindersAfterMinutes: number | undefined;
    gameplanStrategies: import("./utils/firestore").DocumentReferenceLike<unknown>[] | undefined;
    androidPermissions: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    historicalInsights: string[] | undefined;
    recentSummaries: {
        [x: string]: string;
    };
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
    activeImpulseDoc: undefined;
    currentAppState: undefined;
    addToStrategy: undefined;
    emojiID: "";
    expoPushToken: undefined;
    notificationPreferences: undefined;
    verificationCode: undefined;
    dayReviewTime: null;
    issuesById: undefined;
    signUpIssueId: undefined;
    signUpIssueName: undefined;
    isReadyForTour: undefined;
    isOnboardingComplete: undefined;
    parentIds: "";
    sendDebriefRemindersAfterMinutes: undefined;
    gameplanStrategies: "";
    androidPermissions: undefined;
    historicalInsights: "";
    recentSummaries: undefined;
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
