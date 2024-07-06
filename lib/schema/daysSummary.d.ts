import * as yup from 'yup';
export declare const daysSummarySchema: yup.Lazy<{
    [x: string]: {
        [x: string]: {
            label?: string | undefined;
            setbackThreshold?: number | undefined;
            idValue?: string | undefined;
            numericValue?: number | undefined;
            color?: string | undefined;
            setAt: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            stringValue: string;
            unit: string;
        };
    };
}, yup.AnyObject, any>;
export type DaysSummaryValue = yup.InferType<typeof daysSummarySchema>;
