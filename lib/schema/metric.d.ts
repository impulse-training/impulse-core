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
    icon: MetricIcons | undefined;
}, yup.AnyObject, {
    key: undefined;
    name: undefined;
    icon: undefined;
}, "">;
export declare const metricSchema: yup.ObjectSchema<{
    positiveAttribute: {
        icon?: MetricIcons | undefined;
        name: string;
        key: string;
    };
    negativeAttribute: {
        icon?: MetricIcons | undefined;
        name: string;
        key: string;
    } | undefined;
    overallDescription: string | undefined;
    createdAt: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
}, yup.AnyObject, {
    positiveAttribute: {
        key: undefined;
        name: undefined;
        icon: undefined;
    };
    negativeAttribute: undefined;
    overallDescription: undefined;
    createdAt: undefined;
    updatedAt: undefined;
}, "">;
export type MetricValue = yup.InferType<typeof metricSchema>;
