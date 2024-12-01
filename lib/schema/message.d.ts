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
    content: string | null;
    senderUid: string | undefined;
    emotions: {
        [x: string]: number | undefined;
    };
    files: (import("./utils/firestore").DocumentReferenceLike<unknown> | undefined)[] | undefined;
    filesDeleted: boolean | undefined;
    externalId: string | undefined;
    role: NonNullable<"user" | "assistant" | "system" | "tool" | undefined>;
}, yup.AnyObject, {
    createdAt: undefined;
    updatedAt: undefined;
    content: undefined;
    senderUid: undefined;
    emotions: undefined;
    files: "";
    filesDeleted: undefined;
    externalId: undefined;
    role: undefined;
}, "">;
export type MessageValue = yup.InferType<typeof messageSchema>;
