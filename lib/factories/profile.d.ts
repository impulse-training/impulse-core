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
    roadmap?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
    scheduledNotificationIds?: string[] | undefined;
    currentAppState?: import("react-native/types").AppStateStatus | undefined;
    expoPushToken?: string | undefined;
    notificationPreferences?: {
        [x: string]: NonNullable<"push" | "email" | undefined>[] | undefined;
    } | null | undefined;
    impulseCanManageQuestions?: boolean | undefined;
    impulseCanManageGameplan?: boolean | undefined;
    issueDebriefQuestionPrompt?: string | undefined;
    isReadyForTour?: boolean | undefined;
    isOnboardingComplete?: boolean | undefined;
    sendDebriefRemindersAfterMinutes?: number | undefined;
    gameplanStrategies?: import("../schema/utils/firestore").DocumentReferenceLike<unknown>[] | undefined;
    androidPermissions?: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    impulseContext?: string | null | undefined;
    longTermMemory?: {
        [x: string]: {
            label?: string | undefined;
            setbackThreshold?: number | undefined;
            color?: string | undefined;
            idValue?: string | undefined;
            numericValue?: number | undefined;
            setAt: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            stringValue: string;
            unit: string;
        };
    } | null | undefined;
    region?: string | null | undefined;
    dayReview: "morning" | "evening" | null;
    uids: string[];
    issueId: string | null;
    timezone: string;
}, "dayReview" | "uids" | "issueId" | "timezone" | ("createdAt" | "updatedAt" | "setbackThreshold" | "issueName" | "parentIssueIds" | "whatsappFolderDoc" | "lastActiveAt" | "widgetInstalledAt" | "widgetLastPressedAt" | "activeImpulseDoc" | "activeThreadDoc" | "roadmap" | "scheduledNotificationIds" | "currentAppState" | "expoPushToken" | "notificationPreferences" | "impulseCanManageQuestions" | "impulseCanManageGameplan" | "issueDebriefQuestionPrompt" | "isReadyForTour" | "isOnboardingComplete" | "sendDebriefRemindersAfterMinutes" | "gameplanStrategies" | "androidPermissions" | "impulseContext" | "longTermMemory" | "region")>;
