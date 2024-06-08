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
            unit: NonNullable<"time" | "custom" | "impulse" | undefined>;
            formattedValue: string;
        };
    };
}, yup.AnyObject, any>;
export type ProfileLogsSummaryValue = yup.InferType<typeof profileLogsSummarySchema>;
