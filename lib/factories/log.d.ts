import * as Factory from 'factory.ts';
import { TimestampLike } from '../utils/firestore/TimestampLike';
export declare const makeLogFactories: (TimestampKlass: typeof TimestampLike) => {
    regularLogFactory: Factory.Sync.Factory<{
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
        behaviorData?: {
            [x: string]: {
                behavior: {
                    recommendedForIssueIds?: string[] | undefined;
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
                    templateFor?: "onboarding" | "afterSuccess" | "afterSetback" | undefined;
                    setbackThreshold?: number | undefined;
                    prompt: string;
                    type: "counter";
                    ordinal: number;
                } | {
                    recommendedForIssueIds?: string[] | undefined;
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
                    templateFor?: "onboarding" | "afterSuccess" | "afterSetback" | undefined;
                    setbackThreshold?: number | undefined;
                    prompt: string;
                    type: "time";
                    ordinal: number;
                };
                behaviorData: {
                    setbackThreshold?: number | undefined;
                    label?: string | undefined;
                    idValue?: string | undefined;
                    numericValue?: number | undefined;
                    color?: string | undefined;
                    setAt: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    };
                    stringValue: string;
                    unit: string;
                };
            };
        } | null | undefined;
        audioFile?: {
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
            localFilePath?: import("yup").Maybe<string | undefined>;
            isDeleted?: boolean | undefined;
            metadata?: {} | null | undefined;
            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
            thumbnailUri?: import("yup").Maybe<string | undefined>;
            contentType: string;
            storagePath: string;
            uri: string;
        } | undefined;
        emotionData?: {
            [x: string]: {
                label: string;
                iconName: string;
                intensity: number | null;
            };
        } | null | undefined;
        text?: string | undefined;
        senderUid?: string | null | undefined;
        type: "regular";
        uid: string;
        completedTacticIds: string[];
        date: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        };
        dateString: string;
    }, "type" | "uid" | "completedTacticIds" | "date" | "dateString" | ("createdAt" | "updatedAt" | "behaviorData" | "audioFile" | "emotionData" | "text" | "senderUid")>;
};
