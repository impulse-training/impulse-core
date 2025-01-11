import * as yup from 'yup';
export declare enum MetricIcons {
    Happy = "happy",
    Sad = "sad",
    Calm = "calm",
    Anxious = "anxious",
    Excited = "excited",
    Bored = "bored",
    Grateful = "grateful",
    Resentful = "resentful",
    Confident = "confident",
    Unsure = "unsure",
    Energetic = "energetic",
    Tired = "tired",
    Hopeful = "hopeful",
    Hopeless = "hopeless",
    Relaxed = "relaxed",
    Stressed = "stressed",
    Connected = "connected",
    Lonely = "lonely",
    Focused = "focused",
    Distracted = "distracted"
}
export declare const metricAttributeSchema: yup.ObjectSchema<{
    key: string;
    name: string;
    icon: NonNullable<MetricIcons | undefined>;
}, yup.AnyObject, {
    key: undefined;
    name: undefined;
    icon: undefined;
}, "">;
export declare const metricSchema: yup.ObjectSchema<{
    positiveAttribute: {
        name: string;
        key: string;
        icon: NonNullable<MetricIcons | undefined>;
    };
    negativeAttribute: {
        name: string;
        key: string;
        icon: NonNullable<MetricIcons | undefined>;
    } | undefined;
    isRecommendedForExperiments: boolean | undefined;
    overallDescription: string | undefined;
}, yup.AnyObject, {
    positiveAttribute: {
        key: undefined;
        name: undefined;
        icon: undefined;
    };
    negativeAttribute: undefined;
    isRecommendedForExperiments: undefined;
    overallDescription: undefined;
}, "">;
export type MetricValue = yup.InferType<typeof metricSchema>;
