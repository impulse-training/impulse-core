import * as Factory from 'factory.ts';
import { TimestampLike } from '../utils/firestore/TimestampLike';
export declare const makeProfileFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
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
    setbackThreshold?: number | undefined;
    issueName?: string | undefined;
    parentIssueIds?: string[] | undefined;
    whatsappFolderDoc?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
    scheduledNotificationIds?: string[] | undefined;
    currentAppState?: import("react-native/types").AppStateStatus | undefined;
    addToSupportGroup?: boolean | undefined;
    emojiID?: string[] | undefined;
    expoPushToken?: string | undefined;
    notificationPreferences?: {
        [x: string]: NonNullable<"push" | "email" | undefined>[] | undefined;
    } | null | undefined;
    questionOfTheDayAnsweredQuestions?: {
        [x: string]: boolean | undefined;
    } | null | undefined;
    isReadyForTour?: boolean | undefined;
    isOnboardingComplete?: boolean | undefined;
    sendDebriefRemindersAfterMinutes?: number | undefined;
    gameplanStrategies?: import("../schema/utils/firestore").DocumentReferenceLike<unknown>[] | undefined;
    androidPermissions?: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    impulseContext?: string | null | undefined;
    region?: string | null | undefined;
    issueId: string | null;
    uids: string[];
    dayReviewTime: {
        hour: number;
        minute: number;
    } | null;
    timezone: string;
}, "issueId" | "uids" | "dayReviewTime" | "timezone" | ("createdAt" | "updatedAt" | "setbackThreshold" | "issueName" | "parentIssueIds" | "whatsappFolderDoc" | "lastActiveAt" | "widgetInstalledAt" | "widgetLastPressedAt" | "activeImpulseDoc" | "activeThreadDoc" | "scheduledNotificationIds" | "currentAppState" | "addToSupportGroup" | "emojiID" | "expoPushToken" | "notificationPreferences" | "questionOfTheDayAnsweredQuestions" | "isReadyForTour" | "isOnboardingComplete" | "sendDebriefRemindersAfterMinutes" | "gameplanStrategies" | "androidPermissions" | "impulseContext" | "region")>;
