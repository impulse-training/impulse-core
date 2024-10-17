import * as yup from 'yup';
export declare const messageSchema: yup.ObjectSchema<{
    content: string;
    role: NonNullable<"user" | "assistant" | undefined>;
}, yup.AnyObject, {
    content: undefined;
    role: undefined;
}, "">;
export type MessageValue = yup.InferType<typeof messageSchema>;
