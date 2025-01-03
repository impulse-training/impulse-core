import * as yup from 'yup';
export declare const metricDataSchema: yup.ObjectSchema<{
    metricInputValue: number;
    absoluteAttributeValue: number;
    label: string;
}, yup.AnyObject, {
    metricInputValue: undefined;
    absoluteAttributeValue: undefined;
    label: undefined;
}, "">;
export type MetricDataValue = yup.InferType<typeof metricDataSchema>;
export declare const metricAttributeAndDataSchema: yup.ObjectSchema<{
    doc: import("../../utils/firestore").DocumentReferenceLike<unknown> | undefined;
    attribute: {
        name: string;
        key: string;
        icon: NonNullable<import("../../metric").MetricIcons | undefined>;
    };
    data: {
        label: string;
        metricInputValue: number;
        absoluteAttributeValue: number;
    };
}, yup.AnyObject, {
    doc: undefined;
    attribute: {
        key: undefined;
        name: undefined;
        icon: undefined;
    };
    data: {
        metricInputValue: undefined;
        absoluteAttributeValue: undefined;
        label: undefined;
    };
}, "">;
export type MetricAndMetricDataValue = yup.InferType<typeof metricAttributeAndDataSchema>;
