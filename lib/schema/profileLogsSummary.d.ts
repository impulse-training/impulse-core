import * as yup from 'yup';
export declare const profileLogsSummarySchema: yup.Lazy<{
    [x: string]: {
        [x: string]: {
            label?: string | undefined;
            idValue?: string | undefined;
            numericValue?: number | undefined;
            labelColor?: string | undefined;
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
export type ProfileLogsSummaryValue = yup.InferType<typeof profileLogsSummarySchema>;
