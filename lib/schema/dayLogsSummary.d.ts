import * as yup from 'yup';
declare const tacticSummarySchema: yup.ObjectSchema<{
    title: string;
    dataValue: number | undefined;
    dataUnit: NonNullable<"time" | "custom" | undefined>;
    dataCustomUnit: string | undefined;
    formattedDataValue: string | undefined;
    optionId: string | null | undefined;
    optionLabel: string | undefined;
    optionColor: string | undefined;
}, yup.AnyObject, {
    title: undefined;
    dataValue: undefined;
    dataUnit: undefined;
    dataCustomUnit: undefined;
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
            dataCustomUnit?: string | undefined;
            formattedDataValue?: string | undefined;
            optionId?: string | null | undefined;
            optionLabel?: string | undefined;
            optionColor?: string | undefined;
            title: string;
            dataUnit: NonNullable<"time" | "custom" | undefined>;
        };
    };
}, yup.AnyObject, {
    hour: undefined;
    minute: undefined;
    tacticSummariesById: undefined;
}, "">;
export type LogSummaryValue = yup.InferType<typeof logSummarySchema>;
export declare const dayLogsSummarySchema: yup.Lazy<{
    [x: string]: {
        hour: number;
        minute: number;
        tacticSummariesById: {
            [x: string]: {
                dataValue?: number | undefined;
                dataCustomUnit?: string | undefined;
                formattedDataValue?: string | undefined;
                optionId?: string | null | undefined;
                optionLabel?: string | undefined;
                optionColor?: string | undefined;
                title: string;
                dataUnit: NonNullable<"time" | "custom" | undefined>;
            };
        };
    };
}, yup.AnyObject, any>;
export type DayLogsSummaryValue = yup.InferType<typeof dayLogsSummarySchema>;
export {};
