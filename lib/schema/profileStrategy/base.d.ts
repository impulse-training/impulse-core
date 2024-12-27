import * as yup from 'yup';
export declare function profileStrategyBaseSchema<T extends string>(type: T): yup.ObjectSchema<{
    type: T & {};
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
}, "">;
