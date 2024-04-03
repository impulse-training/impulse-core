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
    impulseStrategiesByPatternId: {
        [x: string]: {
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
                ordinal?: yup.Maybe<number | undefined>;
                type: "impulse";
                tacticsById: {
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
                        profileId?: string | null | undefined;
                        sourceId?: string | undefined;
                        subtitle?: yup.Maybe<string | undefined>;
                        description?: string | null | undefined;
                        image?: {
                            localFilePath?: yup.Maybe<string | undefined>;
                            storagePath?: yup.Maybe<string | undefined>;
                            uri?: yup.Maybe<string | undefined>;
                        } | null | undefined;
                        isTemplate?: boolean | null | undefined;
                        language?: string | null | undefined;
                        href?: string | null | undefined;
                        categoryIds?: (string | undefined)[] | null | undefined;
                        isShared?: boolean | null | undefined;
                        isResponseRequired?: boolean | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isAvailableForRecommendation?: boolean | null | undefined;
                        numberOfLikes?: number | null | undefined;
                        isSuggested?: boolean | undefined;
                        lowEmoji?: yup.Maybe<string | undefined>;
                        highEmoji?: yup.Maybe<string | undefined>;
                        type: "measure-slider";
                        title: string;
                        backgroundColor: string;
                    } | {
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
                        profileId?: string | null | undefined;
                        sourceId?: string | undefined;
                        subtitle?: yup.Maybe<string | undefined>;
                        description?: string | null | undefined;
                        image?: {
                            localFilePath?: yup.Maybe<string | undefined>;
                            storagePath?: yup.Maybe<string | undefined>;
                            uri?: yup.Maybe<string | undefined>;
                        } | null | undefined;
                        isTemplate?: boolean | null | undefined;
                        language?: string | null | undefined;
                        href?: string | null | undefined;
                        categoryIds?: (string | undefined)[] | null | undefined;
                        isShared?: boolean | null | undefined;
                        isResponseRequired?: boolean | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isAvailableForRecommendation?: boolean | null | undefined;
                        numberOfLikes?: number | null | undefined;
                        isSuggested?: boolean | undefined;
                        type: "measure-time";
                        title: string;
                        backgroundColor: string;
                    } | {
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
                        profileId?: string | null | undefined;
                        sourceId?: string | undefined;
                        subtitle?: yup.Maybe<string | undefined>;
                        description?: string | null | undefined;
                        image?: {
                            localFilePath?: yup.Maybe<string | undefined>;
                            storagePath?: yup.Maybe<string | undefined>;
                            uri?: yup.Maybe<string | undefined>;
                        } | null | undefined;
                        isTemplate?: boolean | null | undefined;
                        language?: string | null | undefined;
                        href?: string | null | undefined;
                        categoryIds?: (string | undefined)[] | null | undefined;
                        isShared?: boolean | null | undefined;
                        isResponseRequired?: boolean | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isAvailableForRecommendation?: boolean | null | undefined;
                        numberOfLikes?: number | null | undefined;
                        isSuggested?: boolean | undefined;
                        type: "measure-counter";
                        title: string;
                        backgroundColor: string;
                    } | {
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
                        profileId?: string | null | undefined;
                        sourceId?: string | undefined;
                        subtitle?: yup.Maybe<string | undefined>;
                        description?: string | null | undefined;
                        image?: {
                            localFilePath?: yup.Maybe<string | undefined>;
                            storagePath?: yup.Maybe<string | undefined>;
                            uri?: yup.Maybe<string | undefined>;
                        } | null | undefined;
                        isTemplate?: boolean | null | undefined;
                        language?: string | null | undefined;
                        href?: string | null | undefined;
                        categoryIds?: (string | undefined)[] | null | undefined;
                        isShared?: boolean | null | undefined;
                        isResponseRequired?: boolean | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isAvailableForRecommendation?: boolean | null | undefined;
                        numberOfLikes?: number | null | undefined;
                        isSuggested?: boolean | undefined;
                        recording: {
                            waveform?: string | null | undefined;
                            localFilePath: string;
                            remoteFilePath: string;
                        };
                        type: "audio";
                        title: string;
                        backgroundColor: string;
                    } | {
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
                        profileId?: string | null | undefined;
                        sourceId?: string | undefined;
                        subtitle?: yup.Maybe<string | undefined>;
                        description?: string | null | undefined;
                        image?: {
                            localFilePath?: yup.Maybe<string | undefined>;
                            storagePath?: yup.Maybe<string | undefined>;
                            uri?: yup.Maybe<string | undefined>;
                        } | null | undefined;
                        isTemplate?: boolean | null | undefined;
                        language?: string | null | undefined;
                        href?: string | null | undefined;
                        categoryIds?: (string | undefined)[] | null | undefined;
                        isShared?: boolean | null | undefined;
                        isResponseRequired?: boolean | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isAvailableForRecommendation?: boolean | null | undefined;
                        numberOfLikes?: number | null | undefined;
                        isSuggested?: boolean | undefined;
                        repeat?: yup.Maybe<number | undefined>;
                        type: "breathe";
                        title: string;
                        backgroundColor: string;
                        inFor: number;
                        holdFor: number;
                        outFor: number;
                    } | {
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
                        profileId?: string | null | undefined;
                        sourceId?: string | undefined;
                        subtitle?: yup.Maybe<string | undefined>;
                        description?: string | null | undefined;
                        image?: {
                            localFilePath?: yup.Maybe<string | undefined>;
                            storagePath?: yup.Maybe<string | undefined>;
                            uri?: yup.Maybe<string | undefined>;
                        } | null | undefined;
                        isTemplate?: boolean | null | undefined;
                        language?: string | null | undefined;
                        href?: string | null | undefined;
                        categoryIds?: (string | undefined)[] | null | undefined;
                        isShared?: boolean | null | undefined;
                        isResponseRequired?: boolean | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isAvailableForRecommendation?: boolean | null | undefined;
                        numberOfLikes?: number | null | undefined;
                        isSuggested?: boolean | undefined;
                        type: "emotions";
                        title: string;
                        backgroundColor: string;
                    } | {
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
                        profileId?: string | null | undefined;
                        sourceId?: string | undefined;
                        subtitle?: yup.Maybe<string | undefined>;
                        description?: string | null | undefined;
                        image?: {
                            localFilePath?: yup.Maybe<string | undefined>;
                            storagePath?: yup.Maybe<string | undefined>;
                            uri?: yup.Maybe<string | undefined>;
                        } | null | undefined;
                        isTemplate?: boolean | null | undefined;
                        language?: string | null | undefined;
                        href?: string | null | undefined;
                        categoryIds?: (string | undefined)[] | null | undefined;
                        isShared?: boolean | null | undefined;
                        isResponseRequired?: boolean | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isAvailableForRecommendation?: boolean | null | undefined;
                        numberOfLikes?: number | null | undefined;
                        isSuggested?: boolean | undefined;
                        type: "link";
                        title: string;
                        backgroundColor: string;
                    } | {
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
                        profileId?: string | null | undefined;
                        sourceId?: string | undefined;
                        subtitle?: yup.Maybe<string | undefined>;
                        description?: string | null | undefined;
                        image?: {
                            localFilePath?: yup.Maybe<string | undefined>;
                            storagePath?: yup.Maybe<string | undefined>;
                            uri?: yup.Maybe<string | undefined>;
                        } | null | undefined;
                        isTemplate?: boolean | null | undefined;
                        language?: string | null | undefined;
                        href?: string | null | undefined;
                        categoryIds?: (string | undefined)[] | null | undefined;
                        isShared?: boolean | null | undefined;
                        isResponseRequired?: boolean | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isAvailableForRecommendation?: boolean | null | undefined;
                        numberOfLikes?: number | null | undefined;
                        isSuggested?: boolean | undefined;
                        type: "phone";
                        title: string;
                        backgroundColor: string;
                        supportGroupId: string;
                        trigger: {};
                    } | {
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
                        profileId?: string | null | undefined;
                        sourceId?: string | undefined;
                        subtitle?: yup.Maybe<string | undefined>;
                        description?: string | null | undefined;
                        image?: {
                            localFilePath?: yup.Maybe<string | undefined>;
                            storagePath?: yup.Maybe<string | undefined>;
                            uri?: yup.Maybe<string | undefined>;
                        } | null | undefined;
                        isTemplate?: boolean | null | undefined;
                        language?: string | null | undefined;
                        href?: string | null | undefined;
                        categoryIds?: (string | undefined)[] | null | undefined;
                        isShared?: boolean | null | undefined;
                        isResponseRequired?: boolean | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isAvailableForRecommendation?: boolean | null | undefined;
                        numberOfLikes?: number | null | undefined;
                        isSuggested?: boolean | undefined;
                        type: "question";
                        title: string;
                        backgroundColor: string;
                    } | {
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
                        profileId?: string | null | undefined;
                        sourceId?: string | undefined;
                        subtitle?: yup.Maybe<string | undefined>;
                        description?: string | null | undefined;
                        image?: {
                            localFilePath?: yup.Maybe<string | undefined>;
                            storagePath?: yup.Maybe<string | undefined>;
                            uri?: yup.Maybe<string | undefined>;
                        } | null | undefined;
                        isTemplate?: boolean | null | undefined;
                        language?: string | null | undefined;
                        href?: string | null | undefined;
                        categoryIds?: (string | undefined)[] | null | undefined;
                        isShared?: boolean | null | undefined;
                        isResponseRequired?: boolean | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isAvailableForRecommendation?: boolean | null | undefined;
                        numberOfLikes?: number | null | undefined;
                        isSuggested?: boolean | undefined;
                        type: "steps";
                        title: string;
                        backgroundColor: string;
                        steps: number;
                    } | {
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
                        profileId?: string | null | undefined;
                        sourceId?: string | undefined;
                        subtitle?: yup.Maybe<string | undefined>;
                        description?: string | null | undefined;
                        image?: {
                            localFilePath?: yup.Maybe<string | undefined>;
                            storagePath?: yup.Maybe<string | undefined>;
                            uri?: yup.Maybe<string | undefined>;
                        } | null | undefined;
                        isTemplate?: boolean | null | undefined;
                        language?: string | null | undefined;
                        href?: string | null | undefined;
                        categoryIds?: (string | undefined)[] | null | undefined;
                        isShared?: boolean | null | undefined;
                        isResponseRequired?: boolean | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isAvailableForRecommendation?: boolean | null | undefined;
                        numberOfLikes?: number | null | undefined;
                        isSuggested?: boolean | undefined;
                        type: "task";
                        title: string;
                        backgroundColor: string;
                    } | {
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
                        profileId?: string | null | undefined;
                        sourceId?: string | undefined;
                        subtitle?: yup.Maybe<string | undefined>;
                        description?: string | null | undefined;
                        image?: {
                            localFilePath?: yup.Maybe<string | undefined>;
                            storagePath?: yup.Maybe<string | undefined>;
                            uri?: yup.Maybe<string | undefined>;
                        } | null | undefined;
                        isTemplate?: boolean | null | undefined;
                        language?: string | null | undefined;
                        href?: string | null | undefined;
                        categoryIds?: (string | undefined)[] | null | undefined;
                        isShared?: boolean | null | undefined;
                        isResponseRequired?: boolean | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isAvailableForRecommendation?: boolean | null | undefined;
                        numberOfLikes?: number | null | undefined;
                        isSuggested?: boolean | undefined;
                        type: "urge-surfing";
                        title: string;
                        backgroundColor: string;
                    } | {
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
                        profileId?: string | null | undefined;
                        sourceId?: string | undefined;
                        subtitle?: yup.Maybe<string | undefined>;
                        description?: string | null | undefined;
                        image?: {
                            localFilePath?: yup.Maybe<string | undefined>;
                            storagePath?: yup.Maybe<string | undefined>;
                            uri?: yup.Maybe<string | undefined>;
                        } | null | undefined;
                        isTemplate?: boolean | null | undefined;
                        language?: string | null | undefined;
                        href?: string | null | undefined;
                        categoryIds?: (string | undefined)[] | null | undefined;
                        isShared?: boolean | null | undefined;
                        isResponseRequired?: boolean | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isAvailableForRecommendation?: boolean | null | undefined;
                        numberOfLikes?: number | null | undefined;
                        isSuggested?: boolean | undefined;
                        type: "video";
                        title: string;
                        backgroundColor: string;
                        video: {
                            storagePath?: string | null | undefined;
                            url?: string | null | undefined;
                            title: string;
                            description: string;
                            thumbnailUrl: string;
                            duration: number;
                        };
                    };
                };
                tacticIds: string[];
                name: string;
            };
        };
    };
    scheduledStrategies: {
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
            ordinal?: yup.Maybe<number | undefined>;
            type: "time";
            tacticsById: {
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
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: yup.Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: yup.Maybe<string | undefined>;
                        storagePath?: yup.Maybe<string | undefined>;
                        uri?: yup.Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    lowEmoji?: yup.Maybe<string | undefined>;
                    highEmoji?: yup.Maybe<string | undefined>;
                    type: "measure-slider";
                    title: string;
                    backgroundColor: string;
                } | {
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
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: yup.Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: yup.Maybe<string | undefined>;
                        storagePath?: yup.Maybe<string | undefined>;
                        uri?: yup.Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    type: "measure-time";
                    title: string;
                    backgroundColor: string;
                } | {
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
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: yup.Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: yup.Maybe<string | undefined>;
                        storagePath?: yup.Maybe<string | undefined>;
                        uri?: yup.Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    type: "measure-counter";
                    title: string;
                    backgroundColor: string;
                } | {
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
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: yup.Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: yup.Maybe<string | undefined>;
                        storagePath?: yup.Maybe<string | undefined>;
                        uri?: yup.Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    recording: {
                        waveform?: string | null | undefined;
                        localFilePath: string;
                        remoteFilePath: string;
                    };
                    type: "audio";
                    title: string;
                    backgroundColor: string;
                } | {
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
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: yup.Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: yup.Maybe<string | undefined>;
                        storagePath?: yup.Maybe<string | undefined>;
                        uri?: yup.Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    repeat?: yup.Maybe<number | undefined>;
                    type: "breathe";
                    title: string;
                    backgroundColor: string;
                    inFor: number;
                    holdFor: number;
                    outFor: number;
                } | {
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
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: yup.Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: yup.Maybe<string | undefined>;
                        storagePath?: yup.Maybe<string | undefined>;
                        uri?: yup.Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    type: "emotions";
                    title: string;
                    backgroundColor: string;
                } | {
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
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: yup.Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: yup.Maybe<string | undefined>;
                        storagePath?: yup.Maybe<string | undefined>;
                        uri?: yup.Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    type: "link";
                    title: string;
                    backgroundColor: string;
                } | {
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
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: yup.Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: yup.Maybe<string | undefined>;
                        storagePath?: yup.Maybe<string | undefined>;
                        uri?: yup.Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    type: "phone";
                    title: string;
                    backgroundColor: string;
                    supportGroupId: string;
                    trigger: {};
                } | {
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
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: yup.Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: yup.Maybe<string | undefined>;
                        storagePath?: yup.Maybe<string | undefined>;
                        uri?: yup.Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    type: "question";
                    title: string;
                    backgroundColor: string;
                } | {
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
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: yup.Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: yup.Maybe<string | undefined>;
                        storagePath?: yup.Maybe<string | undefined>;
                        uri?: yup.Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    type: "steps";
                    title: string;
                    backgroundColor: string;
                    steps: number;
                } | {
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
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: yup.Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: yup.Maybe<string | undefined>;
                        storagePath?: yup.Maybe<string | undefined>;
                        uri?: yup.Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    type: "task";
                    title: string;
                    backgroundColor: string;
                } | {
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
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: yup.Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: yup.Maybe<string | undefined>;
                        storagePath?: yup.Maybe<string | undefined>;
                        uri?: yup.Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    type: "urge-surfing";
                    title: string;
                    backgroundColor: string;
                } | {
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
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: yup.Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: yup.Maybe<string | undefined>;
                        storagePath?: yup.Maybe<string | undefined>;
                        uri?: yup.Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    type: "video";
                    title: string;
                    backgroundColor: string;
                    video: {
                        storagePath?: string | null | undefined;
                        url?: string | null | undefined;
                        title: string;
                        description: string;
                        thumbnailUrl: string;
                        duration: number;
                    };
                };
            };
            tacticIds: string[];
            name: string;
            weekdays: number[];
            hour: number;
            minute: number;
        };
    };
    locationStrategies: {
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
            ordinal?: yup.Maybe<number | undefined>;
            type: "location";
            tacticsById: {
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
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: yup.Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: yup.Maybe<string | undefined>;
                        storagePath?: yup.Maybe<string | undefined>;
                        uri?: yup.Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    lowEmoji?: yup.Maybe<string | undefined>;
                    highEmoji?: yup.Maybe<string | undefined>;
                    type: "measure-slider";
                    title: string;
                    backgroundColor: string;
                } | {
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
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: yup.Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: yup.Maybe<string | undefined>;
                        storagePath?: yup.Maybe<string | undefined>;
                        uri?: yup.Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    type: "measure-time";
                    title: string;
                    backgroundColor: string;
                } | {
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
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: yup.Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: yup.Maybe<string | undefined>;
                        storagePath?: yup.Maybe<string | undefined>;
                        uri?: yup.Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    type: "measure-counter";
                    title: string;
                    backgroundColor: string;
                } | {
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
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: yup.Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: yup.Maybe<string | undefined>;
                        storagePath?: yup.Maybe<string | undefined>;
                        uri?: yup.Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    recording: {
                        waveform?: string | null | undefined;
                        localFilePath: string;
                        remoteFilePath: string;
                    };
                    type: "audio";
                    title: string;
                    backgroundColor: string;
                } | {
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
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: yup.Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: yup.Maybe<string | undefined>;
                        storagePath?: yup.Maybe<string | undefined>;
                        uri?: yup.Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    repeat?: yup.Maybe<number | undefined>;
                    type: "breathe";
                    title: string;
                    backgroundColor: string;
                    inFor: number;
                    holdFor: number;
                    outFor: number;
                } | {
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
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: yup.Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: yup.Maybe<string | undefined>;
                        storagePath?: yup.Maybe<string | undefined>;
                        uri?: yup.Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    type: "emotions";
                    title: string;
                    backgroundColor: string;
                } | {
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
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: yup.Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: yup.Maybe<string | undefined>;
                        storagePath?: yup.Maybe<string | undefined>;
                        uri?: yup.Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    type: "link";
                    title: string;
                    backgroundColor: string;
                } | {
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
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: yup.Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: yup.Maybe<string | undefined>;
                        storagePath?: yup.Maybe<string | undefined>;
                        uri?: yup.Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    type: "phone";
                    title: string;
                    backgroundColor: string;
                    supportGroupId: string;
                    trigger: {};
                } | {
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
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: yup.Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: yup.Maybe<string | undefined>;
                        storagePath?: yup.Maybe<string | undefined>;
                        uri?: yup.Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    type: "question";
                    title: string;
                    backgroundColor: string;
                } | {
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
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: yup.Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: yup.Maybe<string | undefined>;
                        storagePath?: yup.Maybe<string | undefined>;
                        uri?: yup.Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    type: "steps";
                    title: string;
                    backgroundColor: string;
                    steps: number;
                } | {
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
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: yup.Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: yup.Maybe<string | undefined>;
                        storagePath?: yup.Maybe<string | undefined>;
                        uri?: yup.Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    type: "task";
                    title: string;
                    backgroundColor: string;
                } | {
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
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: yup.Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: yup.Maybe<string | undefined>;
                        storagePath?: yup.Maybe<string | undefined>;
                        uri?: yup.Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    type: "urge-surfing";
                    title: string;
                    backgroundColor: string;
                } | {
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
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: yup.Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: yup.Maybe<string | undefined>;
                        storagePath?: yup.Maybe<string | undefined>;
                        uri?: yup.Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    type: "video";
                    title: string;
                    backgroundColor: string;
                    video: {
                        storagePath?: string | null | undefined;
                        url?: string | null | undefined;
                        title: string;
                        description: string;
                        thumbnailUrl: string;
                        duration: number;
                    };
                };
            };
            tacticIds: string[];
            name: string;
            locationId: string;
            mode: NonNullable<"enter" | "exit" | undefined>;
        };
    };
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
    impulseStrategiesByPatternId: undefined;
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
