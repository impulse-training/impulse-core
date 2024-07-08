import * as yup from 'yup';
import { LogValue } from './log';
export declare const daySchema: yup.ObjectSchema<{
    date: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    issueName: string;
    logsById: {
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
            choice?: "moreStrategies" | "debrief" | undefined;
            date: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            type: "actionRecap";
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
            date: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            type: "hidden";
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
            parentIssueIds: string[];
            issueName: string;
            date: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
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
                    setbackThreshold?: number | null | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    isInGameplan?: boolean | undefined;
                    prompt?: string | undefined;
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
                    prompt?: string | undefined;
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
                    repeat?: yup.Maybe<number | undefined>;
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
                    prompt?: string | undefined;
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
                    prompt?: string | undefined;
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
                    prompt?: string | undefined;
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
                    prompt?: string | undefined;
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
                            setbackThreshold?: number | null | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            isInGameplan?: boolean | undefined;
                            prompt?: string | undefined;
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
                            prompt?: string | undefined;
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
                            repeat?: yup.Maybe<number | undefined>;
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
                            prompt?: string | undefined;
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
                            prompt?: string | undefined;
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
                            prompt?: string | undefined;
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
                            prompt?: string | undefined;
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
                    slug?: string | undefined;
                    creatorProfileId?: string | undefined;
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
                        setbackThreshold?: number | null | undefined;
                        recommendedForIssueIds?: string[] | undefined;
                        recommendedForIssueOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        isInGameplan?: boolean | undefined;
                        prompt?: string | undefined;
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
                        prompt?: string | undefined;
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
                        repeat?: yup.Maybe<number | undefined>;
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
                        prompt?: string | undefined;
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
                        prompt?: string | undefined;
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
                        prompt?: string | undefined;
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
                        prompt?: string | undefined;
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
                    type: "folder";
                    ordinal: number;
                    prompt: string;
                    invitationCode: string;
                    invitationUrl: string;
                };
            };
            completedTacticIds: string[];
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
            text: string;
            date: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            type: "message";
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
            submittedAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            followedUpQuestionIds?: string[] | undefined;
            date: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            type: "questions";
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
                    options?: ({
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
                        label?: string | undefined;
                        setbackThreshold?: number | undefined;
                        color?: string | undefined;
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
                        textColor?: string | undefined;
                        greaterThan?: number | undefined;
                        lessThanOrEqualTo?: number | undefined;
                        text: string;
                        type: "numeric";
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
                        label?: string | undefined;
                        color?: string | undefined;
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
                        textColor?: string | undefined;
                        text: string;
                        type: "string";
                    })[] | undefined;
                    templateFor?: "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    type: import(".").QuestionKeyType;
                    ordinal: number;
                    prompt: string;
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
                    setbackThreshold?: number | undefined;
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
                    options?: ({
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
                        label?: string | undefined;
                        setbackThreshold?: number | undefined;
                        color?: string | undefined;
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
                        textColor?: string | undefined;
                        greaterThan?: number | undefined;
                        lessThanOrEqualTo?: number | undefined;
                        text: string;
                        type: "numeric";
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
                        label?: string | undefined;
                        color?: string | undefined;
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
                        textColor?: string | undefined;
                        text: string;
                        type: "string";
                    })[] | undefined;
                    templateFor?: "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    type: import(".").QuestionKeyType;
                    ordinal: number;
                    prompt: string;
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
                    templateFor?: "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    type: import(".").QuestionKeyType;
                    ordinal: number;
                    prompt: string;
                    options: ({
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
                        label?: string | undefined;
                        setbackThreshold?: number | undefined;
                        color?: string | undefined;
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
                        textColor?: string | undefined;
                        greaterThan?: number | undefined;
                        lessThanOrEqualTo?: number | undefined;
                        text: string;
                        type: "numeric";
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
                        label?: string | undefined;
                        color?: string | undefined;
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
                        textColor?: string | undefined;
                        text: string;
                        type: "string";
                    })[];
                    canAddNewOptions: NonNullable<boolean | undefined>;
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
                    setbackThreshold?: number | undefined;
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
                    options?: ({
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
                        label?: string | undefined;
                        setbackThreshold?: number | undefined;
                        color?: string | undefined;
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
                        textColor?: string | undefined;
                        greaterThan?: number | undefined;
                        lessThanOrEqualTo?: number | undefined;
                        text: string;
                        type: "numeric";
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
                        label?: string | undefined;
                        color?: string | undefined;
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
                        textColor?: string | undefined;
                        text: string;
                        type: "string";
                    })[] | undefined;
                    templateFor?: "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    lowEmoji?: yup.Maybe<string | undefined>;
                    highEmoji?: yup.Maybe<string | undefined>;
                    type: import(".").QuestionKeyType;
                    ordinal: number;
                    prompt: string;
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
                    setbackThreshold?: number | undefined;
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
                    options?: ({
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
                        label?: string | undefined;
                        setbackThreshold?: number | undefined;
                        color?: string | undefined;
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
                        textColor?: string | undefined;
                        greaterThan?: number | undefined;
                        lessThanOrEqualTo?: number | undefined;
                        text: string;
                        type: "numeric";
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
                        label?: string | undefined;
                        color?: string | undefined;
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
                        textColor?: string | undefined;
                        text: string;
                        type: "string";
                    })[] | undefined;
                    templateFor?: "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    type: import(".").QuestionKeyType;
                    ordinal: number;
                    prompt: string;
                };
            };
            questionData: {
                [x: string]: {
                    label?: string | undefined;
                    setbackThreshold?: number | undefined;
                    idValue?: string | undefined;
                    numericValue?: number | undefined;
                    color?: string | undefined;
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
            suggestedStrategyIds?: string[] | undefined;
            date: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            type: "strategies";
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
                    setbackThreshold?: number | null | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    isInGameplan?: boolean | undefined;
                    prompt?: string | undefined;
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
                    prompt?: string | undefined;
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
                    repeat?: yup.Maybe<number | undefined>;
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
                    prompt?: string | undefined;
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
                    prompt?: string | undefined;
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
                    prompt?: string | undefined;
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
                    prompt?: string | undefined;
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
                            setbackThreshold?: number | null | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            isInGameplan?: boolean | undefined;
                            prompt?: string | undefined;
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
                            prompt?: string | undefined;
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
                            repeat?: yup.Maybe<number | undefined>;
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
                            prompt?: string | undefined;
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
                            prompt?: string | undefined;
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
                            prompt?: string | undefined;
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
                            prompt?: string | undefined;
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
                    slug?: string | undefined;
                    creatorProfileId?: string | undefined;
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
                        setbackThreshold?: number | null | undefined;
                        recommendedForIssueIds?: string[] | undefined;
                        recommendedForIssueOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        isInGameplan?: boolean | undefined;
                        prompt?: string | undefined;
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
                        prompt?: string | undefined;
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
                        repeat?: yup.Maybe<number | undefined>;
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
                        prompt?: string | undefined;
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
                        prompt?: string | undefined;
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
                        prompt?: string | undefined;
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
                        prompt?: string | undefined;
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
                    type: "folder";
                    ordinal: number;
                    prompt: string;
                    invitationCode: string;
                    invitationUrl: string;
                };
            };
            completedTacticIds: string[];
            followedUpTacticIds: string[];
        };
    };
    isProcessing: boolean;
}, yup.AnyObject, {
    date: {
        seconds: undefined;
        nanoseconds: undefined;
        isEqual: undefined;
        toMillis: undefined;
        toJSON: undefined;
        toDate: undefined;
    };
    issueName: undefined;
    logsById: undefined;
    isProcessing: false;
}, "">;
export type DayValue = Omit<yup.InferType<typeof daySchema>, 'logsById'> & {
    logsById: Record<string, LogValue>;
};
