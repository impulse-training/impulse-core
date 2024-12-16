import * as yup from 'yup';
export declare const emotionDataSchema: yup.ObjectSchema<{
    label: string;
    name: string;
    color: string | undefined;
    key: string;
    intensity: number | null;
}, yup.AnyObject, {
    label: undefined;
    name: undefined;
    color: undefined;
    key: undefined;
    intensity: undefined;
}, "">;
export type EmotionDataValue = yup.InferType<typeof emotionDataSchema>;
