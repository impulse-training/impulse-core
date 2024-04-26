import * as yup from 'yup';
import { tacticDataSchema } from './log';
export type TacticSummaryValue = yup.InferType<typeof tacticDataSchema>;
declare const logSummarySchema: yup.ObjectSchema<{
    hour: number;
    minute: number;
    tacticDataById: {
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
            unit: NonNullable<"time" | "custom" | undefined>;
            formattedValue: string;
        };
    };
}, yup.AnyObject, {
    hour: undefined;
    minute: undefined;
    tacticDataById: undefined;
}, "">;
export type LogSummaryValue = yup.InferType<typeof logSummarySchema>;
export declare const dayLogsSummarySchema: yup.Lazy<{
    [x: string]: {
        hour: number;
        minute: number;
        tacticDataById: {
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
                unit: NonNullable<"time" | "custom" | undefined>;
                formattedValue: string;
            };
        };
    };
}, yup.AnyObject, any>;
export type DayLogsSummaryValue = yup.InferType<typeof dayLogsSummarySchema>;
export {};
