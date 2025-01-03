import * as yup from 'yup';
export declare enum MetricIcons {
    EMOTICON_OUTLINE = "emoticon-outline",
    HEART = "heart",
    STAR = "star"
}
export declare const metricSchema: yup.ObjectSchema<{
    key: string | undefined;
    positiveMetric: {
        name?: string | undefined;
        color?: string | undefined;
        key?: string | undefined;
        icon: NonNullable<MetricIcons | undefined>;
    };
    negativeMetric: {
        name?: string | undefined;
        color?: string | undefined;
        key?: string | undefined;
        icon: NonNullable<MetricIcons | undefined>;
    } | undefined;
}, yup.AnyObject, {
    key: undefined;
    positiveMetric: {
        key: undefined;
        name: undefined;
        icon: undefined;
        color: undefined;
    };
    negativeMetric: undefined;
}, "">;
