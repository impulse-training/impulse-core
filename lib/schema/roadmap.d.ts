import * as yup from 'yup';
export declare const roadmapSchema: yup.ObjectSchema<{
    name: string;
    createdAt: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    stages: {
        name: string;
        graduationCriteria: {
            requiredWinRate: number;
            requiredWinRateDays: number;
        };
    }[];
    recommendedForIssueIds: string[] | undefined;
    recommendedForIssueOrdinals: {
        [x: string]: number;
    } | null | undefined;
}, yup.AnyObject, {
    name: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    stages: "";
    recommendedForIssueIds: "";
    recommendedForIssueOrdinals: undefined;
}, "">;
export type RoadmapValue = yup.InferType<typeof roadmapSchema>;
