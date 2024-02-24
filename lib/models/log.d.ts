import { LogValue } from '../schema';
export declare class Log {
    private id;
    private data;
    constructor(id: string, data: LogValue);
    get text(): string | undefined;
    get selectedPattern(): {
        issueId?: import("yup").Maybe<string | undefined>;
        supportGroupIds?: import("yup").Maybe<(string | undefined)[] | undefined>;
        notification?: {
            title: string;
            body: string;
        } | null | undefined;
        setbackTacticId?: import("yup").Maybe<string | undefined>;
        gameplanId?: import("yup").Maybe<string | undefined>;
        debriefGameplanId?: import("yup").Maybe<string | undefined>;
        uid: string;
        ordinal: number;
        createdAt: {
            seconds: number;
            nanoseconds: number;
            toDate: {};
        };
        updatedAt: {
            seconds: number;
            nanoseconds: number;
            toDate: {};
        };
        impulse: {
            tacticIds: string[];
            tacticsById: {
                [x: string]: {
                    uid?: string | null | undefined;
                    ordinal?: number | null | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    nextId?: string | undefined;
                    autogenerate?: boolean | undefined;
                    type: "folder";
                    createdAt: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: {};
                    };
                    updatedAt: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: {};
                    };
                    title: string;
                    backgroundColor: string;
                    tacticIds: string[];
                    currentTacticIndex: number;
                    tacticsById: {};
                } | {
                    uid?: string | null | undefined;
                    ordinal?: number | null | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    type: "steps";
                    createdAt: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: {};
                    };
                    updatedAt: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: {};
                    };
                    title: string;
                    backgroundColor: string;
                    steps: number;
                } | {
                    uid?: string | null | undefined;
                    ordinal?: number | null | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    type: "emotions";
                    createdAt: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: {};
                    };
                    updatedAt: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: {};
                    };
                    title: string;
                    backgroundColor: string;
                } | {
                    uid?: string | null | undefined;
                    ordinal?: number | null | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    type: "audio";
                    createdAt: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: {};
                    };
                    updatedAt: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: {};
                    };
                    title: string;
                    backgroundColor: string;
                    metadata: {
                        waveform?: string | null | undefined;
                        localFilePath: string;
                        remoteFilePath: string;
                    };
                    recording: {
                        waveform?: string | null | undefined;
                        localFilePath: string;
                        remoteFilePath: string;
                    } | null;
                } | {
                    uid?: string | null | undefined;
                    ordinal?: number | null | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    type: "video";
                    createdAt: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: {};
                    };
                    updatedAt: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: {};
                    };
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
                } | {
                    uid?: string | null | undefined;
                    ordinal?: number | null | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    type: "measure-slider";
                    createdAt: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: {};
                    };
                    updatedAt: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: {};
                    };
                    title: string;
                    backgroundColor: string;
                    lowEmoji: string;
                    highEmoji: string;
                } | {
                    uid?: string | null | undefined;
                    ordinal?: number | null | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    type: "measure-time";
                    createdAt: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: {};
                    };
                    updatedAt: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: {};
                    };
                    title: string;
                    backgroundColor: string;
                } | {
                    uid?: string | null | undefined;
                    ordinal?: number | null | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    type: "measure-counter";
                    createdAt: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: {};
                    };
                    updatedAt: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: {};
                    };
                    title: string;
                    backgroundColor: string;
                } | {
                    uid?: string | null | undefined;
                    ordinal?: number | null | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    type: "phone";
                    createdAt: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: {};
                    };
                    updatedAt: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: {};
                    };
                    title: string;
                    backgroundColor: string;
                    supportGroupId: string;
                    trigger: {};
                } | {
                    uid?: string | null | undefined;
                    ordinal?: number | null | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    type: "breathe";
                    createdAt: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: {};
                    };
                    updatedAt: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: {};
                    };
                    title: string;
                    backgroundColor: string;
                    inFor: number;
                    holdFor: number;
                    outFor: number;
                    repeat: number;
                } | {
                    uid?: string | null | undefined;
                    ordinal?: number | null | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    type: "urge-surfing";
                    createdAt: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: {};
                    };
                    updatedAt: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: {};
                    };
                    title: string;
                    backgroundColor: string;
                } | {
                    uid?: string | null | undefined;
                    ordinal?: number | null | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    type: "task";
                    createdAt: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: {};
                    };
                    updatedAt: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: {};
                    };
                    title: string;
                    backgroundColor: string;
                } | {
                    uid?: string | null | undefined;
                    ordinal?: number | null | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    type: "question";
                    createdAt: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: {};
                    };
                    updatedAt: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: {};
                    };
                    title: string;
                    backgroundColor: string;
                };
            };
            suggestedTacticIds: string[];
        };
        name: string;
        setbackThreshold: number;
        sendWeeklyReports: NonNullable<boolean | undefined>;
        debrief: {
            tacticIds: string[];
            tacticsById: {
                [x: string]: {
                    uid?: string | null | undefined;
                    ordinal?: number | null | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    nextId?: string | undefined;
                    autogenerate?: boolean | undefined;
                    type: "folder";
                    createdAt: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: {};
                    };
                    updatedAt: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: {};
                    };
                    title: string;
                    backgroundColor: string;
                    tacticIds: string[];
                    currentTacticIndex: number;
                    tacticsById: {};
                } | {
                    uid?: string | null | undefined;
                    ordinal?: number | null | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    type: "steps";
                    createdAt: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: {};
                    };
                    updatedAt: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: {};
                    };
                    title: string;
                    backgroundColor: string;
                    steps: number;
                } | {
                    uid?: string | null | undefined;
                    ordinal?: number | null | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    type: "emotions";
                    createdAt: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: {};
                    };
                    updatedAt: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: {};
                    };
                    title: string;
                    backgroundColor: string;
                } | {
                    uid?: string | null | undefined;
                    ordinal?: number | null | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    type: "audio";
                    createdAt: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: {};
                    };
                    updatedAt: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: {};
                    };
                    title: string;
                    backgroundColor: string;
                    metadata: {
                        waveform?: string | null | undefined;
                        localFilePath: string;
                        remoteFilePath: string;
                    };
                    recording: {
                        waveform?: string | null | undefined;
                        localFilePath: string;
                        remoteFilePath: string;
                    } | null;
                } | {
                    uid?: string | null | undefined;
                    ordinal?: number | null | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    type: "video";
                    createdAt: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: {};
                    };
                    updatedAt: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: {};
                    };
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
                } | {
                    uid?: string | null | undefined;
                    ordinal?: number | null | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    type: "measure-slider";
                    createdAt: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: {};
                    };
                    updatedAt: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: {};
                    };
                    title: string;
                    backgroundColor: string;
                    lowEmoji: string;
                    highEmoji: string;
                } | {
                    uid?: string | null | undefined;
                    ordinal?: number | null | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    type: "measure-time";
                    createdAt: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: {};
                    };
                    updatedAt: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: {};
                    };
                    title: string;
                    backgroundColor: string;
                } | {
                    uid?: string | null | undefined;
                    ordinal?: number | null | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    type: "measure-counter";
                    createdAt: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: {};
                    };
                    updatedAt: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: {};
                    };
                    title: string;
                    backgroundColor: string;
                } | {
                    uid?: string | null | undefined;
                    ordinal?: number | null | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    type: "phone";
                    createdAt: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: {};
                    };
                    updatedAt: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: {};
                    };
                    title: string;
                    backgroundColor: string;
                    supportGroupId: string;
                    trigger: {};
                } | {
                    uid?: string | null | undefined;
                    ordinal?: number | null | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    type: "breathe";
                    createdAt: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: {};
                    };
                    updatedAt: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: {};
                    };
                    title: string;
                    backgroundColor: string;
                    inFor: number;
                    holdFor: number;
                    outFor: number;
                    repeat: number;
                } | {
                    uid?: string | null | undefined;
                    ordinal?: number | null | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    type: "urge-surfing";
                    createdAt: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: {};
                    };
                    updatedAt: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: {};
                    };
                    title: string;
                    backgroundColor: string;
                } | {
                    uid?: string | null | undefined;
                    ordinal?: number | null | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    type: "task";
                    createdAt: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: {};
                    };
                    updatedAt: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: {};
                    };
                    title: string;
                    backgroundColor: string;
                } | {
                    uid?: string | null | undefined;
                    ordinal?: number | null | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    type: "question";
                    createdAt: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: {};
                    };
                    updatedAt: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: {};
                    };
                    title: string;
                    backgroundColor: string;
                };
            };
            suggestedTacticIds: string[];
        };
    };
}
export declare function formatPattern(pattern?: {
    emoji?: string;
    name: string;
}): string | undefined;
export declare const tagSymbol: typeof formatPattern;
export declare function initials(str: string): string;
