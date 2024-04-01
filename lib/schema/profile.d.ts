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
    strategyId: yup.Maybe<string | undefined>;
    scheduledNotificationIds: string[] | undefined;
    impulseTacticIdsByPatternId: {
        [x: string]: string[];
    };
    scheduledStrategies: {
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
        tacticsById?: any;
        issueNames?: {
            [x: string]: string | undefined;
        } | null | undefined;
        issueNamesSummary?: string | null | undefined;
        recommendationSummary?: string | null | undefined;
        type: "time";
        title: string;
        forIssueIds: string[];
        tacticIds: string[];
        weekdays: number[];
        hour: number;
        minute: number;
    }[];
    locationStrategies: {
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
        tacticsById?: any;
        issueNames?: {
            [x: string]: string | undefined;
        } | null | undefined;
        issueNamesSummary?: string | null | undefined;
        recommendationSummary?: string | null | undefined;
        type: "location";
        title: string;
        forIssueIds: string[];
        tacticIds: string[];
        locationId: string;
        mode: NonNullable<"enter" | "exit" | undefined>;
    }[];
    tacticsById: any;
}, yup.AnyObject, {
    createdAt: undefined;
    updatedAt: undefined;
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
    strategyId: undefined;
    scheduledNotificationIds: "";
    impulseTacticIdsByPatternId: undefined;
    scheduledStrategies: undefined;
    locationStrategies: undefined;
    tacticsById: any;
}, "">;
export type ProfileValue = WithTypes<typeof profileSchema>;
type WithTypes<T extends yup.ISchema<unknown>> = WithTacticsById<yup.InferType<T>> & {
    createdAt: TimestampLike;
    updatedAt: TimestampLike;
};
export {};
