import * as Factory from 'factory.ts';
import { TimestampLike } from '../utils';
export declare const makeDaysSummaryFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
    [x: string]: {
        emotions: {
            [x: string]: {
                color?: string | undefined;
                name: string;
                label: string;
                key: string;
                intensity: number | null;
            };
        };
        behaviors: {
            [x: string]: {
                color?: string | undefined;
                behavior: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    dailyLimit?: number | undefined;
                    skipGameplanAutoCreation?: boolean | undefined;
                    name: string;
                    ordinal: number;
                    trackingType: NonNullable<"time" | "counter" | undefined>;
                    isHelpful: boolean | null;
                };
                data: {
                    label?: string | undefined;
                    idValue?: string | undefined;
                    numericValue?: number | undefined;
                    setAt: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    };
                    stringValue: string;
                    unit: string;
                };
            };
        };
    };
}, string | number>;
