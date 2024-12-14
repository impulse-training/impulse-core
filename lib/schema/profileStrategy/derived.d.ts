import * as yup from 'yup';
export declare const derivedProfileStrategySchema: yup.ObjectSchema<{
    type: "derived";
    ordinalsForIssues: {
        [x: string]: number;
    } | null | undefined;
    ordinal: number | undefined;
    sortBy: NonNullable<"random" | "newest" | undefined>;
    forAllIssues: boolean | undefined;
    forIssueIds: string[] | undefined;
    tourDismissed: boolean | undefined;
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
    reminders: ({
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
        name: string;
        type: "time";
        weekdays: number[];
        hour: number;
        minute: number;
    } | {
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
        name: string;
        type: "location";
        locationId: string;
        mode: NonNullable<"enter" | "exit" | undefined>;
    })[] | undefined;
    parentIssueIds: (string | undefined)[];
}, yup.AnyObject, {
    type: undefined;
    ordinalsForIssues: undefined;
    ordinal: undefined;
    sortBy: undefined;
    forAllIssues: undefined;
    forIssueIds: "";
    tourDismissed: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    reminders: "";
    parentIssueIds: "";
}, "">;
export type DerivedProfileStrategyValue = yup.InferType<typeof derivedProfileStrategySchema>;
