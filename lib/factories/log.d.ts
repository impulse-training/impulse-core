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
                name: string;
                label: string;
                key: string;
                intensity: number | null;
            };
        } | null | undefined;
        behaviorData?: {
            [x: string]: {
                behavior: {
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
                    setbackThreshold?: number | undefined;
                    name: string;
                    ordinal: number;
                    trackingType: NonNullable<"time" | "counter" | undefined>;
                    isHelpful: boolean | null;
                };
                data: {
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
        text?: string | null | undefined;
        senderUid?: string | null | undefined;
        type: "regular";
        uid: string;
        date: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        };
        dateString: string;
        role: NonNullable<"user" | "assistant" | "system" | "tool" | undefined>;
    }, "type" | "uid" | "date" | "dateString" | "role" | ("createdAt" | "updatedAt" | "audioFile" | "emotionData" | "behaviorData" | "text" | "senderUid")>;
};
