import * as yup from 'yup';
export declare const messageSchema: yup.ObjectSchema<{
    content: string;
    senderProfileId: string | undefined;
    role: NonNullable<"user" | "assistant" | undefined>;
}, yup.AnyObject, {
    content: undefined;
    senderProfileId: undefined;
    role: undefined;
}, "">;
export type MessageValue = yup.InferType<typeof messageSchema>;
