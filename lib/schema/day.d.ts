import * as yup from 'yup';
import { LogValue } from './log';
export declare const daySchema: yup.ObjectSchema<{
    date: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
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
    issueName: string;
    logsById: {
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
            senderProfileId?: string | null | undefined;
            gptPayload?: {
                role: NonNullable<"system" | "user" | "assistant" | undefined>;
                content: string;
            }[] | undefined;
            openAiChoiceResponse?: {} | undefined;
            date: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            type: "impulse";
            issueName: string;
            parentIssueIds: string[];
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
            senderProfileId?: string | null | undefined;
            gptPayload?: {
                role: NonNullable<"system" | "user" | "assistant" | undefined>;
                content: string;
            }[] | undefined;
            openAiChoiceResponse?: {} | undefined;
            text: string;
            date: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            type: "message";
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
            senderProfileId?: string | null | undefined;
            gptPayload?: {
                role: NonNullable<"system" | "user" | "assistant" | undefined>;
                content: string;
            }[] | undefined;
            openAiChoiceResponse?: {} | undefined;
            submittedAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            date: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            type: "questions";
            questionsById: {
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
                    options?: ({
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
                        label?: string | undefined;
                        setbackThreshold?: number | undefined;
                        greaterThan?: number | undefined;
                        lessThanOrEqualTo?: number | undefined;
                        text: string;
                        type: "numeric";
                        color: string;
                        textColor: string;
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
                        label?: string | undefined;
                        text: string;
                        type: "string";
                        color: string;
                        textColor: string;
                    })[] | undefined;
                    type: import(".").QuestionKeyType;
                    prompt: string;
                    ordinal: number;
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
                    options?: string[] | undefined;
                    type: import(".").QuestionKeyType;
                    prompt: string;
                    ordinal: number;
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
                    setbackThreshold?: number | undefined;
                    options?: ({
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
                        label?: string | undefined;
                        setbackThreshold?: number | undefined;
                        greaterThan?: number | undefined;
                        lessThanOrEqualTo?: number | undefined;
                        text: string;
                        type: "numeric";
                        color: string;
                        textColor: string;
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
                        label?: string | undefined;
                        text: string;
                        type: "string";
                        color: string;
                        textColor: string;
                    })[] | undefined;
                    lowEmoji?: yup.Maybe<string | undefined>;
                    highEmoji?: yup.Maybe<string | undefined>;
                    type: import(".").QuestionKeyType;
                    prompt: string;
                    ordinal: number;
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
                    setbackThreshold?: number | undefined;
                    options?: ({
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
                        label?: string | undefined;
                        setbackThreshold?: number | undefined;
                        greaterThan?: number | undefined;
                        lessThanOrEqualTo?: number | undefined;
                        text: string;
                        type: "numeric";
                        color: string;
                        textColor: string;
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
                        label?: string | undefined;
                        text: string;
                        type: "string";
                        color: string;
                        textColor: string;
                    })[] | undefined;
                    type: import(".").QuestionKeyType;
                    prompt: string;
                    ordinal: number;
                };
            };
            questionData: {
                [x: string]: {
                    numericValue?: number | undefined;
                    setAt: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    };
                    stringValue: string;
                    unit: string;
                };
            };
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
            senderProfileId?: string | null | undefined;
            gptPayload?: {
                role: NonNullable<"system" | "user" | "assistant" | undefined>;
                content: string;
            }[] | undefined;
            openAiChoiceResponse?: {} | undefined;
            date: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            type: "strategies";
            strategyIds: string[];
            strategiesById: {
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
                    setbackThreshold?: number | null | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    pastTenseTitle?: string | undefined;
                    commentCount?: number | undefined;
                    description?: string | null | undefined;
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
                    recording: {
                        localFilePath?: string | undefined;
                        waveform?: string | null | undefined;
                        remoteFilePath: string;
                    };
                    type: "audio";
                    ordinal: number;
                    title: string;
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
                    setbackThreshold?: number | null | undefined;
                    repeat?: yup.Maybe<number | undefined>;
                    recommendedForIssueIds?: string[] | undefined;
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    pastTenseTitle?: string | undefined;
                    commentCount?: number | undefined;
                    description?: string | null | undefined;
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
                    title: string;
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
                    setbackThreshold?: number | null | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    pastTenseTitle?: string | undefined;
                    commentCount?: number | undefined;
                    description?: string | null | undefined;
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
                    title: string;
                    contactIds: string[];
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
                    setbackThreshold?: number | null | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    pastTenseTitle?: string | undefined;
                    commentCount?: number | undefined;
                    description?: string | null | undefined;
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
                    title: string;
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
                    setbackThreshold?: number | null | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    pastTenseTitle?: string | undefined;
                    commentCount?: number | undefined;
                    description?: string | null | undefined;
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
                    ordinal: number;
                    title: string;
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
                    setbackThreshold?: number | null | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    pastTenseTitle?: string | undefined;
                    commentCount?: number | undefined;
                    description?: string | null | undefined;
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
                    title: string;
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
            completedTacticIds: string[];
        };
    };
    isProcessing: boolean;
}, yup.AnyObject, {
    date: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    createdAt: undefined;
    updatedAt: undefined;
    issueName: undefined;
    logsById: undefined;
    isProcessing: false;
}, "">;
export type DayValue = Omit<yup.InferType<typeof daySchema>, 'logsById'> & {
    logsById: Record<string, LogValue>;
};
