import * as yup from 'yup';
export declare function behaviorBaseSchema<T extends string>(type: T): yup.ObjectSchema<{
    prompt: string;
    type: yup.Defined<T>;
    ordinal: number;
    templateFor: "onboarding" | "afterSuccess" | "afterSetback" | undefined;
    recommendedForIssueIds: string[] | undefined;
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
}, yup.AnyObject, {
    prompt: undefined;
    type: undefined;
    ordinal: undefined;
    templateFor: undefined;
    recommendedForIssueIds: "";
    createdAt: undefined;
    updatedAt: undefined;
}, "">;
