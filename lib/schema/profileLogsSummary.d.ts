import * as yup from 'yup';
export declare const profileLogsSummarySchema: yup.Lazy<{
    [x: string]: {
        optionColors: string[];
        tactics: {
            [x: string]: {
                totalDataValue: number;
                formattedTotalDataValue: string;
            };
        };
    };
}, yup.AnyObject, any>;
export type ProfileLogsSummaryValue = yup.InferType<typeof profileLogsSummarySchema>;
