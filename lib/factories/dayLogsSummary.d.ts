import * as Factory from 'factory.ts';
export declare const dayLogsSummaryFactory: Factory.Sync.Factory<{
    [x: string]: {
        type: NonNullable<"time" | "impulse" | undefined>;
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
                setAt: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                };
                unit: NonNullable<"text" | "time" | "custom" | undefined>;
                formattedValue: string;
            };
        };
        optionsById: {
            [x: string]: {
                createdAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                label?: string | undefined;
                text: string;
                type: "question-multiple-choice";
                color: string;
                textColor: string;
            } | {
                createdAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                label?: string | undefined;
                setbackThreshold?: number | undefined;
                greaterThan?: number | undefined;
                lessThanOrEqualTo?: number | undefined;
                text: string;
                type: "question-time";
                color: string;
                textColor: string;
            } | {
                createdAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                label?: string | undefined;
                setbackThreshold?: number | undefined;
                greaterThan?: number | undefined;
                lessThanOrEqualTo?: number | undefined;
                text: string;
                type: "question-counter";
                color: string;
                textColor: string;
            };
        };
    };
}, string | number>;
