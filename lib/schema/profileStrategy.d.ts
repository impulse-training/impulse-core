import * as yup from 'yup';
export declare const profileStrategySchema: yup.ObjectSchema<{
    strategyDoc: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
    strategy: {
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
        profileId?: string | undefined;
        description?: string | undefined;
        tacticsById?: {
            [x: string]: {
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
                profileId?: string | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                prompt?: string | undefined;
                description?: string | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    storagePath?: yup.Maybe<string | undefined>;
                    uri?: yup.Maybe<string | undefined>;
                } | null | undefined;
                backgroundColor?: string | undefined;
                setbackThreshold?: number | null | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                waveForm?: string | null | undefined;
                ordinal: number;
                type: "audio";
                recording: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    storagePath?: yup.Maybe<string | undefined>;
                    uri?: yup.Maybe<string | undefined>;
                };
            } | {
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
                profileId?: string | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                description?: string | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    storagePath?: yup.Maybe<string | undefined>;
                    uri?: yup.Maybe<string | undefined>;
                } | null | undefined;
                backgroundColor?: string | undefined;
                setbackThreshold?: number | null | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                repeat?: yup.Maybe<number | undefined>;
                ordinal: number;
                prompt: string;
                type: "breathingExercise";
                inFor: number;
                holdFor: number;
                outFor: number;
            } | {
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
                profileId?: string | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                description?: string | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    storagePath?: yup.Maybe<string | undefined>;
                    uri?: yup.Maybe<string | undefined>;
                } | null | undefined;
                backgroundColor?: string | undefined;
                setbackThreshold?: number | null | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                ordinal: number;
                prompt: string;
                type: "notifyASupportPerson";
                contactIds: string[];
            } | {
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
                profileId?: string | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                description?: string | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    storagePath?: yup.Maybe<string | undefined>;
                    uri?: yup.Maybe<string | undefined>;
                } | null | undefined;
                backgroundColor?: string | undefined;
                setbackThreshold?: number | null | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                ordinal: number;
                prompt: string;
                type: "notifySupportGroup";
                supportGroup: import("./utils/firestore").DocumentReferenceLike<unknown>;
            } | {
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
                profileId?: string | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                description?: string | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    storagePath?: yup.Maybe<string | undefined>;
                    uri?: yup.Maybe<string | undefined>;
                } | null | undefined;
                backgroundColor?: string | undefined;
                setbackThreshold?: number | null | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                ordinal: number;
                prompt: string;
                type: "steps";
                targetSteps: number;
            } | {
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
                profileId?: string | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                description?: string | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    storagePath?: yup.Maybe<string | undefined>;
                    uri?: yup.Maybe<string | undefined>;
                } | null | undefined;
                backgroundColor?: string | undefined;
                setbackThreshold?: number | null | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                ordinal: number;
                prompt: string;
                type: "task";
            } | {
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
                profileId?: string | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                description?: string | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    storagePath?: yup.Maybe<string | undefined>;
                    uri?: yup.Maybe<string | undefined>;
                } | null | undefined;
                backgroundColor?: string | undefined;
                setbackThreshold?: number | null | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                ordinal: number;
                prompt: string;
                type: "video";
                video: {
                    storagePath?: string | null | undefined;
                    url?: string | null | undefined;
                    description: string;
                    title: string;
                    thumbnailUrl: string;
                    duration: number;
                };
            } | {
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
                profileId?: string | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                description?: string | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    storagePath?: yup.Maybe<string | undefined>;
                    uri?: yup.Maybe<string | undefined>;
                } | null | undefined;
                backgroundColor?: string | undefined;
                setbackThreshold?: number | null | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                ordinal: number;
                prompt: string;
                type: "zara";
            };
        } | null | undefined;
        templateForIssueIds?: string[] | undefined;
        tacticCount?: number | undefined;
        profileIssues?: import("./utils/firestore").DocumentReferenceLike<unknown>[] | undefined;
        next3Tactics?: ({
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
            profileId?: string | undefined;
            recommendedForIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            prompt?: string | undefined;
            description?: string | null | undefined;
            pastTenseTitle?: string | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            setbackThreshold?: number | null | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            waveForm?: string | null | undefined;
            ordinal: number;
            type: "audio";
            recording: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            };
        } | {
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
            profileId?: string | undefined;
            recommendedForIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            description?: string | null | undefined;
            pastTenseTitle?: string | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            setbackThreshold?: number | null | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            repeat?: yup.Maybe<number | undefined>;
            ordinal: number;
            prompt: string;
            type: "breathingExercise";
            inFor: number;
            holdFor: number;
            outFor: number;
        } | {
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
            profileId?: string | undefined;
            recommendedForIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            description?: string | null | undefined;
            pastTenseTitle?: string | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            setbackThreshold?: number | null | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            ordinal: number;
            prompt: string;
            type: "notifyASupportPerson";
            contactIds: string[];
        } | {
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
            profileId?: string | undefined;
            recommendedForIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            description?: string | null | undefined;
            pastTenseTitle?: string | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            setbackThreshold?: number | null | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            ordinal: number;
            prompt: string;
            type: "notifySupportGroup";
            supportGroup: import("./utils/firestore").DocumentReferenceLike<unknown>;
        } | {
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
            profileId?: string | undefined;
            recommendedForIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            description?: string | null | undefined;
            pastTenseTitle?: string | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            setbackThreshold?: number | null | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            ordinal: number;
            prompt: string;
            type: "steps";
            targetSteps: number;
        } | {
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
            profileId?: string | undefined;
            recommendedForIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            description?: string | null | undefined;
            pastTenseTitle?: string | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            setbackThreshold?: number | null | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            ordinal: number;
            prompt: string;
            type: "task";
        } | {
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
            profileId?: string | undefined;
            recommendedForIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            description?: string | null | undefined;
            pastTenseTitle?: string | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            setbackThreshold?: number | null | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            ordinal: number;
            prompt: string;
            type: "video";
            video: {
                storagePath?: string | null | undefined;
                url?: string | null | undefined;
                description: string;
                title: string;
                thumbnailUrl: string;
                duration: number;
            };
        } | {
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
            profileId?: string | undefined;
            recommendedForIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            description?: string | null | undefined;
            pastTenseTitle?: string | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            setbackThreshold?: number | null | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            ordinal: number;
            prompt: string;
            type: "zara";
        })[] | undefined;
        nextTacticId?: string | undefined;
        name: string;
        isShared: NonNullable<boolean | undefined>;
        invitationCode: string;
        invitationUrl: string;
    };
    ordinalsForIssues: {
        [x: string]: number;
    } | null | undefined;
    ordinal: number | undefined;
    forAllIssues: boolean | undefined;
    forIssueIds: string[] | undefined;
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
    reminders: ({
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
        type: "time";
        name: string;
        weekdays: number[];
        hour: number;
        minute: number;
    } | {
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
        type: "location";
        name: string;
        locationId: string;
        mode: NonNullable<"enter" | "exit" | undefined>;
    })[] | undefined;
}, yup.AnyObject, {
    strategyDoc: undefined;
    strategy: {
        createdAt: undefined;
        updatedAt: undefined;
        name: undefined;
        description: undefined;
        profileId: undefined;
        isShared: undefined;
        tacticCount: undefined;
        invitationCode: undefined;
        invitationUrl: undefined;
        profileIssues: "";
        templateForIssueIds: "";
        tacticsById: undefined;
        next3Tactics: "";
        nextTacticId: undefined;
    };
    ordinalsForIssues: undefined;
    ordinal: undefined;
    forAllIssues: undefined;
    forIssueIds: "";
    createdAt: undefined;
    updatedAt: undefined;
    reminders: "";
}, "">;
export type ProfileStrategyValue = yup.InferType<typeof profileStrategySchema>;
