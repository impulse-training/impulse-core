import * as yup from 'yup';
export declare const messageLogSchema: yup.ObjectSchema<{
    openAiChoiceResponse: {} | undefined;
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    type: "message";
    date: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    senderProfileId: string | null | undefined;
    gptPayload: {
        role: NonNullable<"system" | "user" | "assistant" | undefined>;
        content: string;
    }[] | undefined;
    text: string;
}, yup.AnyObject, {
    openAiChoiceResponse: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    type: undefined;
    date: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    senderProfileId: undefined;
    gptPayload: "";
    text: undefined;
}, "">;
export type MessageLogValue = yup.InferType<typeof messageLogSchema>;
