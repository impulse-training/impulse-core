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
    metrics: {
        [x: string]: {
            label: string;
            iconName: string;
            value: number | null;
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
                unit?: string | undefined;
                dailyLimit?: number | undefined;
                skipGameplanAutoCreation?: boolean | undefined;
                name: string;
                ordinal: number;
                trackingType: NonNullable<"time" | "counter" | undefined>;
                isHelpful: boolean | null;
            };
            data: {
                label?: {
                    color?: string | undefined;
                    text: string;
                } | null | undefined;
                counterValue?: number | undefined;
                timeSeconds?: number | undefined;
                formattedValue: string;
            };
        };
    } | null | undefined;
    files: (import("./utils/firestore").DocumentReferenceLike<unknown> | undefined)[] | undefined;
    filesDeleted: boolean | undefined;
    externalId: string | undefined;
    role: NonNullable<"user" | "assistant" | "tool" | "system" | undefined>;
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
    metrics: undefined;
    behaviors: undefined;
    files: "";
    filesDeleted: undefined;
    externalId: undefined;
    role: undefined;
}, "">;
export type MessageValue = yup.InferType<typeof messageSchema>;
