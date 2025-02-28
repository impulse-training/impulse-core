import * as Factory from 'factory.ts';
import { TimestampLike } from '../utils/firestore/TimestampLike';
export declare const makeProfileFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
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
    parentIds?: string[] | undefined;
    lastActiveAt?: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    widgetInstalledAt?: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    widgetLastPressedAt?: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    defaultBehaviorDoc?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
    tourCompletedAt?: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    scheduledNotificationIds?: string[] | undefined;
    whatsappStrategyDoc?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
    onboardedWithZaraAt?: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    currentAppState?: import("react-native/types").AppStateStatus | undefined;
    expoPushToken?: string | undefined;
    notificationPreferences?: {
        [x: string]: NonNullable<"push" | "email" | undefined>[] | undefined;
    } | null | undefined;
    goal?: string | null | undefined;
    dayReviewTimeMinutes?: number | null | undefined;
    isReadyForTour?: boolean | undefined;
    isOnboardingComplete?: boolean | undefined;
    debriefReminderDelayMinutes?: number | null | undefined;
    androidPermissions?: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    behaviorsDescription?: string | undefined;
    initialImpulseMode?: "text" | "liveAudio" | undefined;
    historicalInsights?: string[] | undefined;
    activeThread?: {
        doc: import("../schema/utils/firestore").DocumentReferenceLike<unknown>;
        expiresAt: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        };
    } | undefined;
    isTourDismissed?: boolean | undefined;
    region?: string | null | undefined;
    enableZara?: boolean | undefined;
    uids: string[];
    verificationCode: string;
    recentSummaries: {
        [x: string]: string;
    };
    timezone: string;
}, "uids" | "verificationCode" | "recentSummaries" | "timezone" | ("createdAt" | "updatedAt" | "parentIds" | "lastActiveAt" | "widgetInstalledAt" | "widgetLastPressedAt" | "defaultBehaviorDoc" | "tourCompletedAt" | "scheduledNotificationIds" | "whatsappStrategyDoc" | "onboardedWithZaraAt" | "currentAppState" | "expoPushToken" | "notificationPreferences" | "goal" | "dayReviewTimeMinutes" | "isReadyForTour" | "isOnboardingComplete" | "debriefReminderDelayMinutes" | "androidPermissions" | "behaviorsDescription" | "initialImpulseMode" | "historicalInsights" | "activeThread" | "isTourDismissed" | "region" | "enableZara")>;
