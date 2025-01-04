import * as Factory from 'factory.ts';
import { MetricIcons } from '../schema';
import { TimestampLike } from '../utils';
export declare const makeDaysSummaryFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
    [x: string]: {
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
                    unit?: string | undefined;
                    dailyLimit?: number | undefined;
                    skipGameplanAutoCreation?: boolean | undefined;
                    name: string;
                    ordinal: number;
                    trackingType: NonNullable<"time" | "counter" | undefined>;
                    isHelpful: boolean | null;
                };
                data: {
                    label?: {
                        color?: string | undefined;
                        text: string;
                    } | null | undefined;
                    counterValue?: number | undefined;
                    timeSeconds?: number | undefined;
                    formattedValue: string;
                };
            };
        };
        metrics: {
            [x: string]: {
                doc?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
                data: {
                    label: string;
                    metricInputValue: number;
                    absoluteAttributeValue: number;
                };
                attribute: {
                    name: string;
                    key: string;
                    icon: NonNullable<MetricIcons | undefined>;
                };
            };
        };
    };
}, string | number>;
