import * as yup from 'yup';
export declare const measureSliderTacticSchema: yup.ObjectSchema<{
    type: "measure-slider";
    uid: string | null | undefined;
    sourceId: string | undefined;
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    title: string;
    subtitle: yup.Maybe<string | undefined>;
    description: string | null | undefined;
    image: {
        localFilePath?: yup.Maybe<string | undefined>;
        storagePath?: yup.Maybe<string | undefined>;
        uri?: yup.Maybe<string | undefined>;
    } | null | undefined;
    backgroundColor: string;
    isTemplate: boolean | null | undefined;
    language: string | null | undefined;
    href: string | null | undefined;
    categoryIds: (string | undefined)[] | null | undefined;
    isShared: boolean | null | undefined;
    isResponseRequired: boolean | null | undefined;
    timerSeconds: yup.Maybe<number | undefined>;
    isAvailableForRecommendation: boolean | null | undefined;
    numberOfLikes: number | null | undefined;
    isSuggested: boolean | undefined;
    lowEmoji: yup.Maybe<string | undefined>;
    highEmoji: yup.Maybe<string | undefined>;
}, yup.AnyObject, {
    type: undefined;
    uid: undefined;
    sourceId: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    title: undefined;
    subtitle: undefined;
    description: undefined;
    image: {
        localFilePath: undefined;
        storagePath: undefined;
        uri: undefined;
    };
    backgroundColor: undefined;
    isTemplate: undefined;
    language: undefined;
    href: undefined;
    categoryIds: "";
    isShared: undefined;
    isResponseRequired: undefined;
    timerSeconds: undefined;
    isAvailableForRecommendation: undefined;
    numberOfLikes: undefined;
    isSuggested: undefined;
    lowEmoji: undefined;
    highEmoji: undefined;
}, "">;
export type MeasureSliderTacticValue = yup.InferType<typeof measureSliderTacticSchema>;
export declare const measureTimeTacticSchema: yup.ObjectSchema<{
    type: "measure-time";
    uid: string | null | undefined;
    sourceId: string | undefined;
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    title: string;
    subtitle: yup.Maybe<string | undefined>;
    description: string | null | undefined;
    image: {
        localFilePath?: yup.Maybe<string | undefined>;
        storagePath?: yup.Maybe<string | undefined>;
        uri?: yup.Maybe<string | undefined>;
    } | null | undefined;
    backgroundColor: string;
    isTemplate: boolean | null | undefined;
    language: string | null | undefined;
    href: string | null | undefined;
    categoryIds: (string | undefined)[] | null | undefined;
    isShared: boolean | null | undefined;
    isResponseRequired: boolean | null | undefined;
    timerSeconds: yup.Maybe<number | undefined>;
    isAvailableForRecommendation: boolean | null | undefined;
    numberOfLikes: number | null | undefined;
    isSuggested: boolean | undefined;
}, yup.AnyObject, {
    type: undefined;
    uid: undefined;
    sourceId: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    title: undefined;
    subtitle: undefined;
    description: undefined;
    image: {
        localFilePath: undefined;
        storagePath: undefined;
        uri: undefined;
    };
    backgroundColor: undefined;
    isTemplate: undefined;
    language: undefined;
    href: undefined;
    categoryIds: "";
    isShared: undefined;
    isResponseRequired: undefined;
    timerSeconds: undefined;
    isAvailableForRecommendation: undefined;
    numberOfLikes: undefined;
    isSuggested: undefined;
}, "">;
export type MeasureTimeTacticValue = yup.InferType<typeof measureTimeTacticSchema>;
export declare const measureCounterTacticSchema: yup.ObjectSchema<{
    type: "measure-counter";
    uid: string | null | undefined;
    sourceId: string | undefined;
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    title: string;
    subtitle: yup.Maybe<string | undefined>;
    description: string | null | undefined;
    image: {
        localFilePath?: yup.Maybe<string | undefined>;
        storagePath?: yup.Maybe<string | undefined>;
        uri?: yup.Maybe<string | undefined>;
    } | null | undefined;
    backgroundColor: string;
    isTemplate: boolean | null | undefined;
    language: string | null | undefined;
    href: string | null | undefined;
    categoryIds: (string | undefined)[] | null | undefined;
    isShared: boolean | null | undefined;
    isResponseRequired: boolean | null | undefined;
    timerSeconds: yup.Maybe<number | undefined>;
    isAvailableForRecommendation: boolean | null | undefined;
    numberOfLikes: number | null | undefined;
    isSuggested: boolean | undefined;
}, yup.AnyObject, {
    type: undefined;
    uid: undefined;
    sourceId: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    title: undefined;
    subtitle: undefined;
    description: undefined;
    image: {
        localFilePath: undefined;
        storagePath: undefined;
        uri: undefined;
    };
    backgroundColor: undefined;
    isTemplate: undefined;
    language: undefined;
    href: undefined;
    categoryIds: "";
    isShared: undefined;
    isResponseRequired: undefined;
    timerSeconds: undefined;
    isAvailableForRecommendation: undefined;
    numberOfLikes: undefined;
    isSuggested: undefined;
}, "">;
export type MeasureCounterTacticValue = yup.InferType<typeof measureCounterTacticSchema>;
export declare const measureTacticSubsetSchemas: Record<MeasureTacticValue['type'], yup.ObjectSchema<MeasureTacticValue>>;
export declare const measureTacticSubsetSchema: yup.Lazy<ValidatedMeasureTactic, yup.AnyObject, any>;
export declare const measureTacticSchemas: Record<MeasureTacticValue['type'], yup.ObjectSchema<MeasureTacticValue>>;
export declare const measureTacticSchema: yup.Lazy<ValidatedMeasureTactic, yup.AnyObject, any>;
type ValidatedMeasureTactic = {
    [K in MeasureTacticValue['type']]: yup.InferType<(typeof measureTacticSchemas)[K]>;
}[MeasureTacticValue['type']];
export type MeasureTacticValue = MeasureSliderTacticValue | MeasureTimeTacticValue | MeasureCounterTacticValue;
export {};
