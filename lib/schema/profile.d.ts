import { AppStateStatus } from 'react-native';
import * as yup from 'yup';
export declare const profileSchema: yup.ObjectSchema<{
    createdAt: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    lastActiveAt: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    widgetInstalledAt: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    widgetLastPressedAt: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    activeImpulseDoc: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
    activeThreadDoc: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
    currentAppState: AppStateStatus | undefined;
    addToSupportGroup: boolean | undefined;
    emojiID: string[] | undefined;
    expoPushToken: string | undefined;
    notificationPreferences: {
        [x: string]: NonNullable<"push" | "email" | undefined>[] | undefined;
    } | null | undefined;
    questionOfTheDayAnsweredQuestions: {
        [x: string]: boolean | undefined;
    } | null | undefined;
    dayReviewTime: {
        hour: number;
        minute: number;
    } | null;
    issueId: string | null;
    issueName: string | undefined;
    isReadyForTour: boolean | undefined;
    isOnboardingComplete: boolean | undefined;
    parentIssueIds: string[] | undefined;
    setbackThreshold: number | undefined;
    sendDebriefRemindersAfterMinutes: number | undefined;
    gameplanStrategies: import("./utils/firestore").DocumentReferenceLike<unknown>[] | undefined;
    androidPermissions: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    impulseContext: string | null | undefined;
    region: string | null | undefined;
    timezone: string;
    scheduledNotificationIds: string[] | undefined;
    whatsappFolderDoc: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
    uids: string[];
}, yup.AnyObject, {
    createdAt: undefined;
    updatedAt: undefined;
    lastActiveAt: undefined;
    widgetInstalledAt: undefined;
    widgetLastPressedAt: undefined;
    activeImpulseDoc: undefined;
    activeThreadDoc: undefined;
    currentAppState: undefined;
    addToSupportGroup: undefined;
    emojiID: "";
    expoPushToken: undefined;
    notificationPreferences: undefined;
    questionOfTheDayAnsweredQuestions: undefined;
    dayReviewTime: null;
    issueId: undefined;
    issueName: undefined;
    isReadyForTour: undefined;
    isOnboardingComplete: undefined;
    parentIssueIds: "";
    setbackThreshold: undefined;
    sendDebriefRemindersAfterMinutes: undefined;
    gameplanStrategies: "";
    androidPermissions: undefined;
    impulseContext: undefined;
    region: undefined;
    timezone: undefined;
    scheduledNotificationIds: "";
    whatsappFolderDoc: undefined;
    uids: "";
}, "">;
export type ProfileValue = yup.InferType<typeof profileSchema>;
