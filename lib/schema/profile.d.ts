import { AppStateStatus } from 'react-native';
import * as yup from 'yup';
import { TimestampLike } from '../utils';
import { WithTacticsById } from './tactic';
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
    uids: string[];
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
    androidPermissions: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    parentIssueIds: (string | undefined)[] | undefined;
    region: string | null | undefined;
    timezone: string;
    invitationCode: string;
    programId: yup.Maybe<string | undefined>;
    scheduledNotificationIds: string[] | undefined;
    impulseStrategies: {
        [x: string]: {
            suggestedTacticIds?: string[] | undefined;
            tacticIds: string[];
        };
    };
    timeStrategies: {
        [x: string]: {
            suggestedTacticIds?: string[] | undefined;
            title: string;
            tacticIds: string[];
            weekdays: number[];
            hour: number;
            minute: number;
        };
    } | null | undefined;
    locationStrategies: {
        [x: string]: {
            suggestedTacticIds?: string[] | undefined;
            title: string;
            tacticIds: string[];
            locationId: string;
            mode: NonNullable<"enter" | "exit" | undefined>;
        };
    } | null | undefined;
    tacticsById: any;
}, yup.AnyObject, {
    createdAt: undefined;
    updatedAt: undefined;
    uids: "";
    activeImpulseId: undefined;
    currentAppState: undefined;
    lastActiveAt: undefined;
    expoPushToken: undefined;
    widgetInstalledAt: undefined;
    notificationPreferences: undefined;
    androidPermissions: undefined;
    parentIssueIds: "";
    region: undefined;
    timezone: undefined;
    invitationCode: undefined;
    programId: undefined;
    scheduledNotificationIds: "";
    impulseStrategies: undefined;
    timeStrategies: undefined;
    locationStrategies: undefined;
    tacticsById: any;
}, "">;
export type ProfileValue = WithTypes<typeof profileSchema>;
type WithTypes<T extends yup.ISchema<unknown>> = WithTacticsById<yup.InferType<T>> & {
    createdAt: TimestampLike;
    updatedAt: TimestampLike;
};
export {};
