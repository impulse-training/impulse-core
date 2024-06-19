import * as yup from 'yup';
export declare const impulseLogSchema: yup.ObjectSchema<{
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
    systemMessage: string;
    date: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    profileId: string;
    issueName: string;
    parentIssueIds: string[];
}, yup.AnyObject, {
    createdAt: undefined;
    updatedAt: undefined;
    type: undefined;
    systemMessage: undefined;
    date: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    profileId: undefined;
    issueName: undefined;
    parentIssueIds: "";
}, "">;
export type ImpulseLogValue = yup.InferType<typeof impulseLogSchema>;
