import * as Factory from 'factory.ts';
import { TimestampLike } from '../utils';
export declare const makeProfileLogsSummaryFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
    [x: string]: {
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
}, string | number>;
