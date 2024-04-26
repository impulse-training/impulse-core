import * as yup from 'yup';
declare const tacticTotalDataSchema: yup.ObjectSchema<{
    dataUnit: NonNullable<"time" | "custom" | undefined>;
    dataCustomUnit: string | undefined;
    totalDataValue: number;
    formattedTotalDataValue: string;
    optionId: string | undefined;
    optionColor: string | undefined;
    optionLabel: string | undefined;
    optionTextColor: string | undefined;
}, yup.AnyObject, {
    dataUnit: undefined;
    dataCustomUnit: undefined;
    totalDataValue: undefined;
    formattedTotalDataValue: undefined;
    optionId: undefined;
    optionColor: undefined;
    optionLabel: undefined;
    optionTextColor: undefined;
}, "">;
export type TacticTotalData = yup.InferType<typeof tacticTotalDataSchema>;
export declare const profileLogsSummarySchema: yup.Lazy<{
    [x: string]: {
        [x: string]: {
            optionId?: string | undefined;
            optionLabel?: string | undefined;
            optionColor?: string | undefined;
            optionTextColor?: string | undefined;
            dataCustomUnit?: string | undefined;
            dataUnit: NonNullable<"time" | "custom" | undefined>;
            totalDataValue: number;
            formattedTotalDataValue: string;
        };
    };
}, yup.AnyObject, any>;
export type ProfileLogsSummaryValue = yup.InferType<typeof profileLogsSummarySchema>;
export {};
