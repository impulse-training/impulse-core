import * as yup from 'yup';
export declare const messageSchema: yup.ObjectSchema<{
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
    date: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    dateString: string;
    content: string | null;
    senderUid: string | undefined;
    isDisplayable: NonNullable<boolean | undefined>;
    emotions: {
        [x: string]: {
            label: string;
            intensity: number | null;
            iconName: string;
        };
    } | null | undefined;
    behaviors: {
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
    files: (import("./utils/firestore").DocumentReferenceLike<unknown> | undefined)[] | undefined;
    filesDeleted: boolean | undefined;
    externalId: string | undefined;
    role: NonNullable<"user" | "assistant" | "system" | "tool" | undefined>;
}, yup.AnyObject, {
    createdAt: undefined;
    updatedAt: undefined;
    date: {
        seconds: undefined;
        nanoseconds: undefined;
        isEqual: undefined;
        toMillis: undefined;
        toDate: undefined;
    };
    dateString: undefined;
    content: undefined;
    senderUid: undefined;
    isDisplayable: undefined;
    emotions: undefined;
    behaviors: undefined;
    files: "";
    filesDeleted: undefined;
    externalId: undefined;
    role: undefined;
}, "">;
export type MessageValue = yup.InferType<typeof messageSchema>;
