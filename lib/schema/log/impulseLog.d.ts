import * as yup from 'yup';
export declare const impulseLogSchema: yup.ObjectSchema<{
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
    type: "impulse";
    date: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    profileId: string;
    gptPayload: {
        role: NonNullable<"system" | "user" | "assistant" | undefined>;
        content: string;
    };
    issueName: string;
    parentIssueIds: string[];
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
    profileId: undefined;
    gptPayload: {
        role: undefined;
        content: undefined;
    };
    issueName: undefined;
    parentIssueIds: "";
}, "">;
export type ImpulseLogValue = yup.InferType<typeof impulseLogSchema>;
