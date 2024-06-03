import * as yup from 'yup';
export declare const profileLogsSummarySchema: yup.Lazy<{
    [x: string]: {
        [x: string]: {
            value?: number | undefined;
            customUnit?: string | undefined;
            optionId?: string | null | undefined;
            optionLabel?: string | undefined;
            optionColor?: string | undefined;
            optionTextColor?: string | undefined;
            isCompleted?: boolean | undefined;
            nextStrategiesPath?: string | undefined;
            lowEmoji?: yup.Maybe<string | undefined>;
            highEmoji?: yup.Maybe<string | undefined>;
            loggedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            unit: NonNullable<"impulse" | "time" | "custom" | undefined>;
            formattedValue: string;
        };
    };
}, yup.AnyObject, any>;
export type ProfileLogsSummaryValue = yup.InferType<typeof profileLogsSummarySchema>;
