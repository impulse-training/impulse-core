import * as yup from 'yup';
declare const tacticSummarySchema: yup.ObjectSchema<{
    title: string;
    dataValue: number | undefined;
    formattedDataValue: string | undefined;
    optionId: string | null | undefined;
    optionLabel: string | undefined;
    optionColor: string | undefined;
}, yup.AnyObject, {
    title: undefined;
    dataValue: undefined;
    formattedDataValue: undefined;
    optionId: undefined;
    optionLabel: undefined;
    optionColor: undefined;
}, "">;
export type TacticSummaryValue = yup.InferType<typeof tacticSummarySchema>;
declare const logSummarySchema: yup.ObjectSchema<{
    hour: number;
    minute: number;
    tacticSummariesById: {
        [x: string]: {
            dataValue?: number | undefined;
            formattedDataValue?: string | undefined;
            optionId?: string | null | undefined;
            optionLabel?: string | undefined;
            optionColor?: string | undefined;
            title: string;
        };
    };
}, yup.AnyObject, {
    hour: undefined;
    minute: undefined;
    tacticSummariesById: undefined;
}, "">;
export type LogSummaryValue = yup.InferType<typeof logSummarySchema>;
export declare const dayLogsSummarySchema: yup.ObjectSchema<{
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
    dateString: string;
    logSummariesById: {
        [x: string]: {
            hour: number;
            minute: number;
            tacticSummariesById: {
                [x: string]: {
                    dataValue?: number | undefined;
                    formattedDataValue?: string | undefined;
                    optionId?: string | null | undefined;
                    optionLabel?: string | undefined;
                    optionColor?: string | undefined;
                    title: string;
                };
            };
        };
    };
}, yup.AnyObject, {
    createdAt: undefined;
    updatedAt: undefined;
    profileId: undefined;
    dateString: undefined;
    logSummariesById: undefined;
}, "">;
export type DayLogsSummaryValue = yup.InferType<typeof dayLogsSummarySchema>;
export {};
