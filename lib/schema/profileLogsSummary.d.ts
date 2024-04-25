import * as yup from 'yup';
export declare const profileLogsSummarySchema: yup.Lazy<{
    [x: string]: {
        optionColors: string[];
        tactics: {
            [x: string]: {
                dataCustomUnit?: string | undefined;
                dataUnit: NonNullable<"time" | "custom" | undefined>;
                totalDataValue: number;
                formattedTotalDataValue: string;
            };
        };
    };
}, yup.AnyObject, any>;
export type ProfileLogsSummaryValue = yup.InferType<typeof profileLogsSummarySchema>;
