import * as Factory from 'factory.ts';
import { TimestampLike } from '../utils/firestore/TimestampLike';
export declare const makeProfileFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
    setbackThreshold?: number | undefined;
    createdAt?: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt?: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    parentIds?: string[] | undefined;
    blandPathwayId?: string | undefined;
    issuesById?: {
        [x: string]: {
            path?: string | null | undefined;
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
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
            recommendedStrategies?: import("../schema/utils/firestore").DocumentReferenceLike<unknown>[] | undefined;
            strategyOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            gameplanTactics?: import("../schema/utils/firestore").DocumentReferenceLike<unknown>[] | undefined;
            name: string;
        };
    } | null | undefined;
    lastActiveAt?: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    widgetInstalledAt?: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    widgetLastPressedAt?: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    activeImpulseDoc?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
    activeThreadDoc?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
    tourCompletedAt?: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    scheduledNotificationIds?: string[] | undefined;
    whatsappStrategyDoc?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
    onboardedWithZaraAt?: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    currentAppState?: import("react-native/types").AppStateStatus | undefined;
    addToStrategy?: boolean | undefined;
    emojiID?: string[] | undefined;
    expoPushToken?: string | undefined;
    notificationPreferences?: {
        [x: string]: NonNullable<"push" | "email" | undefined>[] | undefined;
    } | null | undefined;
    questionOfTheDayAnsweredQuestions?: {
        [x: string]: boolean | undefined;
    } | null | undefined;
    signUpIssueName?: string | null | undefined;
    isReadyForTour?: boolean | undefined;
    isOnboardingComplete?: boolean | undefined;
    sendDebriefRemindersAfterMinutes?: number | undefined;
    gameplanStrategies?: import("../schema/utils/firestore").DocumentReferenceLike<unknown>[] | undefined;
    androidPermissions?: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    impulseContext?: string | null | undefined;
    isTourDismissed?: boolean | undefined;
    region?: string | null | undefined;
    enableZara?: boolean | undefined;
    uids: string[];
    verificationCode: string;
    dayReviewTime: {
        hour: number;
        minute: number;
    } | null;
    signUpIssueId: string | null;
    timezone: string;
}, "uids" | "verificationCode" | "dayReviewTime" | "signUpIssueId" | "timezone" | ("setbackThreshold" | "createdAt" | "updatedAt" | "parentIds" | "blandPathwayId" | "issuesById" | "lastActiveAt" | "widgetInstalledAt" | "widgetLastPressedAt" | "activeImpulseDoc" | "activeThreadDoc" | "tourCompletedAt" | "scheduledNotificationIds" | "whatsappStrategyDoc" | "onboardedWithZaraAt" | "currentAppState" | "addToStrategy" | "emojiID" | "expoPushToken" | "notificationPreferences" | "questionOfTheDayAnsweredQuestions" | "signUpIssueName" | "isReadyForTour" | "isOnboardingComplete" | "sendDebriefRemindersAfterMinutes" | "gameplanStrategies" | "androidPermissions" | "impulseContext" | "isTourDismissed" | "region" | "enableZara")>;
