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
    lastActiveAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    expoPushToken: string | undefined;
    widgetInstalledAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    notificationPreferences: {
        [x: string]: NonNullable<"push" | "email" | undefined>[] | undefined;
    } | null | undefined;
    issueName: string | undefined;
    setbackThreshold: number | undefined;
    isTourCompleted: boolean | undefined;
    androidPermissions: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    parentIssueIds: string[] | undefined;
    region: string | null | undefined;
    timezone: string;
    invitationCode: string;
    favouriteSupportGroups: {
        [x: string]: {
            createdAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            slug?: string | undefined;
            creatorProfileId?: string | undefined;
            last3TacticPreviews?: {
                updatedAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    storagePath?: yup.Maybe<string | undefined>;
                    uri?: yup.Maybe<string | undefined>;
                } | undefined;
                backgroundColor?: string | undefined;
                title: string;
            }[] | undefined;
            templateFor?: "trackTactics" | "debriefTactics" | "reflectionTactics" | undefined;
            recommendedFor?: "impulse" | "time" | null | undefined;
            recommendedForIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            name: string;
            invitationCode: string;
            invitationUrl: string;
            tacticPreviewsById: {
                [x: string]: {
                    updatedAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    image?: {
                        localFilePath?: yup.Maybe<string | undefined>;
                        storagePath?: yup.Maybe<string | undefined>;
                        uri?: yup.Maybe<string | undefined>;
                    } | undefined;
                    backgroundColor?: string | undefined;
                    title: string;
                };
            };
        };
    };
    scheduledNotificationIds: string[] | undefined;
    uids: string[];
}, yup.AnyObject, {
    createdAt: undefined;
    updatedAt: undefined;
    activeImpulseId: undefined;
    currentAppState: undefined;
    lastActiveAt: undefined;
    expoPushToken: undefined;
    widgetInstalledAt: undefined;
    notificationPreferences: undefined;
    issueName: undefined;
    setbackThreshold: undefined;
    isTourCompleted: undefined;
    androidPermissions: undefined;
    parentIssueIds: "";
    region: undefined;
    timezone: undefined;
    invitationCode: undefined;
    favouriteSupportGroups: undefined;
    scheduledNotificationIds: "";
    uids: "";
}, "">;
export type ProfileValue = yup.InferType<typeof profileSchema>;
