import * as yup from 'yup';
export declare const gameplanSchema: yup.ObjectSchema<{
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
    blandPathwayData: {
        nodes?: {}[] | undefined;
        edges?: {}[] | undefined;
    };
    blandPathwayId: string | undefined;
    issuesById: {
        [x: string]: {
            path?: string | null | undefined;
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
            ordinal?: number | undefined;
            strategyDoc?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                        setbackThreshold?: number | null | undefined;
                        recommendedForIssueIds?: string[] | undefined;
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
                        prompt?: string | undefined;
                        profileId?: string | undefined;
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
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        waveForm?: string | null | undefined;
                        type: "audio";
                        ordinal: number;
                        recording: {
                            localFilePath?: yup.Maybe<string | undefined>;
                            storagePath?: yup.Maybe<string | undefined>;
                            uri?: yup.Maybe<string | undefined>;
                        };
                    } | {
                        repeat?: yup.Maybe<number | undefined>;
                        setbackThreshold?: number | null | undefined;
                        recommendedForIssueIds?: string[] | undefined;
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
                        prompt?: string | undefined;
                        profileId?: string | undefined;
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
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        type: "breathingExercise";
                        ordinal: number;
                        inFor: number;
                        holdFor: number;
                        outFor: number;
                    } | {
                        setbackThreshold?: number | null | undefined;
                        recommendedForIssueIds?: string[] | undefined;
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
                        prompt?: string | undefined;
                        profileId?: string | undefined;
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
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        type: "link";
                        ordinal: number;
                        url: string;
                    } | {
                        setbackThreshold?: number | null | undefined;
                        recommendedForIssueIds?: string[] | undefined;
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
                        prompt?: string | undefined;
                        profileId?: string | undefined;
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
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        type: "notifyASupportPerson";
                        ordinal: number;
                        contactIds: string[];
                    } | {
                        setbackThreshold?: number | null | undefined;
                        recommendedForIssueIds?: string[] | undefined;
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
                        prompt?: string | undefined;
                        profileId?: string | undefined;
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
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        type: "notifySupportGroup";
                        ordinal: number;
                        supportGroup: import("./utils/firestore").DocumentReferenceLike<unknown>;
                    } | {
                        setbackThreshold?: number | null | undefined;
                        recommendedForIssueIds?: string[] | undefined;
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
                        prompt?: string | undefined;
                        profileId?: string | undefined;
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
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        type: "question";
                        ordinal: number;
                        question: {
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
                        setbackThreshold?: number | null | undefined;
                        recommendedForIssueIds?: string[] | undefined;
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
                        prompt?: string | undefined;
                        profileId?: string | undefined;
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
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        type: "steps";
                        ordinal: number;
                        targetSteps: number;
                    } | {
                        setbackThreshold?: number | null | undefined;
                        recommendedForIssueIds?: string[] | undefined;
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
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        type: "task";
                        prompt: string;
                        ordinal: number;
                    } | {
                        setbackThreshold?: number | null | undefined;
                        recommendedForIssueIds?: string[] | undefined;
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
                        prompt?: string | undefined;
                        profileId?: string | undefined;
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
                    setbackThreshold?: number | null | undefined;
                    recommendedForIssueIds?: string[] | undefined;
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
                    prompt?: string | undefined;
                    profileId?: string | undefined;
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
                    likesCount?: number | null | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    isSuggested?: boolean | undefined;
                    waveForm?: string | null | undefined;
                    type: "audio";
                    ordinal: number;
                    recording: {
                        localFilePath?: yup.Maybe<string | undefined>;
                        storagePath?: yup.Maybe<string | undefined>;
                        uri?: yup.Maybe<string | undefined>;
                    };
                } | {
                    repeat?: yup.Maybe<number | undefined>;
                    setbackThreshold?: number | null | undefined;
                    recommendedForIssueIds?: string[] | undefined;
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
                    prompt?: string | undefined;
                    profileId?: string | undefined;
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
                    likesCount?: number | null | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    isSuggested?: boolean | undefined;
                    type: "breathingExercise";
                    ordinal: number;
                    inFor: number;
                    holdFor: number;
                    outFor: number;
                } | {
                    setbackThreshold?: number | null | undefined;
                    recommendedForIssueIds?: string[] | undefined;
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
                    prompt?: string | undefined;
                    profileId?: string | undefined;
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
                    likesCount?: number | null | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    isSuggested?: boolean | undefined;
                    type: "link";
                    ordinal: number;
                    url: string;
                } | {
                    setbackThreshold?: number | null | undefined;
                    recommendedForIssueIds?: string[] | undefined;
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
                    prompt?: string | undefined;
                    profileId?: string | undefined;
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
                    likesCount?: number | null | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    isSuggested?: boolean | undefined;
                    type: "notifyASupportPerson";
                    ordinal: number;
                    contactIds: string[];
                } | {
                    setbackThreshold?: number | null | undefined;
                    recommendedForIssueIds?: string[] | undefined;
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
                    prompt?: string | undefined;
                    profileId?: string | undefined;
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
                    likesCount?: number | null | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    isSuggested?: boolean | undefined;
                    type: "notifySupportGroup";
                    ordinal: number;
                    supportGroup: import("./utils/firestore").DocumentReferenceLike<unknown>;
                } | {
                    setbackThreshold?: number | null | undefined;
                    recommendedForIssueIds?: string[] | undefined;
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
                    prompt?: string | undefined;
                    profileId?: string | undefined;
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
                    likesCount?: number | null | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    isSuggested?: boolean | undefined;
                    type: "question";
                    ordinal: number;
                    question: {
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
                    setbackThreshold?: number | null | undefined;
                    recommendedForIssueIds?: string[] | undefined;
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
                    prompt?: string | undefined;
                    profileId?: string | undefined;
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
                    likesCount?: number | null | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    isSuggested?: boolean | undefined;
                    type: "steps";
                    ordinal: number;
                    targetSteps: number;
                } | {
                    setbackThreshold?: number | null | undefined;
                    recommendedForIssueIds?: string[] | undefined;
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
                    likesCount?: number | null | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    isSuggested?: boolean | undefined;
                    type: "task";
                    prompt: string;
                    ordinal: number;
                } | {
                    setbackThreshold?: number | null | undefined;
                    recommendedForIssueIds?: string[] | undefined;
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
                    prompt?: string | undefined;
                    profileId?: string | undefined;
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
                isShared: NonNullable<boolean | undefined>;
                invitationCode: string;
                invitationUrl: string;
            };
            sortBy: NonNullable<"random" | "newest" | undefined>;
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
    issuesById: undefined;
    profileStrategiesById: undefined;
}, "">;
export type GameplanValue = yup.InferType<typeof gameplanSchema>;
