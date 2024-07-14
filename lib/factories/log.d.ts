import * as Factory from 'factory.ts';
import { TimestampLike } from '../utils/firestore/TimestampLike';
export declare const makeImpulseLogFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
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
    text?: string | undefined;
    issueName?: string | undefined;
    activeImpulseId?: string | null | undefined;
    senderProfileId?: string | null | undefined;
    views?: {
        openTime: {
            isEqual?: any;
            toMillis?: any;
            toJSON?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        };
        closeTime: {
            isEqual?: any;
            toMillis?: any;
            toJSON?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        };
    }[] | undefined;
    agent?: import("..").AgentName | undefined;
    gptPayload?: {
        role: NonNullable<"system" | "user" | "assistant" | undefined>;
        content: string;
    }[] | undefined;
    openAiChoiceResponse?: {} | undefined;
    questionData?: {
        [x: string]: {
            label?: string | undefined;
            color?: string | undefined;
            setbackThreshold?: number | undefined;
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
    submittedAt?: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    isDebrief?: boolean | undefined;
    parentIssueIds: string[];
    questionsById: {
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
            categories?: ("general" | "impulses" | "debriefing" | "dailyReview" | "afterSuccess" | "afterSetback")[] | undefined;
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
                text: string;
                type: "numeric";
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
                text: string;
                type: "string";
            })[] | undefined;
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
            ordinals?: {
                [x: string]: number;
            } | null | undefined;
            templateFor?: "onboarding" | undefined;
            writeAnswerToProfileMemoryKey?: string | undefined;
            prompt: string;
            type: import("..").QuestionKeyType;
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
            categories?: ("general" | "impulses" | "debriefing" | "dailyReview" | "afterSuccess" | "afterSetback")[] | undefined;
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
                text: string;
                type: "numeric";
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
                text: string;
                type: "string";
            })[] | undefined;
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
            ordinals?: {
                [x: string]: number;
            } | null | undefined;
            templateFor?: "onboarding" | undefined;
            writeAnswerToProfileMemoryKey?: string | undefined;
            lowEmoji?: import("yup").Maybe<string | undefined>;
            highEmoji?: import("yup").Maybe<string | undefined>;
            prompt: string;
            type: import("..").QuestionKeyType;
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
            categories?: ("general" | "impulses" | "debriefing" | "dailyReview" | "afterSuccess" | "afterSetback")[] | undefined;
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
                text: string;
                type: "numeric";
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
                text: string;
                type: "string";
            })[] | undefined;
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
            ordinals?: {
                [x: string]: number;
            } | null | undefined;
            templateFor?: "onboarding" | undefined;
            writeAnswerToProfileMemoryKey?: string | undefined;
            prompt: string;
            type: import("..").QuestionKeyType;
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
            categories?: ("general" | "impulses" | "debriefing" | "dailyReview" | "afterSuccess" | "afterSetback")[] | undefined;
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
                text: string;
                type: "numeric";
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
                text: string;
                type: "string";
            })[] | undefined;
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
            ordinals?: {
                [x: string]: number;
            } | null | undefined;
            templateFor?: "onboarding" | undefined;
            writeAnswerToProfileMemoryKey?: string | undefined;
            prompt: string;
            type: import("..").QuestionKeyType;
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
            categories?: ("general" | "impulses" | "debriefing" | "dailyReview" | "afterSuccess" | "afterSetback")[] | undefined;
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
            ordinals?: {
                [x: string]: number;
            } | null | undefined;
            templateFor?: "onboarding" | undefined;
            writeAnswerToProfileMemoryKey?: string | undefined;
            prompt: string;
            type: import("..").QuestionKeyType;
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
                text: string;
                type: "numeric";
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
                text: string;
                type: "string";
            })[];
            canAddNewOptions: NonNullable<boolean | undefined>;
        };
    };
    type: "impulse";
    strategiesById: {
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
            profileId?: string | null | undefined;
            prompt?: string | undefined;
            setbackThreshold?: number | null | undefined;
            recommendedForIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            isInGameplan?: boolean | undefined;
            pastTenseTitle?: string | undefined;
            commentCount?: number | undefined;
            description?: string | null | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                localFilePath?: import("yup").Maybe<string | undefined>;
                storagePath?: import("yup").Maybe<string | undefined>;
                uri?: import("yup").Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: import("yup").Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            recording: {
                localFilePath?: string | undefined;
                waveform?: string | null | undefined;
                remoteFilePath: string;
            };
            type: "audio";
            ordinal: number;
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
            profileId?: string | null | undefined;
            setbackThreshold?: number | null | undefined;
            recommendedForIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            isInGameplan?: boolean | undefined;
            pastTenseTitle?: string | undefined;
            commentCount?: number | undefined;
            description?: string | null | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                localFilePath?: import("yup").Maybe<string | undefined>;
                storagePath?: import("yup").Maybe<string | undefined>;
                uri?: import("yup").Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: import("yup").Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            repeat?: import("yup").Maybe<number | undefined>;
            prompt: string;
            type: "breathingExercise";
            ordinal: number;
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
            profileId?: string | null | undefined;
            setbackThreshold?: number | null | undefined;
            recommendedForIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            isInGameplan?: boolean | undefined;
            pastTenseTitle?: string | undefined;
            commentCount?: number | undefined;
            description?: string | null | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                localFilePath?: import("yup").Maybe<string | undefined>;
                storagePath?: import("yup").Maybe<string | undefined>;
                uri?: import("yup").Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: import("yup").Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            prompt: string;
            type: "notifyASupportPerson";
            ordinal: number;
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
            profileId?: string | null | undefined;
            setbackThreshold?: number | null | undefined;
            recommendedForIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            isInGameplan?: boolean | undefined;
            pastTenseTitle?: string | undefined;
            commentCount?: number | undefined;
            description?: string | null | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                localFilePath?: import("yup").Maybe<string | undefined>;
                storagePath?: import("yup").Maybe<string | undefined>;
                uri?: import("yup").Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: import("yup").Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            prompt: string;
            type: "steps";
            ordinal: number;
            steps: number;
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
            profileId?: string | null | undefined;
            setbackThreshold?: number | null | undefined;
            recommendedForIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            isInGameplan?: boolean | undefined;
            pastTenseTitle?: string | undefined;
            commentCount?: number | undefined;
            description?: string | null | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                localFilePath?: import("yup").Maybe<string | undefined>;
                storagePath?: import("yup").Maybe<string | undefined>;
                uri?: import("yup").Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: import("yup").Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            prompt: string;
            type: "task";
            ordinal: number;
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
            profileId?: string | null | undefined;
            setbackThreshold?: number | null | undefined;
            recommendedForIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            isInGameplan?: boolean | undefined;
            pastTenseTitle?: string | undefined;
            commentCount?: number | undefined;
            description?: string | null | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                localFilePath?: import("yup").Maybe<string | undefined>;
                storagePath?: import("yup").Maybe<string | undefined>;
                uri?: import("yup").Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: import("yup").Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            prompt: string;
            type: "video";
            ordinal: number;
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
            recommendedForIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            isInGameplan?: boolean | undefined;
            slug?: string | undefined;
            creatorProfileId?: string | undefined;
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
                    profileId?: string | null | undefined;
                    prompt?: string | undefined;
                    setbackThreshold?: number | null | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    isInGameplan?: boolean | undefined;
                    pastTenseTitle?: string | undefined;
                    commentCount?: number | undefined;
                    description?: string | null | undefined;
                    debriefAfterMinutes?: number | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    backgroundColor?: string | undefined;
                    likesCount?: number | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isSuggested?: boolean | undefined;
                    recording: {
                        localFilePath?: string | undefined;
                        waveform?: string | null | undefined;
                        remoteFilePath: string;
                    };
                    type: "audio";
                    ordinal: number;
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
                    profileId?: string | null | undefined;
                    setbackThreshold?: number | null | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    isInGameplan?: boolean | undefined;
                    pastTenseTitle?: string | undefined;
                    commentCount?: number | undefined;
                    description?: string | null | undefined;
                    debriefAfterMinutes?: number | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    backgroundColor?: string | undefined;
                    likesCount?: number | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isSuggested?: boolean | undefined;
                    repeat?: import("yup").Maybe<number | undefined>;
                    prompt: string;
                    type: "breathingExercise";
                    ordinal: number;
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
                    profileId?: string | null | undefined;
                    setbackThreshold?: number | null | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    isInGameplan?: boolean | undefined;
                    pastTenseTitle?: string | undefined;
                    commentCount?: number | undefined;
                    description?: string | null | undefined;
                    debriefAfterMinutes?: number | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    backgroundColor?: string | undefined;
                    likesCount?: number | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isSuggested?: boolean | undefined;
                    prompt: string;
                    type: "notifyASupportPerson";
                    ordinal: number;
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
                    profileId?: string | null | undefined;
                    setbackThreshold?: number | null | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    isInGameplan?: boolean | undefined;
                    pastTenseTitle?: string | undefined;
                    commentCount?: number | undefined;
                    description?: string | null | undefined;
                    debriefAfterMinutes?: number | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    backgroundColor?: string | undefined;
                    likesCount?: number | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isSuggested?: boolean | undefined;
                    prompt: string;
                    type: "steps";
                    ordinal: number;
                    steps: number;
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
                    profileId?: string | null | undefined;
                    setbackThreshold?: number | null | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    isInGameplan?: boolean | undefined;
                    pastTenseTitle?: string | undefined;
                    commentCount?: number | undefined;
                    description?: string | null | undefined;
                    debriefAfterMinutes?: number | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    backgroundColor?: string | undefined;
                    likesCount?: number | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isSuggested?: boolean | undefined;
                    prompt: string;
                    type: "task";
                    ordinal: number;
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
                    profileId?: string | null | undefined;
                    setbackThreshold?: number | null | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    isInGameplan?: boolean | undefined;
                    pastTenseTitle?: string | undefined;
                    commentCount?: number | undefined;
                    description?: string | null | undefined;
                    debriefAfterMinutes?: number | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    backgroundColor?: string | undefined;
                    likesCount?: number | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isSuggested?: boolean | undefined;
                    prompt: string;
                    type: "video";
                    ordinal: number;
                    video: {
                        storagePath?: string | null | undefined;
                        url?: string | null | undefined;
                        description: string;
                        title: string;
                        thumbnailUrl: string;
                        duration: number;
                    };
                };
            } | null | undefined;
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
                profileId?: string | null | undefined;
                prompt?: string | undefined;
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                isInGameplan?: boolean | undefined;
                pastTenseTitle?: string | undefined;
                commentCount?: number | undefined;
                description?: string | null | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    localFilePath?: import("yup").Maybe<string | undefined>;
                    storagePath?: import("yup").Maybe<string | undefined>;
                    uri?: import("yup").Maybe<string | undefined>;
                } | null | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: import("yup").Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                recording: {
                    localFilePath?: string | undefined;
                    waveform?: string | null | undefined;
                    remoteFilePath: string;
                };
                type: "audio";
                ordinal: number;
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
                profileId?: string | null | undefined;
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                isInGameplan?: boolean | undefined;
                pastTenseTitle?: string | undefined;
                commentCount?: number | undefined;
                description?: string | null | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    localFilePath?: import("yup").Maybe<string | undefined>;
                    storagePath?: import("yup").Maybe<string | undefined>;
                    uri?: import("yup").Maybe<string | undefined>;
                } | null | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: import("yup").Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                repeat?: import("yup").Maybe<number | undefined>;
                prompt: string;
                type: "breathingExercise";
                ordinal: number;
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
                profileId?: string | null | undefined;
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                isInGameplan?: boolean | undefined;
                pastTenseTitle?: string | undefined;
                commentCount?: number | undefined;
                description?: string | null | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    localFilePath?: import("yup").Maybe<string | undefined>;
                    storagePath?: import("yup").Maybe<string | undefined>;
                    uri?: import("yup").Maybe<string | undefined>;
                } | null | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: import("yup").Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                prompt: string;
                type: "notifyASupportPerson";
                ordinal: number;
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
                profileId?: string | null | undefined;
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                isInGameplan?: boolean | undefined;
                pastTenseTitle?: string | undefined;
                commentCount?: number | undefined;
                description?: string | null | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    localFilePath?: import("yup").Maybe<string | undefined>;
                    storagePath?: import("yup").Maybe<string | undefined>;
                    uri?: import("yup").Maybe<string | undefined>;
                } | null | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: import("yup").Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                prompt: string;
                type: "steps";
                ordinal: number;
                steps: number;
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
                profileId?: string | null | undefined;
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                isInGameplan?: boolean | undefined;
                pastTenseTitle?: string | undefined;
                commentCount?: number | undefined;
                description?: string | null | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    localFilePath?: import("yup").Maybe<string | undefined>;
                    storagePath?: import("yup").Maybe<string | undefined>;
                    uri?: import("yup").Maybe<string | undefined>;
                } | null | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: import("yup").Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                prompt: string;
                type: "task";
                ordinal: number;
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
                profileId?: string | null | undefined;
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                isInGameplan?: boolean | undefined;
                pastTenseTitle?: string | undefined;
                commentCount?: number | undefined;
                description?: string | null | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    localFilePath?: import("yup").Maybe<string | undefined>;
                    storagePath?: import("yup").Maybe<string | undefined>;
                    uri?: import("yup").Maybe<string | undefined>;
                } | null | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: import("yup").Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                prompt: string;
                type: "video";
                ordinal: number;
                video: {
                    storagePath?: string | null | undefined;
                    url?: string | null | undefined;
                    description: string;
                    title: string;
                    thumbnailUrl: string;
                    duration: number;
                };
            })[] | undefined;
            nextTacticId?: string | undefined;
            prompt: string;
            type: "folder";
            ordinal: number;
            invitationCode: string;
            invitationUrl: string;
        };
    };
    date: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    followedUpQuestionIds: string[];
    gameplanStrategyIds: string[];
    completedTacticIds: string[];
}, "parentIssueIds" | "questionsById" | "type" | "strategiesById" | "date" | "followedUpQuestionIds" | "gameplanStrategyIds" | "completedTacticIds" | ("createdAt" | "updatedAt" | "text" | "issueName" | "activeImpulseId" | "senderProfileId" | "views" | "agent" | "gptPayload" | "openAiChoiceResponse" | "questionData" | "submittedAt" | "isDebrief")>;
export declare const makeQuestionsLogFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
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
    text?: string | undefined;
    activeImpulseId?: string | null | undefined;
    senderProfileId?: string | null | undefined;
    views?: {
        openTime: {
            isEqual?: any;
            toMillis?: any;
            toJSON?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        };
        closeTime: {
            isEqual?: any;
            toMillis?: any;
            toJSON?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        };
    }[] | undefined;
    agent?: import("..").AgentName | undefined;
    gptPayload?: {
        role: NonNullable<"system" | "user" | "assistant" | undefined>;
        content: string;
    }[] | undefined;
    openAiChoiceResponse?: {} | undefined;
    questionData?: {
        [x: string]: {
            label?: string | undefined;
            color?: string | undefined;
            setbackThreshold?: number | undefined;
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
    submittedAt?: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    trackingQuestionIds?: string[] | undefined;
    debriefingQuestionIds?: string[] | undefined;
    isDebrief?: boolean | undefined;
    followedUpQuestionIds?: string[] | undefined;
    questionsById: {
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
            categories?: ("general" | "impulses" | "debriefing" | "dailyReview" | "afterSuccess" | "afterSetback")[] | undefined;
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
                text: string;
                type: "numeric";
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
                text: string;
                type: "string";
            })[] | undefined;
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
            ordinals?: {
                [x: string]: number;
            } | null | undefined;
            templateFor?: "onboarding" | undefined;
            writeAnswerToProfileMemoryKey?: string | undefined;
            prompt: string;
            type: import("..").QuestionKeyType;
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
            categories?: ("general" | "impulses" | "debriefing" | "dailyReview" | "afterSuccess" | "afterSetback")[] | undefined;
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
                text: string;
                type: "numeric";
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
                text: string;
                type: "string";
            })[] | undefined;
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
            ordinals?: {
                [x: string]: number;
            } | null | undefined;
            templateFor?: "onboarding" | undefined;
            writeAnswerToProfileMemoryKey?: string | undefined;
            lowEmoji?: import("yup").Maybe<string | undefined>;
            highEmoji?: import("yup").Maybe<string | undefined>;
            prompt: string;
            type: import("..").QuestionKeyType;
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
            categories?: ("general" | "impulses" | "debriefing" | "dailyReview" | "afterSuccess" | "afterSetback")[] | undefined;
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
                text: string;
                type: "numeric";
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
                text: string;
                type: "string";
            })[] | undefined;
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
            ordinals?: {
                [x: string]: number;
            } | null | undefined;
            templateFor?: "onboarding" | undefined;
            writeAnswerToProfileMemoryKey?: string | undefined;
            prompt: string;
            type: import("..").QuestionKeyType;
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
            categories?: ("general" | "impulses" | "debriefing" | "dailyReview" | "afterSuccess" | "afterSetback")[] | undefined;
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
                text: string;
                type: "numeric";
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
                text: string;
                type: "string";
            })[] | undefined;
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
            ordinals?: {
                [x: string]: number;
            } | null | undefined;
            templateFor?: "onboarding" | undefined;
            writeAnswerToProfileMemoryKey?: string | undefined;
            prompt: string;
            type: import("..").QuestionKeyType;
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
            categories?: ("general" | "impulses" | "debriefing" | "dailyReview" | "afterSuccess" | "afterSetback")[] | undefined;
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
            ordinals?: {
                [x: string]: number;
            } | null | undefined;
            templateFor?: "onboarding" | undefined;
            writeAnswerToProfileMemoryKey?: string | undefined;
            prompt: string;
            type: import("..").QuestionKeyType;
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
                text: string;
                type: "numeric";
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
                text: string;
                type: "string";
            })[];
            canAddNewOptions: NonNullable<boolean | undefined>;
        };
    };
    type: "questions";
    date: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
}, "questionsById" | "type" | "date" | ("createdAt" | "updatedAt" | "text" | "activeImpulseId" | "senderProfileId" | "views" | "agent" | "gptPayload" | "openAiChoiceResponse" | "questionData" | "submittedAt" | "trackingQuestionIds" | "debriefingQuestionIds" | "isDebrief" | "followedUpQuestionIds")>;
