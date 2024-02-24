import * as Yup from 'yup';
export declare const patternSchema: Yup.ObjectSchema<{
    uid: string;
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
    name: string;
    ordinal: number;
    supportGroupIds: Yup.Maybe<(string | undefined)[] | undefined>;
    notification: {
        title: string;
        body: string;
    } | null | undefined;
    setbackTacticId: Yup.Maybe<string | undefined>;
    setbackThreshold: number;
    issueId: Yup.Maybe<string | undefined>;
    sendWeeklyReports: NonNullable<boolean | undefined>;
    gameplanId: Yup.Maybe<string | undefined>;
    debriefGameplanId: Yup.Maybe<string | undefined>;
    impulse: {
        tacticIds: string[];
        tacticsById: {
            [x: string]: {
                uid?: string | null | undefined;
                ordinal?: number | null | undefined;
                subtitle?: Yup.Maybe<string | undefined>;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: Yup.Maybe<string | undefined>;
                    storagePath?: Yup.Maybe<string | undefined>;
                    uri?: Yup.Maybe<string | undefined>;
                } | null | undefined;
                isTemplate?: boolean | null | undefined;
                language?: string | null | undefined;
                href?: string | null | undefined;
                categoryIds?: (string | undefined)[] | null | undefined;
                isShared?: boolean | null | undefined;
                isResponseRequired?: boolean | null | undefined;
                timerSeconds?: Yup.Maybe<number | undefined>;
                isAvailableForRecommendation?: boolean | null | undefined;
                numberOfLikes?: number | null | undefined;
                impulseOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                debriefOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                emotionOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                scheduledMinuteOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                scheduledLocationOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                subtitle?: Yup.Maybe<string | undefined>;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: Yup.Maybe<string | undefined>;
                    storagePath?: Yup.Maybe<string | undefined>;
                    uri?: Yup.Maybe<string | undefined>;
                } | null | undefined;
                isTemplate?: boolean | null | undefined;
                language?: string | null | undefined;
                href?: string | null | undefined;
                categoryIds?: (string | undefined)[] | null | undefined;
                isShared?: boolean | null | undefined;
                isResponseRequired?: boolean | null | undefined;
                timerSeconds?: Yup.Maybe<number | undefined>;
                isAvailableForRecommendation?: boolean | null | undefined;
                numberOfLikes?: number | null | undefined;
                impulseOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                debriefOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                emotionOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                scheduledMinuteOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                scheduledLocationOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                subtitle?: Yup.Maybe<string | undefined>;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: Yup.Maybe<string | undefined>;
                    storagePath?: Yup.Maybe<string | undefined>;
                    uri?: Yup.Maybe<string | undefined>;
                } | null | undefined;
                isTemplate?: boolean | null | undefined;
                language?: string | null | undefined;
                href?: string | null | undefined;
                categoryIds?: (string | undefined)[] | null | undefined;
                isShared?: boolean | null | undefined;
                isResponseRequired?: boolean | null | undefined;
                timerSeconds?: Yup.Maybe<number | undefined>;
                isAvailableForRecommendation?: boolean | null | undefined;
                numberOfLikes?: number | null | undefined;
                impulseOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                debriefOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                emotionOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                scheduledMinuteOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                scheduledLocationOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                subtitle?: Yup.Maybe<string | undefined>;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: Yup.Maybe<string | undefined>;
                    storagePath?: Yup.Maybe<string | undefined>;
                    uri?: Yup.Maybe<string | undefined>;
                } | null | undefined;
                isTemplate?: boolean | null | undefined;
                language?: string | null | undefined;
                href?: string | null | undefined;
                categoryIds?: (string | undefined)[] | null | undefined;
                isShared?: boolean | null | undefined;
                isResponseRequired?: boolean | null | undefined;
                timerSeconds?: Yup.Maybe<number | undefined>;
                isAvailableForRecommendation?: boolean | null | undefined;
                numberOfLikes?: number | null | undefined;
                impulseOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                debriefOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                emotionOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                scheduledMinuteOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                scheduledLocationOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                subtitle?: Yup.Maybe<string | undefined>;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: Yup.Maybe<string | undefined>;
                    storagePath?: Yup.Maybe<string | undefined>;
                    uri?: Yup.Maybe<string | undefined>;
                } | null | undefined;
                isTemplate?: boolean | null | undefined;
                language?: string | null | undefined;
                href?: string | null | undefined;
                categoryIds?: (string | undefined)[] | null | undefined;
                isShared?: boolean | null | undefined;
                isResponseRequired?: boolean | null | undefined;
                timerSeconds?: Yup.Maybe<number | undefined>;
                isAvailableForRecommendation?: boolean | null | undefined;
                numberOfLikes?: number | null | undefined;
                impulseOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                debriefOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                emotionOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                scheduledMinuteOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                scheduledLocationOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                subtitle?: Yup.Maybe<string | undefined>;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: Yup.Maybe<string | undefined>;
                    storagePath?: Yup.Maybe<string | undefined>;
                    uri?: Yup.Maybe<string | undefined>;
                } | null | undefined;
                isTemplate?: boolean | null | undefined;
                language?: string | null | undefined;
                href?: string | null | undefined;
                categoryIds?: (string | undefined)[] | null | undefined;
                isShared?: boolean | null | undefined;
                isResponseRequired?: boolean | null | undefined;
                timerSeconds?: Yup.Maybe<number | undefined>;
                isAvailableForRecommendation?: boolean | null | undefined;
                numberOfLikes?: number | null | undefined;
                impulseOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                debriefOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                emotionOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                scheduledMinuteOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                scheduledLocationOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                subtitle?: Yup.Maybe<string | undefined>;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: Yup.Maybe<string | undefined>;
                    storagePath?: Yup.Maybe<string | undefined>;
                    uri?: Yup.Maybe<string | undefined>;
                } | null | undefined;
                isTemplate?: boolean | null | undefined;
                language?: string | null | undefined;
                href?: string | null | undefined;
                categoryIds?: (string | undefined)[] | null | undefined;
                isShared?: boolean | null | undefined;
                isResponseRequired?: boolean | null | undefined;
                timerSeconds?: Yup.Maybe<number | undefined>;
                isAvailableForRecommendation?: boolean | null | undefined;
                numberOfLikes?: number | null | undefined;
                impulseOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                debriefOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                emotionOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                scheduledMinuteOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                scheduledLocationOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                subtitle?: Yup.Maybe<string | undefined>;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: Yup.Maybe<string | undefined>;
                    storagePath?: Yup.Maybe<string | undefined>;
                    uri?: Yup.Maybe<string | undefined>;
                } | null | undefined;
                isTemplate?: boolean | null | undefined;
                language?: string | null | undefined;
                href?: string | null | undefined;
                categoryIds?: (string | undefined)[] | null | undefined;
                isShared?: boolean | null | undefined;
                isResponseRequired?: boolean | null | undefined;
                timerSeconds?: Yup.Maybe<number | undefined>;
                isAvailableForRecommendation?: boolean | null | undefined;
                numberOfLikes?: number | null | undefined;
                impulseOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                debriefOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                emotionOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                scheduledMinuteOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                scheduledLocationOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                subtitle?: Yup.Maybe<string | undefined>;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: Yup.Maybe<string | undefined>;
                    storagePath?: Yup.Maybe<string | undefined>;
                    uri?: Yup.Maybe<string | undefined>;
                } | null | undefined;
                isTemplate?: boolean | null | undefined;
                language?: string | null | undefined;
                href?: string | null | undefined;
                categoryIds?: (string | undefined)[] | null | undefined;
                isShared?: boolean | null | undefined;
                isResponseRequired?: boolean | null | undefined;
                timerSeconds?: Yup.Maybe<number | undefined>;
                isAvailableForRecommendation?: boolean | null | undefined;
                numberOfLikes?: number | null | undefined;
                impulseOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                debriefOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                emotionOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                scheduledMinuteOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                scheduledLocationOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                subtitle?: Yup.Maybe<string | undefined>;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: Yup.Maybe<string | undefined>;
                    storagePath?: Yup.Maybe<string | undefined>;
                    uri?: Yup.Maybe<string | undefined>;
                } | null | undefined;
                isTemplate?: boolean | null | undefined;
                language?: string | null | undefined;
                href?: string | null | undefined;
                categoryIds?: (string | undefined)[] | null | undefined;
                isShared?: boolean | null | undefined;
                isResponseRequired?: boolean | null | undefined;
                timerSeconds?: Yup.Maybe<number | undefined>;
                isAvailableForRecommendation?: boolean | null | undefined;
                numberOfLikes?: number | null | undefined;
                impulseOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                debriefOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                emotionOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                scheduledMinuteOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                scheduledLocationOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                subtitle?: Yup.Maybe<string | undefined>;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: Yup.Maybe<string | undefined>;
                    storagePath?: Yup.Maybe<string | undefined>;
                    uri?: Yup.Maybe<string | undefined>;
                } | null | undefined;
                isTemplate?: boolean | null | undefined;
                language?: string | null | undefined;
                href?: string | null | undefined;
                categoryIds?: (string | undefined)[] | null | undefined;
                isShared?: boolean | null | undefined;
                isResponseRequired?: boolean | null | undefined;
                timerSeconds?: Yup.Maybe<number | undefined>;
                isAvailableForRecommendation?: boolean | null | undefined;
                numberOfLikes?: number | null | undefined;
                impulseOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                debriefOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                emotionOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                scheduledMinuteOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                scheduledLocationOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                subtitle?: Yup.Maybe<string | undefined>;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: Yup.Maybe<string | undefined>;
                    storagePath?: Yup.Maybe<string | undefined>;
                    uri?: Yup.Maybe<string | undefined>;
                } | null | undefined;
                isTemplate?: boolean | null | undefined;
                language?: string | null | undefined;
                href?: string | null | undefined;
                categoryIds?: (string | undefined)[] | null | undefined;
                isShared?: boolean | null | undefined;
                isResponseRequired?: boolean | null | undefined;
                timerSeconds?: Yup.Maybe<number | undefined>;
                isAvailableForRecommendation?: boolean | null | undefined;
                numberOfLikes?: number | null | undefined;
                impulseOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                debriefOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                emotionOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                scheduledMinuteOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                scheduledLocationOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                subtitle?: Yup.Maybe<string | undefined>;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: Yup.Maybe<string | undefined>;
                    storagePath?: Yup.Maybe<string | undefined>;
                    uri?: Yup.Maybe<string | undefined>;
                } | null | undefined;
                isTemplate?: boolean | null | undefined;
                language?: string | null | undefined;
                href?: string | null | undefined;
                categoryIds?: (string | undefined)[] | null | undefined;
                isShared?: boolean | null | undefined;
                isResponseRequired?: boolean | null | undefined;
                timerSeconds?: Yup.Maybe<number | undefined>;
                isAvailableForRecommendation?: boolean | null | undefined;
                numberOfLikes?: number | null | undefined;
                impulseOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                debriefOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                emotionOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                scheduledMinuteOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                scheduledLocationOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
    debrief: {
        tacticIds: string[];
        tacticsById: {
            [x: string]: {
                uid?: string | null | undefined;
                ordinal?: number | null | undefined;
                subtitle?: Yup.Maybe<string | undefined>;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: Yup.Maybe<string | undefined>;
                    storagePath?: Yup.Maybe<string | undefined>;
                    uri?: Yup.Maybe<string | undefined>;
                } | null | undefined;
                isTemplate?: boolean | null | undefined;
                language?: string | null | undefined;
                href?: string | null | undefined;
                categoryIds?: (string | undefined)[] | null | undefined;
                isShared?: boolean | null | undefined;
                isResponseRequired?: boolean | null | undefined;
                timerSeconds?: Yup.Maybe<number | undefined>;
                isAvailableForRecommendation?: boolean | null | undefined;
                numberOfLikes?: number | null | undefined;
                impulseOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                debriefOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                emotionOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                scheduledMinuteOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                scheduledLocationOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                subtitle?: Yup.Maybe<string | undefined>;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: Yup.Maybe<string | undefined>;
                    storagePath?: Yup.Maybe<string | undefined>;
                    uri?: Yup.Maybe<string | undefined>;
                } | null | undefined;
                isTemplate?: boolean | null | undefined;
                language?: string | null | undefined;
                href?: string | null | undefined;
                categoryIds?: (string | undefined)[] | null | undefined;
                isShared?: boolean | null | undefined;
                isResponseRequired?: boolean | null | undefined;
                timerSeconds?: Yup.Maybe<number | undefined>;
                isAvailableForRecommendation?: boolean | null | undefined;
                numberOfLikes?: number | null | undefined;
                impulseOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                debriefOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                emotionOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                scheduledMinuteOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                scheduledLocationOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                subtitle?: Yup.Maybe<string | undefined>;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: Yup.Maybe<string | undefined>;
                    storagePath?: Yup.Maybe<string | undefined>;
                    uri?: Yup.Maybe<string | undefined>;
                } | null | undefined;
                isTemplate?: boolean | null | undefined;
                language?: string | null | undefined;
                href?: string | null | undefined;
                categoryIds?: (string | undefined)[] | null | undefined;
                isShared?: boolean | null | undefined;
                isResponseRequired?: boolean | null | undefined;
                timerSeconds?: Yup.Maybe<number | undefined>;
                isAvailableForRecommendation?: boolean | null | undefined;
                numberOfLikes?: number | null | undefined;
                impulseOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                debriefOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                emotionOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                scheduledMinuteOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                scheduledLocationOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                subtitle?: Yup.Maybe<string | undefined>;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: Yup.Maybe<string | undefined>;
                    storagePath?: Yup.Maybe<string | undefined>;
                    uri?: Yup.Maybe<string | undefined>;
                } | null | undefined;
                isTemplate?: boolean | null | undefined;
                language?: string | null | undefined;
                href?: string | null | undefined;
                categoryIds?: (string | undefined)[] | null | undefined;
                isShared?: boolean | null | undefined;
                isResponseRequired?: boolean | null | undefined;
                timerSeconds?: Yup.Maybe<number | undefined>;
                isAvailableForRecommendation?: boolean | null | undefined;
                numberOfLikes?: number | null | undefined;
                impulseOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                debriefOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                emotionOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                scheduledMinuteOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                scheduledLocationOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                subtitle?: Yup.Maybe<string | undefined>;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: Yup.Maybe<string | undefined>;
                    storagePath?: Yup.Maybe<string | undefined>;
                    uri?: Yup.Maybe<string | undefined>;
                } | null | undefined;
                isTemplate?: boolean | null | undefined;
                language?: string | null | undefined;
                href?: string | null | undefined;
                categoryIds?: (string | undefined)[] | null | undefined;
                isShared?: boolean | null | undefined;
                isResponseRequired?: boolean | null | undefined;
                timerSeconds?: Yup.Maybe<number | undefined>;
                isAvailableForRecommendation?: boolean | null | undefined;
                numberOfLikes?: number | null | undefined;
                impulseOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                debriefOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                emotionOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                scheduledMinuteOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                scheduledLocationOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                subtitle?: Yup.Maybe<string | undefined>;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: Yup.Maybe<string | undefined>;
                    storagePath?: Yup.Maybe<string | undefined>;
                    uri?: Yup.Maybe<string | undefined>;
                } | null | undefined;
                isTemplate?: boolean | null | undefined;
                language?: string | null | undefined;
                href?: string | null | undefined;
                categoryIds?: (string | undefined)[] | null | undefined;
                isShared?: boolean | null | undefined;
                isResponseRequired?: boolean | null | undefined;
                timerSeconds?: Yup.Maybe<number | undefined>;
                isAvailableForRecommendation?: boolean | null | undefined;
                numberOfLikes?: number | null | undefined;
                impulseOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                debriefOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                emotionOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                scheduledMinuteOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                scheduledLocationOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                subtitle?: Yup.Maybe<string | undefined>;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: Yup.Maybe<string | undefined>;
                    storagePath?: Yup.Maybe<string | undefined>;
                    uri?: Yup.Maybe<string | undefined>;
                } | null | undefined;
                isTemplate?: boolean | null | undefined;
                language?: string | null | undefined;
                href?: string | null | undefined;
                categoryIds?: (string | undefined)[] | null | undefined;
                isShared?: boolean | null | undefined;
                isResponseRequired?: boolean | null | undefined;
                timerSeconds?: Yup.Maybe<number | undefined>;
                isAvailableForRecommendation?: boolean | null | undefined;
                numberOfLikes?: number | null | undefined;
                impulseOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                debriefOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                emotionOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                scheduledMinuteOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                scheduledLocationOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                subtitle?: Yup.Maybe<string | undefined>;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: Yup.Maybe<string | undefined>;
                    storagePath?: Yup.Maybe<string | undefined>;
                    uri?: Yup.Maybe<string | undefined>;
                } | null | undefined;
                isTemplate?: boolean | null | undefined;
                language?: string | null | undefined;
                href?: string | null | undefined;
                categoryIds?: (string | undefined)[] | null | undefined;
                isShared?: boolean | null | undefined;
                isResponseRequired?: boolean | null | undefined;
                timerSeconds?: Yup.Maybe<number | undefined>;
                isAvailableForRecommendation?: boolean | null | undefined;
                numberOfLikes?: number | null | undefined;
                impulseOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                debriefOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                emotionOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                scheduledMinuteOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                scheduledLocationOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                subtitle?: Yup.Maybe<string | undefined>;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: Yup.Maybe<string | undefined>;
                    storagePath?: Yup.Maybe<string | undefined>;
                    uri?: Yup.Maybe<string | undefined>;
                } | null | undefined;
                isTemplate?: boolean | null | undefined;
                language?: string | null | undefined;
                href?: string | null | undefined;
                categoryIds?: (string | undefined)[] | null | undefined;
                isShared?: boolean | null | undefined;
                isResponseRequired?: boolean | null | undefined;
                timerSeconds?: Yup.Maybe<number | undefined>;
                isAvailableForRecommendation?: boolean | null | undefined;
                numberOfLikes?: number | null | undefined;
                impulseOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                debriefOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                emotionOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                scheduledMinuteOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                scheduledLocationOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                subtitle?: Yup.Maybe<string | undefined>;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: Yup.Maybe<string | undefined>;
                    storagePath?: Yup.Maybe<string | undefined>;
                    uri?: Yup.Maybe<string | undefined>;
                } | null | undefined;
                isTemplate?: boolean | null | undefined;
                language?: string | null | undefined;
                href?: string | null | undefined;
                categoryIds?: (string | undefined)[] | null | undefined;
                isShared?: boolean | null | undefined;
                isResponseRequired?: boolean | null | undefined;
                timerSeconds?: Yup.Maybe<number | undefined>;
                isAvailableForRecommendation?: boolean | null | undefined;
                numberOfLikes?: number | null | undefined;
                impulseOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                debriefOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                emotionOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                scheduledMinuteOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                scheduledLocationOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                subtitle?: Yup.Maybe<string | undefined>;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: Yup.Maybe<string | undefined>;
                    storagePath?: Yup.Maybe<string | undefined>;
                    uri?: Yup.Maybe<string | undefined>;
                } | null | undefined;
                isTemplate?: boolean | null | undefined;
                language?: string | null | undefined;
                href?: string | null | undefined;
                categoryIds?: (string | undefined)[] | null | undefined;
                isShared?: boolean | null | undefined;
                isResponseRequired?: boolean | null | undefined;
                timerSeconds?: Yup.Maybe<number | undefined>;
                isAvailableForRecommendation?: boolean | null | undefined;
                numberOfLikes?: number | null | undefined;
                impulseOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                debriefOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                emotionOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                scheduledMinuteOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                scheduledLocationOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                subtitle?: Yup.Maybe<string | undefined>;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: Yup.Maybe<string | undefined>;
                    storagePath?: Yup.Maybe<string | undefined>;
                    uri?: Yup.Maybe<string | undefined>;
                } | null | undefined;
                isTemplate?: boolean | null | undefined;
                language?: string | null | undefined;
                href?: string | null | undefined;
                categoryIds?: (string | undefined)[] | null | undefined;
                isShared?: boolean | null | undefined;
                isResponseRequired?: boolean | null | undefined;
                timerSeconds?: Yup.Maybe<number | undefined>;
                isAvailableForRecommendation?: boolean | null | undefined;
                numberOfLikes?: number | null | undefined;
                impulseOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                debriefOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                emotionOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                scheduledMinuteOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                scheduledLocationOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                subtitle?: Yup.Maybe<string | undefined>;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: Yup.Maybe<string | undefined>;
                    storagePath?: Yup.Maybe<string | undefined>;
                    uri?: Yup.Maybe<string | undefined>;
                } | null | undefined;
                isTemplate?: boolean | null | undefined;
                language?: string | null | undefined;
                href?: string | null | undefined;
                categoryIds?: (string | undefined)[] | null | undefined;
                isShared?: boolean | null | undefined;
                isResponseRequired?: boolean | null | undefined;
                timerSeconds?: Yup.Maybe<number | undefined>;
                isAvailableForRecommendation?: boolean | null | undefined;
                numberOfLikes?: number | null | undefined;
                impulseOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                debriefOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                emotionOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                scheduledMinuteOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                scheduledLocationOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
}, Yup.AnyObject, {
    uid: undefined;
    createdAt: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    updatedAt: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    name: undefined;
    ordinal: undefined;
    supportGroupIds: "";
    notification: {
        title: undefined;
        body: undefined;
    };
    setbackTacticId: undefined;
    setbackThreshold: undefined;
    issueId: undefined;
    sendWeeklyReports: undefined;
    gameplanId: undefined;
    debriefGameplanId: undefined;
    impulse: {
        tacticIds: "";
        suggestedTacticIds: "";
        tacticsById: undefined;
    };
    debrief: {
        tacticIds: "";
        suggestedTacticIds: "";
        tacticsById: undefined;
    };
}, "">;
export type PatternValue = Yup.InferType<typeof patternSchema>;
