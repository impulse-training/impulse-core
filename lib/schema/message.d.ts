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
    senderProfileId: string | undefined;
    files: (import("./utils/firestore").DocumentReferenceLike<unknown> | undefined)[] | undefined;
    filesDeleted: boolean | undefined;
    externalId: string | undefined;
    role: NonNullable<"user" | "assistant" | "system" | "tool" | undefined>;
}, yup.AnyObject, {
    createdAt: undefined;
    updatedAt: undefined;
    content: undefined;
    senderProfileId: undefined;
    files: "";
    filesDeleted: undefined;
    externalId: undefined;
    role: undefined;
}, "">;
export type MessageValue = yup.InferType<typeof messageSchema>;
