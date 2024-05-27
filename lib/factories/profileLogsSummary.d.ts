import * as Factory from 'factory.ts';
export declare const profileLogsSummaryFactory: Factory.Sync.Factory<{
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
            lowEmoji?: import("yup").Maybe<string | undefined>;
            highEmoji?: import("yup").Maybe<string | undefined>;
            unit: NonNullable<"impulse" | "time" | "custom" | undefined>;
            formattedValue: string;
        };
    };
}, string | number>;
