import * as yup from 'yup';
export declare const daysSummarySchema: yup.Lazy<{
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
        metrics: {
            [x: string]: {
                doc?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                data: {
                    label: string;
                    metricInputValue: number;
                    absoluteAttributeValue: number;
                };
                attribute: {
                    name: string;
                    key: string;
                    icon: NonNullable<import("./metric").MetricIcons | undefined>;
                };
            };
        };
    };
}, yup.AnyObject, any>;
export type DaysSummaryValue = yup.InferType<typeof daysSummarySchema>;
