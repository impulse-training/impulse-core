import * as yup from 'yup';
export declare const gameplanSchema: yup.ObjectSchema<{
    createdAt: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    blandPathwayData: {
        nodes?: {}[] | undefined;
        edges?: {}[] | undefined;
    };
    blandPathwayId: string | undefined;
    summary: string | undefined;
    issuesById: {
        [x: string]: {
            path?: string | null | undefined;
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
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
            recommendedStrategies?: import("./utils/firestore").DocumentReferenceLike<unknown>[] | undefined;
            strategyOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            gameplanTactics?: import("./utils/firestore").DocumentReferenceLike<unknown>[] | undefined;
            name: string;
        };
    } | null | undefined;
    profileStrategiesById: {
        [x: string]: {
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            ordinal?: number | undefined;
            forIssueIds?: string[] | undefined;
            ordinalsForIssues?: {
                [x: string]: number;
            } | null | undefined;
            forAllIssues?: boolean | undefined;
            tourDismissed?: boolean | undefined;
            reminders?: ({
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
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
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                type: "location";
                name: string;
                locationId: string;
                mode: NonNullable<"enter" | "exit" | undefined>;
            })[] | undefined;
            type: "derived";
            sortBy: NonNullable<"random" | "newest" | undefined>;
            parentIssueIds: (string | undefined)[];
        } | {
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            strategyDoc?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
            ordinal?: number | undefined;
            forIssueIds?: string[] | undefined;
            ordinalsForIssues?: {
                [x: string]: number;
            } | null | undefined;
            forAllIssues?: boolean | undefined;
            tourDismissed?: boolean | undefined;
            reminders?: ({
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
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
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                type: "location";
                name: string;
                locationId: string;
                mode: NonNullable<"enter" | "exit" | undefined>;
            })[] | undefined;
            type: "original";
            sortBy: NonNullable<"random" | "newest" | undefined>;
            strategy: {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                uid?: string | undefined;
                sharedWithIssueIds?: string[] | undefined;
                description?: string | undefined;
                tacticsById?: {
                    [x: string]: {
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        updatedAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        uid?: string | undefined;
                        setbackThreshold?: number | null | undefined;
                        recommendedForIssueIds?: string[] | undefined;
                        prompt?: string | undefined;
                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        sharedWithIssueIds?: string[] | undefined;
                        recommendedForIssueOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        isShared?: boolean | undefined;
                        description?: string | null | undefined;
                        pastTenseTitle?: string | undefined;
                        debriefAfterMinutes?: number | null | undefined;
                        image?: {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            localFilePath?: yup.Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            waveForm?: yup.Maybe<string | undefined>;
                            thumbnailStoragePath?: yup.Maybe<string | undefined>;
                            thumbnailUri?: yup.Maybe<string | undefined>;
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        type: "audio";
                        ordinal: number;
                        recording: {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            localFilePath?: yup.Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            waveForm?: yup.Maybe<string | undefined>;
                            thumbnailStoragePath?: yup.Maybe<string | undefined>;
                            thumbnailUri?: yup.Maybe<string | undefined>;
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        };
                    } | {
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        updatedAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        uid?: string | undefined;
                        repeat?: yup.Maybe<number | undefined>;
                        setbackThreshold?: number | null | undefined;
                        recommendedForIssueIds?: string[] | undefined;
                        prompt?: string | undefined;
                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        sharedWithIssueIds?: string[] | undefined;
                        recommendedForIssueOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        isShared?: boolean | undefined;
                        description?: string | null | undefined;
                        pastTenseTitle?: string | undefined;
                        debriefAfterMinutes?: number | null | undefined;
                        image?: {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            localFilePath?: yup.Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            waveForm?: yup.Maybe<string | undefined>;
                            thumbnailStoragePath?: yup.Maybe<string | undefined>;
                            thumbnailUri?: yup.Maybe<string | undefined>;
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        type: "breathingExercise";
                        ordinal: number;
                        inFor: number;
                        holdFor: number;
                        outFor: number;
                    } | {
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        updatedAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        uid?: string | undefined;
                        setbackThreshold?: number | null | undefined;
                        recommendedForIssueIds?: string[] | undefined;
                        prompt?: string | undefined;
                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        sharedWithIssueIds?: string[] | undefined;
                        recommendedForIssueOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        isShared?: boolean | undefined;
                        description?: string | null | undefined;
                        pastTenseTitle?: string | undefined;
                        debriefAfterMinutes?: number | null | undefined;
                        image?: {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            localFilePath?: yup.Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            waveForm?: yup.Maybe<string | undefined>;
                            thumbnailStoragePath?: yup.Maybe<string | undefined>;
                            thumbnailUri?: yup.Maybe<string | undefined>;
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        type: "link";
                        ordinal: number;
                        url: string;
                    } | {
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        updatedAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        uid?: string | undefined;
                        setbackThreshold?: number | null | undefined;
                        recommendedForIssueIds?: string[] | undefined;
                        prompt?: string | undefined;
                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        sharedWithIssueIds?: string[] | undefined;
                        recommendedForIssueOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        isShared?: boolean | undefined;
                        description?: string | null | undefined;
                        pastTenseTitle?: string | undefined;
                        debriefAfterMinutes?: number | null | undefined;
                        image?: {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            localFilePath?: yup.Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            waveForm?: yup.Maybe<string | undefined>;
                            thumbnailStoragePath?: yup.Maybe<string | undefined>;
                            thumbnailUri?: yup.Maybe<string | undefined>;
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        type: "notifyASupportPerson";
                        ordinal: number;
                        contactIds: string[];
                    } | {
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        updatedAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        uid?: string | undefined;
                        setbackThreshold?: number | null | undefined;
                        recommendedForIssueIds?: string[] | undefined;
                        prompt?: string | undefined;
                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        sharedWithIssueIds?: string[] | undefined;
                        recommendedForIssueOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        isShared?: boolean | undefined;
                        description?: string | null | undefined;
                        pastTenseTitle?: string | undefined;
                        debriefAfterMinutes?: number | null | undefined;
                        image?: {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            localFilePath?: yup.Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            waveForm?: yup.Maybe<string | undefined>;
                            thumbnailStoragePath?: yup.Maybe<string | undefined>;
                            thumbnailUri?: yup.Maybe<string | undefined>;
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        type: "notifySupportGroup";
                        ordinal: number;
                        supportGroup: import("./utils/firestore").DocumentReferenceLike<unknown>;
                    } | {
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        updatedAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        uid?: string | undefined;
                        setbackThreshold?: number | null | undefined;
                        recommendedForIssueIds?: string[] | undefined;
                        prompt?: string | undefined;
                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        sharedWithIssueIds?: string[] | undefined;
                        recommendedForIssueOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        isShared?: boolean | undefined;
                        description?: string | null | undefined;
                        pastTenseTitle?: string | undefined;
                        debriefAfterMinutes?: number | null | undefined;
                        image?: {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            localFilePath?: yup.Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            waveForm?: yup.Maybe<string | undefined>;
                            thumbnailStoragePath?: yup.Maybe<string | undefined>;
                            thumbnailUri?: yup.Maybe<string | undefined>;
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        type: "question";
                        ordinal: number;
                        question: {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            followUps?: ({
                                message?: string | undefined;
                                type: "askAnotherQuestion";
                                questionId: string;
                            } | {
                                message?: string | undefined;
                                type: "writeAnswerToProfile";
                                profileKey: string;
                            } | {
                                message?: string | undefined;
                                type: "writeValueToProfile";
                                profileKey: string;
                                value: {};
                            })[] | undefined;
                            setbackThreshold?: number | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            isPublic?: boolean | undefined;
                            categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
                            options?: ({
                                label?: string | undefined;
                                followUps?: ({
                                    message?: string | undefined;
                                    type: "askAnotherQuestion";
                                    questionId: string;
                                } | {
                                    message?: string | undefined;
                                    type: "writeAnswerToProfile";
                                    profileKey: string;
                                } | {
                                    message?: string | undefined;
                                    type: "writeValueToProfile";
                                    profileKey: string;
                                    value: {};
                                })[] | undefined;
                                color?: string | undefined;
                                textColor?: string | undefined;
                                setbackThreshold?: number | undefined;
                                greaterThan?: number | undefined;
                                lessThanOrEqualTo?: number | undefined;
                                type: "numeric";
                                text: string;
                            } | {
                                label?: string | undefined;
                                followUps?: ({
                                    message?: string | undefined;
                                    type: "askAnotherQuestion";
                                    questionId: string;
                                } | {
                                    message?: string | undefined;
                                    type: "writeAnswerToProfile";
                                    profileKey: string;
                                } | {
                                    message?: string | undefined;
                                    type: "writeValueToProfile";
                                    profileKey: string;
                                    value: {};
                                })[] | undefined;
                                color?: string | undefined;
                                textColor?: string | undefined;
                                type: "string";
                                text: string;
                            })[] | undefined;
                            ordinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                            writeAnswerToProfileMemoryKey?: string | undefined;
                            type: "counter";
                            prompt: string;
                            ordinal: number;
                        } | {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            followUps?: ({
                                message?: string | undefined;
                                type: "askAnotherQuestion";
                                questionId: string;
                            } | {
                                message?: string | undefined;
                                type: "writeAnswerToProfile";
                                profileKey: string;
                            } | {
                                message?: string | undefined;
                                type: "writeValueToProfile";
                                profileKey: string;
                                value: {};
                            })[] | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            isPublic?: boolean | undefined;
                            categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
                            options?: ({
                                label?: string | undefined;
                                followUps?: ({
                                    message?: string | undefined;
                                    type: "askAnotherQuestion";
                                    questionId: string;
                                } | {
                                    message?: string | undefined;
                                    type: "writeAnswerToProfile";
                                    profileKey: string;
                                } | {
                                    message?: string | undefined;
                                    type: "writeValueToProfile";
                                    profileKey: string;
                                    value: {};
                                })[] | undefined;
                                color?: string | undefined;
                                textColor?: string | undefined;
                                setbackThreshold?: number | undefined;
                                greaterThan?: number | undefined;
                                lessThanOrEqualTo?: number | undefined;
                                type: "numeric";
                                text: string;
                            } | {
                                label?: string | undefined;
                                followUps?: ({
                                    message?: string | undefined;
                                    type: "askAnotherQuestion";
                                    questionId: string;
                                } | {
                                    message?: string | undefined;
                                    type: "writeAnswerToProfile";
                                    profileKey: string;
                                } | {
                                    message?: string | undefined;
                                    type: "writeValueToProfile";
                                    profileKey: string;
                                    value: {};
                                })[] | undefined;
                                color?: string | undefined;
                                textColor?: string | undefined;
                                type: "string";
                                text: string;
                            })[] | undefined;
                            ordinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                            writeAnswerToProfileMemoryKey?: string | undefined;
                            type: "issue";
                            prompt: string;
                            ordinal: number;
                        } | {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            followUps?: ({
                                message?: string | undefined;
                                type: "askAnotherQuestion";
                                questionId: string;
                            } | {
                                message?: string | undefined;
                                type: "writeAnswerToProfile";
                                profileKey: string;
                            } | {
                                message?: string | undefined;
                                type: "writeValueToProfile";
                                profileKey: string;
                                value: {};
                            })[] | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            isPublic?: boolean | undefined;
                            categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
                            ordinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                            writeAnswerToProfileMemoryKey?: string | undefined;
                            type: "multipleChoice";
                            prompt: string;
                            options: ({
                                label?: string | undefined;
                                followUps?: ({
                                    message?: string | undefined;
                                    type: "askAnotherQuestion";
                                    questionId: string;
                                } | {
                                    message?: string | undefined;
                                    type: "writeAnswerToProfile";
                                    profileKey: string;
                                } | {
                                    message?: string | undefined;
                                    type: "writeValueToProfile";
                                    profileKey: string;
                                    value: {};
                                })[] | undefined;
                                color?: string | undefined;
                                textColor?: string | undefined;
                                setbackThreshold?: number | undefined;
                                greaterThan?: number | undefined;
                                lessThanOrEqualTo?: number | undefined;
                                type: "numeric";
                                text: string;
                            } | {
                                label?: string | undefined;
                                followUps?: ({
                                    message?: string | undefined;
                                    type: "askAnotherQuestion";
                                    questionId: string;
                                } | {
                                    message?: string | undefined;
                                    type: "writeAnswerToProfile";
                                    profileKey: string;
                                } | {
                                    message?: string | undefined;
                                    type: "writeValueToProfile";
                                    profileKey: string;
                                    value: {};
                                })[] | undefined;
                                color?: string | undefined;
                                textColor?: string | undefined;
                                type: "string";
                                text: string;
                            })[];
                            ordinal: number;
                            canAddNewOptions: NonNullable<boolean | undefined>;
                        } | {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            followUps?: ({
                                message?: string | undefined;
                                type: "askAnotherQuestion";
                                questionId: string;
                            } | {
                                message?: string | undefined;
                                type: "writeAnswerToProfile";
                                profileKey: string;
                            } | {
                                message?: string | undefined;
                                type: "writeValueToProfile";
                                profileKey: string;
                                value: {};
                            })[] | undefined;
                            setbackThreshold?: number | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            isPublic?: boolean | undefined;
                            categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
                            options?: ({
                                label?: string | undefined;
                                followUps?: ({
                                    message?: string | undefined;
                                    type: "askAnotherQuestion";
                                    questionId: string;
                                } | {
                                    message?: string | undefined;
                                    type: "writeAnswerToProfile";
                                    profileKey: string;
                                } | {
                                    message?: string | undefined;
                                    type: "writeValueToProfile";
                                    profileKey: string;
                                    value: {};
                                })[] | undefined;
                                color?: string | undefined;
                                textColor?: string | undefined;
                                setbackThreshold?: number | undefined;
                                greaterThan?: number | undefined;
                                lessThanOrEqualTo?: number | undefined;
                                type: "numeric";
                                text: string;
                            } | {
                                label?: string | undefined;
                                followUps?: ({
                                    message?: string | undefined;
                                    type: "askAnotherQuestion";
                                    questionId: string;
                                } | {
                                    message?: string | undefined;
                                    type: "writeAnswerToProfile";
                                    profileKey: string;
                                } | {
                                    message?: string | undefined;
                                    type: "writeValueToProfile";
                                    profileKey: string;
                                    value: {};
                                })[] | undefined;
                                color?: string | undefined;
                                textColor?: string | undefined;
                                type: "string";
                                text: string;
                            })[] | undefined;
                            ordinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                            writeAnswerToProfileMemoryKey?: string | undefined;
                            lowEmoji?: yup.Maybe<string | undefined>;
                            highEmoji?: yup.Maybe<string | undefined>;
                            type: "scaleOf1To10";
                            prompt: string;
                            ordinal: number;
                        } | {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            followUps?: ({
                                message?: string | undefined;
                                type: "askAnotherQuestion";
                                questionId: string;
                            } | {
                                message?: string | undefined;
                                type: "writeAnswerToProfile";
                                profileKey: string;
                            } | {
                                message?: string | undefined;
                                type: "writeValueToProfile";
                                profileKey: string;
                                value: {};
                            })[] | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            isPublic?: boolean | undefined;
                            categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
                            options?: ({
                                label?: string | undefined;
                                followUps?: ({
                                    message?: string | undefined;
                                    type: "askAnotherQuestion";
                                    questionId: string;
                                } | {
                                    message?: string | undefined;
                                    type: "writeAnswerToProfile";
                                    profileKey: string;
                                } | {
                                    message?: string | undefined;
                                    type: "writeValueToProfile";
                                    profileKey: string;
                                    value: {};
                                })[] | undefined;
                                color?: string | undefined;
                                textColor?: string | undefined;
                                setbackThreshold?: number | undefined;
                                greaterThan?: number | undefined;
                                lessThanOrEqualTo?: number | undefined;
                                type: "numeric";
                                text: string;
                            } | {
                                label?: string | undefined;
                                followUps?: ({
                                    message?: string | undefined;
                                    type: "askAnotherQuestion";
                                    questionId: string;
                                } | {
                                    message?: string | undefined;
                                    type: "writeAnswerToProfile";
                                    profileKey: string;
                                } | {
                                    message?: string | undefined;
                                    type: "writeValueToProfile";
                                    profileKey: string;
                                    value: {};
                                })[] | undefined;
                                color?: string | undefined;
                                textColor?: string | undefined;
                                type: "string";
                                text: string;
                            })[] | undefined;
                            ordinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                            writeAnswerToProfileMemoryKey?: string | undefined;
                            type: "text";
                            prompt: string;
                            ordinal: number;
                        } | {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            followUps?: ({
                                message?: string | undefined;
                                type: "askAnotherQuestion";
                                questionId: string;
                            } | {
                                message?: string | undefined;
                                type: "writeAnswerToProfile";
                                profileKey: string;
                            } | {
                                message?: string | undefined;
                                type: "writeValueToProfile";
                                profileKey: string;
                                value: {};
                            })[] | undefined;
                            setbackThreshold?: number | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            isPublic?: boolean | undefined;
                            categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
                            options?: ({
                                label?: string | undefined;
                                followUps?: ({
                                    message?: string | undefined;
                                    type: "askAnotherQuestion";
                                    questionId: string;
                                } | {
                                    message?: string | undefined;
                                    type: "writeAnswerToProfile";
                                    profileKey: string;
                                } | {
                                    message?: string | undefined;
                                    type: "writeValueToProfile";
                                    profileKey: string;
                                    value: {};
                                })[] | undefined;
                                color?: string | undefined;
                                textColor?: string | undefined;
                                setbackThreshold?: number | undefined;
                                greaterThan?: number | undefined;
                                lessThanOrEqualTo?: number | undefined;
                                type: "numeric";
                                text: string;
                            } | {
                                label?: string | undefined;
                                followUps?: ({
                                    message?: string | undefined;
                                    type: "askAnotherQuestion";
                                    questionId: string;
                                } | {
                                    message?: string | undefined;
                                    type: "writeAnswerToProfile";
                                    profileKey: string;
                                } | {
                                    message?: string | undefined;
                                    type: "writeValueToProfile";
                                    profileKey: string;
                                    value: {};
                                })[] | undefined;
                                color?: string | undefined;
                                textColor?: string | undefined;
                                type: "string";
                                text: string;
                            })[] | undefined;
                            ordinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                            writeAnswerToProfileMemoryKey?: string | undefined;
                            type: "time";
                            prompt: string;
                            ordinal: number;
                        };
                    } | {
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        updatedAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        uid?: string | undefined;
                        setbackThreshold?: number | null | undefined;
                        recommendedForIssueIds?: string[] | undefined;
                        prompt?: string | undefined;
                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        sharedWithIssueIds?: string[] | undefined;
                        recommendedForIssueOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        isShared?: boolean | undefined;
                        description?: string | null | undefined;
                        pastTenseTitle?: string | undefined;
                        debriefAfterMinutes?: number | null | undefined;
                        image?: {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            localFilePath?: yup.Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            waveForm?: yup.Maybe<string | undefined>;
                            thumbnailStoragePath?: yup.Maybe<string | undefined>;
                            thumbnailUri?: yup.Maybe<string | undefined>;
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        type: "steps";
                        ordinal: number;
                        targetSteps: number;
                    } | {
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        updatedAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        uid?: string | undefined;
                        setbackThreshold?: number | null | undefined;
                        recommendedForIssueIds?: string[] | undefined;
                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        sharedWithIssueIds?: string[] | undefined;
                        recommendedForIssueOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        isShared?: boolean | undefined;
                        description?: string | null | undefined;
                        pastTenseTitle?: string | undefined;
                        debriefAfterMinutes?: number | null | undefined;
                        image?: {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            localFilePath?: yup.Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            waveForm?: yup.Maybe<string | undefined>;
                            thumbnailStoragePath?: yup.Maybe<string | undefined>;
                            thumbnailUri?: yup.Maybe<string | undefined>;
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        type: "task";
                        prompt: string;
                        ordinal: number;
                    } | {
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        updatedAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        uid?: string | undefined;
                        setbackThreshold?: number | null | undefined;
                        recommendedForIssueIds?: string[] | undefined;
                        prompt?: string | undefined;
                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        sharedWithIssueIds?: string[] | undefined;
                        recommendedForIssueOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        isShared?: boolean | undefined;
                        description?: string | null | undefined;
                        pastTenseTitle?: string | undefined;
                        debriefAfterMinutes?: number | null | undefined;
                        image?: {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            localFilePath?: yup.Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            waveForm?: yup.Maybe<string | undefined>;
                            thumbnailStoragePath?: yup.Maybe<string | undefined>;
                            thumbnailUri?: yup.Maybe<string | undefined>;
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        type: "video";
                        ordinal: number;
                        video: {
                            storagePath?: string | null | undefined;
                            url?: string | null | undefined;
                        };
                    };
                } | null | undefined;
                templateForIssueIds?: string[] | undefined;
                tacticCount?: number | undefined;
                profileIssues?: import("./utils/firestore").DocumentReferenceLike<unknown>[] | undefined;
                tourTitle?: string | undefined;
                tourDescription?: string | undefined;
                tourConfirmButtonText?: string | undefined;
                next3Tactics?: ({
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    uid?: string | undefined;
                    setbackThreshold?: number | null | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    prompt?: string | undefined;
                    sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                    sharedWithIssueIds?: string[] | undefined;
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    isShared?: boolean | undefined;
                    description?: string | null | undefined;
                    pastTenseTitle?: string | undefined;
                    debriefAfterMinutes?: number | null | undefined;
                    image?: {
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        updatedAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        localFilePath?: yup.Maybe<string | undefined>;
                        isDeleted?: boolean | undefined;
                        waveForm?: yup.Maybe<string | undefined>;
                        thumbnailStoragePath?: yup.Maybe<string | undefined>;
                        thumbnailUri?: yup.Maybe<string | undefined>;
                        contentType: string;
                        storagePath: string;
                        uri: string;
                    } | undefined;
                    backgroundColor?: string | undefined;
                    likesCount?: number | null | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    isSuggested?: boolean | undefined;
                    type: "audio";
                    ordinal: number;
                    recording: {
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        updatedAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        localFilePath?: yup.Maybe<string | undefined>;
                        isDeleted?: boolean | undefined;
                        waveForm?: yup.Maybe<string | undefined>;
                        thumbnailStoragePath?: yup.Maybe<string | undefined>;
                        thumbnailUri?: yup.Maybe<string | undefined>;
                        contentType: string;
                        storagePath: string;
                        uri: string;
                    };
                } | {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    uid?: string | undefined;
                    repeat?: yup.Maybe<number | undefined>;
                    setbackThreshold?: number | null | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    prompt?: string | undefined;
                    sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                    sharedWithIssueIds?: string[] | undefined;
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    isShared?: boolean | undefined;
                    description?: string | null | undefined;
                    pastTenseTitle?: string | undefined;
                    debriefAfterMinutes?: number | null | undefined;
                    image?: {
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        updatedAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        localFilePath?: yup.Maybe<string | undefined>;
                        isDeleted?: boolean | undefined;
                        waveForm?: yup.Maybe<string | undefined>;
                        thumbnailStoragePath?: yup.Maybe<string | undefined>;
                        thumbnailUri?: yup.Maybe<string | undefined>;
                        contentType: string;
                        storagePath: string;
                        uri: string;
                    } | undefined;
                    backgroundColor?: string | undefined;
                    likesCount?: number | null | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    isSuggested?: boolean | undefined;
                    type: "breathingExercise";
                    ordinal: number;
                    inFor: number;
                    holdFor: number;
                    outFor: number;
                } | {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    uid?: string | undefined;
                    setbackThreshold?: number | null | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    prompt?: string | undefined;
                    sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                    sharedWithIssueIds?: string[] | undefined;
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    isShared?: boolean | undefined;
                    description?: string | null | undefined;
                    pastTenseTitle?: string | undefined;
                    debriefAfterMinutes?: number | null | undefined;
                    image?: {
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        updatedAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        localFilePath?: yup.Maybe<string | undefined>;
                        isDeleted?: boolean | undefined;
                        waveForm?: yup.Maybe<string | undefined>;
                        thumbnailStoragePath?: yup.Maybe<string | undefined>;
                        thumbnailUri?: yup.Maybe<string | undefined>;
                        contentType: string;
                        storagePath: string;
                        uri: string;
                    } | undefined;
                    backgroundColor?: string | undefined;
                    likesCount?: number | null | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    isSuggested?: boolean | undefined;
                    type: "link";
                    ordinal: number;
                    url: string;
                } | {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    uid?: string | undefined;
                    setbackThreshold?: number | null | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    prompt?: string | undefined;
                    sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                    sharedWithIssueIds?: string[] | undefined;
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    isShared?: boolean | undefined;
                    description?: string | null | undefined;
                    pastTenseTitle?: string | undefined;
                    debriefAfterMinutes?: number | null | undefined;
                    image?: {
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        updatedAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        localFilePath?: yup.Maybe<string | undefined>;
                        isDeleted?: boolean | undefined;
                        waveForm?: yup.Maybe<string | undefined>;
                        thumbnailStoragePath?: yup.Maybe<string | undefined>;
                        thumbnailUri?: yup.Maybe<string | undefined>;
                        contentType: string;
                        storagePath: string;
                        uri: string;
                    } | undefined;
                    backgroundColor?: string | undefined;
                    likesCount?: number | null | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    isSuggested?: boolean | undefined;
                    type: "notifyASupportPerson";
                    ordinal: number;
                    contactIds: string[];
                } | {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    uid?: string | undefined;
                    setbackThreshold?: number | null | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    prompt?: string | undefined;
                    sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                    sharedWithIssueIds?: string[] | undefined;
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    isShared?: boolean | undefined;
                    description?: string | null | undefined;
                    pastTenseTitle?: string | undefined;
                    debriefAfterMinutes?: number | null | undefined;
                    image?: {
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        updatedAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        localFilePath?: yup.Maybe<string | undefined>;
                        isDeleted?: boolean | undefined;
                        waveForm?: yup.Maybe<string | undefined>;
                        thumbnailStoragePath?: yup.Maybe<string | undefined>;
                        thumbnailUri?: yup.Maybe<string | undefined>;
                        contentType: string;
                        storagePath: string;
                        uri: string;
                    } | undefined;
                    backgroundColor?: string | undefined;
                    likesCount?: number | null | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    isSuggested?: boolean | undefined;
                    type: "notifySupportGroup";
                    ordinal: number;
                    supportGroup: import("./utils/firestore").DocumentReferenceLike<unknown>;
                } | {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    uid?: string | undefined;
                    setbackThreshold?: number | null | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    prompt?: string | undefined;
                    sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                    sharedWithIssueIds?: string[] | undefined;
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    isShared?: boolean | undefined;
                    description?: string | null | undefined;
                    pastTenseTitle?: string | undefined;
                    debriefAfterMinutes?: number | null | undefined;
                    image?: {
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        updatedAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        localFilePath?: yup.Maybe<string | undefined>;
                        isDeleted?: boolean | undefined;
                        waveForm?: yup.Maybe<string | undefined>;
                        thumbnailStoragePath?: yup.Maybe<string | undefined>;
                        thumbnailUri?: yup.Maybe<string | undefined>;
                        contentType: string;
                        storagePath: string;
                        uri: string;
                    } | undefined;
                    backgroundColor?: string | undefined;
                    likesCount?: number | null | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    isSuggested?: boolean | undefined;
                    type: "question";
                    ordinal: number;
                    question: {
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        updatedAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        followUps?: ({
                            message?: string | undefined;
                            type: "askAnotherQuestion";
                            questionId: string;
                        } | {
                            message?: string | undefined;
                            type: "writeAnswerToProfile";
                            profileKey: string;
                        } | {
                            message?: string | undefined;
                            type: "writeValueToProfile";
                            profileKey: string;
                            value: {};
                        })[] | undefined;
                        setbackThreshold?: number | undefined;
                        recommendedForIssueIds?: string[] | undefined;
                        isPublic?: boolean | undefined;
                        categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
                        options?: ({
                            label?: string | undefined;
                            followUps?: ({
                                message?: string | undefined;
                                type: "askAnotherQuestion";
                                questionId: string;
                            } | {
                                message?: string | undefined;
                                type: "writeAnswerToProfile";
                                profileKey: string;
                            } | {
                                message?: string | undefined;
                                type: "writeValueToProfile";
                                profileKey: string;
                                value: {};
                            })[] | undefined;
                            color?: string | undefined;
                            textColor?: string | undefined;
                            setbackThreshold?: number | undefined;
                            greaterThan?: number | undefined;
                            lessThanOrEqualTo?: number | undefined;
                            type: "numeric";
                            text: string;
                        } | {
                            label?: string | undefined;
                            followUps?: ({
                                message?: string | undefined;
                                type: "askAnotherQuestion";
                                questionId: string;
                            } | {
                                message?: string | undefined;
                                type: "writeAnswerToProfile";
                                profileKey: string;
                            } | {
                                message?: string | undefined;
                                type: "writeValueToProfile";
                                profileKey: string;
                                value: {};
                            })[] | undefined;
                            color?: string | undefined;
                            textColor?: string | undefined;
                            type: "string";
                            text: string;
                        })[] | undefined;
                        ordinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                        writeAnswerToProfileMemoryKey?: string | undefined;
                        type: "counter";
                        prompt: string;
                        ordinal: number;
                    } | {
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        updatedAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        followUps?: ({
                            message?: string | undefined;
                            type: "askAnotherQuestion";
                            questionId: string;
                        } | {
                            message?: string | undefined;
                            type: "writeAnswerToProfile";
                            profileKey: string;
                        } | {
                            message?: string | undefined;
                            type: "writeValueToProfile";
                            profileKey: string;
                            value: {};
                        })[] | undefined;
                        recommendedForIssueIds?: string[] | undefined;
                        isPublic?: boolean | undefined;
                        categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
                        options?: ({
                            label?: string | undefined;
                            followUps?: ({
                                message?: string | undefined;
                                type: "askAnotherQuestion";
                                questionId: string;
                            } | {
                                message?: string | undefined;
                                type: "writeAnswerToProfile";
                                profileKey: string;
                            } | {
                                message?: string | undefined;
                                type: "writeValueToProfile";
                                profileKey: string;
                                value: {};
                            })[] | undefined;
                            color?: string | undefined;
                            textColor?: string | undefined;
                            setbackThreshold?: number | undefined;
                            greaterThan?: number | undefined;
                            lessThanOrEqualTo?: number | undefined;
                            type: "numeric";
                            text: string;
                        } | {
                            label?: string | undefined;
                            followUps?: ({
                                message?: string | undefined;
                                type: "askAnotherQuestion";
                                questionId: string;
                            } | {
                                message?: string | undefined;
                                type: "writeAnswerToProfile";
                                profileKey: string;
                            } | {
                                message?: string | undefined;
                                type: "writeValueToProfile";
                                profileKey: string;
                                value: {};
                            })[] | undefined;
                            color?: string | undefined;
                            textColor?: string | undefined;
                            type: "string";
                            text: string;
                        })[] | undefined;
                        ordinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                        writeAnswerToProfileMemoryKey?: string | undefined;
                        type: "issue";
                        prompt: string;
                        ordinal: number;
                    } | {
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        updatedAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        followUps?: ({
                            message?: string | undefined;
                            type: "askAnotherQuestion";
                            questionId: string;
                        } | {
                            message?: string | undefined;
                            type: "writeAnswerToProfile";
                            profileKey: string;
                        } | {
                            message?: string | undefined;
                            type: "writeValueToProfile";
                            profileKey: string;
                            value: {};
                        })[] | undefined;
                        recommendedForIssueIds?: string[] | undefined;
                        isPublic?: boolean | undefined;
                        categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
                        ordinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                        writeAnswerToProfileMemoryKey?: string | undefined;
                        type: "multipleChoice";
                        prompt: string;
                        options: ({
                            label?: string | undefined;
                            followUps?: ({
                                message?: string | undefined;
                                type: "askAnotherQuestion";
                                questionId: string;
                            } | {
                                message?: string | undefined;
                                type: "writeAnswerToProfile";
                                profileKey: string;
                            } | {
                                message?: string | undefined;
                                type: "writeValueToProfile";
                                profileKey: string;
                                value: {};
                            })[] | undefined;
                            color?: string | undefined;
                            textColor?: string | undefined;
                            setbackThreshold?: number | undefined;
                            greaterThan?: number | undefined;
                            lessThanOrEqualTo?: number | undefined;
                            type: "numeric";
                            text: string;
                        } | {
                            label?: string | undefined;
                            followUps?: ({
                                message?: string | undefined;
                                type: "askAnotherQuestion";
                                questionId: string;
                            } | {
                                message?: string | undefined;
                                type: "writeAnswerToProfile";
                                profileKey: string;
                            } | {
                                message?: string | undefined;
                                type: "writeValueToProfile";
                                profileKey: string;
                                value: {};
                            })[] | undefined;
                            color?: string | undefined;
                            textColor?: string | undefined;
                            type: "string";
                            text: string;
                        })[];
                        ordinal: number;
                        canAddNewOptions: NonNullable<boolean | undefined>;
                    } | {
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        updatedAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        followUps?: ({
                            message?: string | undefined;
                            type: "askAnotherQuestion";
                            questionId: string;
                        } | {
                            message?: string | undefined;
                            type: "writeAnswerToProfile";
                            profileKey: string;
                        } | {
                            message?: string | undefined;
                            type: "writeValueToProfile";
                            profileKey: string;
                            value: {};
                        })[] | undefined;
                        setbackThreshold?: number | undefined;
                        recommendedForIssueIds?: string[] | undefined;
                        isPublic?: boolean | undefined;
                        categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
                        options?: ({
                            label?: string | undefined;
                            followUps?: ({
                                message?: string | undefined;
                                type: "askAnotherQuestion";
                                questionId: string;
                            } | {
                                message?: string | undefined;
                                type: "writeAnswerToProfile";
                                profileKey: string;
                            } | {
                                message?: string | undefined;
                                type: "writeValueToProfile";
                                profileKey: string;
                                value: {};
                            })[] | undefined;
                            color?: string | undefined;
                            textColor?: string | undefined;
                            setbackThreshold?: number | undefined;
                            greaterThan?: number | undefined;
                            lessThanOrEqualTo?: number | undefined;
                            type: "numeric";
                            text: string;
                        } | {
                            label?: string | undefined;
                            followUps?: ({
                                message?: string | undefined;
                                type: "askAnotherQuestion";
                                questionId: string;
                            } | {
                                message?: string | undefined;
                                type: "writeAnswerToProfile";
                                profileKey: string;
                            } | {
                                message?: string | undefined;
                                type: "writeValueToProfile";
                                profileKey: string;
                                value: {};
                            })[] | undefined;
                            color?: string | undefined;
                            textColor?: string | undefined;
                            type: "string";
                            text: string;
                        })[] | undefined;
                        ordinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                        writeAnswerToProfileMemoryKey?: string | undefined;
                        lowEmoji?: yup.Maybe<string | undefined>;
                        highEmoji?: yup.Maybe<string | undefined>;
                        type: "scaleOf1To10";
                        prompt: string;
                        ordinal: number;
                    } | {
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        updatedAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        followUps?: ({
                            message?: string | undefined;
                            type: "askAnotherQuestion";
                            questionId: string;
                        } | {
                            message?: string | undefined;
                            type: "writeAnswerToProfile";
                            profileKey: string;
                        } | {
                            message?: string | undefined;
                            type: "writeValueToProfile";
                            profileKey: string;
                            value: {};
                        })[] | undefined;
                        recommendedForIssueIds?: string[] | undefined;
                        isPublic?: boolean | undefined;
                        categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
                        options?: ({
                            label?: string | undefined;
                            followUps?: ({
                                message?: string | undefined;
                                type: "askAnotherQuestion";
                                questionId: string;
                            } | {
                                message?: string | undefined;
                                type: "writeAnswerToProfile";
                                profileKey: string;
                            } | {
                                message?: string | undefined;
                                type: "writeValueToProfile";
                                profileKey: string;
                                value: {};
                            })[] | undefined;
                            color?: string | undefined;
                            textColor?: string | undefined;
                            setbackThreshold?: number | undefined;
                            greaterThan?: number | undefined;
                            lessThanOrEqualTo?: number | undefined;
                            type: "numeric";
                            text: string;
                        } | {
                            label?: string | undefined;
                            followUps?: ({
                                message?: string | undefined;
                                type: "askAnotherQuestion";
                                questionId: string;
                            } | {
                                message?: string | undefined;
                                type: "writeAnswerToProfile";
                                profileKey: string;
                            } | {
                                message?: string | undefined;
                                type: "writeValueToProfile";
                                profileKey: string;
                                value: {};
                            })[] | undefined;
                            color?: string | undefined;
                            textColor?: string | undefined;
                            type: "string";
                            text: string;
                        })[] | undefined;
                        ordinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                        writeAnswerToProfileMemoryKey?: string | undefined;
                        type: "text";
                        prompt: string;
                        ordinal: number;
                    } | {
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        updatedAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        followUps?: ({
                            message?: string | undefined;
                            type: "askAnotherQuestion";
                            questionId: string;
                        } | {
                            message?: string | undefined;
                            type: "writeAnswerToProfile";
                            profileKey: string;
                        } | {
                            message?: string | undefined;
                            type: "writeValueToProfile";
                            profileKey: string;
                            value: {};
                        })[] | undefined;
                        setbackThreshold?: number | undefined;
                        recommendedForIssueIds?: string[] | undefined;
                        isPublic?: boolean | undefined;
                        categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
                        options?: ({
                            label?: string | undefined;
                            followUps?: ({
                                message?: string | undefined;
                                type: "askAnotherQuestion";
                                questionId: string;
                            } | {
                                message?: string | undefined;
                                type: "writeAnswerToProfile";
                                profileKey: string;
                            } | {
                                message?: string | undefined;
                                type: "writeValueToProfile";
                                profileKey: string;
                                value: {};
                            })[] | undefined;
                            color?: string | undefined;
                            textColor?: string | undefined;
                            setbackThreshold?: number | undefined;
                            greaterThan?: number | undefined;
                            lessThanOrEqualTo?: number | undefined;
                            type: "numeric";
                            text: string;
                        } | {
                            label?: string | undefined;
                            followUps?: ({
                                message?: string | undefined;
                                type: "askAnotherQuestion";
                                questionId: string;
                            } | {
                                message?: string | undefined;
                                type: "writeAnswerToProfile";
                                profileKey: string;
                            } | {
                                message?: string | undefined;
                                type: "writeValueToProfile";
                                profileKey: string;
                                value: {};
                            })[] | undefined;
                            color?: string | undefined;
                            textColor?: string | undefined;
                            type: "string";
                            text: string;
                        })[] | undefined;
                        ordinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                        writeAnswerToProfileMemoryKey?: string | undefined;
                        type: "time";
                        prompt: string;
                        ordinal: number;
                    };
                } | {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    uid?: string | undefined;
                    setbackThreshold?: number | null | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    prompt?: string | undefined;
                    sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                    sharedWithIssueIds?: string[] | undefined;
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    isShared?: boolean | undefined;
                    description?: string | null | undefined;
                    pastTenseTitle?: string | undefined;
                    debriefAfterMinutes?: number | null | undefined;
                    image?: {
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        updatedAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        localFilePath?: yup.Maybe<string | undefined>;
                        isDeleted?: boolean | undefined;
                        waveForm?: yup.Maybe<string | undefined>;
                        thumbnailStoragePath?: yup.Maybe<string | undefined>;
                        thumbnailUri?: yup.Maybe<string | undefined>;
                        contentType: string;
                        storagePath: string;
                        uri: string;
                    } | undefined;
                    backgroundColor?: string | undefined;
                    likesCount?: number | null | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    isSuggested?: boolean | undefined;
                    type: "steps";
                    ordinal: number;
                    targetSteps: number;
                } | {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    uid?: string | undefined;
                    setbackThreshold?: number | null | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                    sharedWithIssueIds?: string[] | undefined;
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    isShared?: boolean | undefined;
                    description?: string | null | undefined;
                    pastTenseTitle?: string | undefined;
                    debriefAfterMinutes?: number | null | undefined;
                    image?: {
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        updatedAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        localFilePath?: yup.Maybe<string | undefined>;
                        isDeleted?: boolean | undefined;
                        waveForm?: yup.Maybe<string | undefined>;
                        thumbnailStoragePath?: yup.Maybe<string | undefined>;
                        thumbnailUri?: yup.Maybe<string | undefined>;
                        contentType: string;
                        storagePath: string;
                        uri: string;
                    } | undefined;
                    backgroundColor?: string | undefined;
                    likesCount?: number | null | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    isSuggested?: boolean | undefined;
                    type: "task";
                    prompt: string;
                    ordinal: number;
                } | {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    uid?: string | undefined;
                    setbackThreshold?: number | null | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    prompt?: string | undefined;
                    sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                    sharedWithIssueIds?: string[] | undefined;
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    isShared?: boolean | undefined;
                    description?: string | null | undefined;
                    pastTenseTitle?: string | undefined;
                    debriefAfterMinutes?: number | null | undefined;
                    image?: {
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        updatedAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        localFilePath?: yup.Maybe<string | undefined>;
                        isDeleted?: boolean | undefined;
                        waveForm?: yup.Maybe<string | undefined>;
                        thumbnailStoragePath?: yup.Maybe<string | undefined>;
                        thumbnailUri?: yup.Maybe<string | undefined>;
                        contentType: string;
                        storagePath: string;
                        uri: string;
                    } | undefined;
                    backgroundColor?: string | undefined;
                    likesCount?: number | null | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    isSuggested?: boolean | undefined;
                    type: "video";
                    ordinal: number;
                    video: {
                        storagePath?: string | null | undefined;
                        url?: string | null | undefined;
                    };
                })[] | undefined;
                nextTacticId?: string | undefined;
                name: string;
                isCollaborative: NonNullable<boolean | undefined>;
                invitationCode: string;
                invitationUrl: string;
            };
        };
    } | null | undefined;
}, yup.AnyObject, {
    createdAt: undefined;
    updatedAt: undefined;
    blandPathwayData: {
        nodes: "";
        edges: "";
    };
    blandPathwayId: undefined;
    summary: undefined;
    issuesById: undefined;
    profileStrategiesById: undefined;
}, "">;
export type GameplanValue = yup.InferType<typeof gameplanSchema>;
