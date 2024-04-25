import * as yup from 'yup';
export declare const profileLogsSummarySchema: yup.ObjectSchema<{
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
    profileId: string;
    daySummaries: {
        [x: string]: {
            optionColors: string[];
            tacticDaySummaries: {
                [x: string]: {
                    totalDataValue: number;
                    formattedTotalDataValue: string;
                };
            };
        };
    };
}, yup.AnyObject, {
    createdAt: undefined;
    updatedAt: undefined;
    profileId: undefined;
    daySummaries: undefined;
}, "">;
export type ProfileLogsSummaryValue = yup.InferType<typeof profileLogsSummarySchema>;
