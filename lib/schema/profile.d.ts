import { AppStateStatus } from 'react-native';
import * as yup from 'yup';
import { AgentName } from '../agents';
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
    widgetLastPressedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    activeImpulseDoc: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
    currentAppState: AppStateStatus | undefined;
    expoPushToken: string | undefined;
    notificationPreferences: {
        [x: string]: NonNullable<"push" | "email" | undefined>[] | undefined;
    } | null | undefined;
    issueId: string | null;
    issueName: string | undefined;
    isReadyForTour: boolean | undefined;
    isOnboardingComplete: boolean | undefined;
    parentIssueIds: string[] | undefined;
    setbackThreshold: number | undefined;
    currentAgent: AgentName;
    androidPermissions: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    longTermMemory: {
        [x: string]: {
            label?: string | undefined;
            setbackThreshold?: number | undefined;
            idValue?: string | undefined;
            numericValue?: number | undefined;
            color?: string | undefined;
            setAt: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            stringValue: string;
            unit: string;
        };
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
    widgetLastPressedAt: undefined;
    activeImpulseDoc: undefined;
    currentAppState: undefined;
    expoPushToken: undefined;
    notificationPreferences: undefined;
    issueId: undefined;
    issueName: undefined;
    isReadyForTour: undefined;
    isOnboardingComplete: undefined;
    parentIssueIds: "";
    setbackThreshold: undefined;
    currentAgent: "onboarding";
    androidPermissions: undefined;
    longTermMemory: undefined;
    region: undefined;
    timezone: undefined;
    scheduledNotificationIds: "";
    uids: "";
}, "">;
export type ProfileValue = yup.InferType<typeof profileSchema>;
