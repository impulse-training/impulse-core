import * as yup from 'yup';
export declare const audioTacticSchema: yup.ObjectSchema<{
    type: "audio";
    profileId: string | null | undefined;
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
    setbackThreshold: number | null | undefined;
    optionsById: {
        [x: string]: {
            createdAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            strategiesPath?: string | undefined;
            greaterThan?: yup.Maybe<number | undefined>;
            lessThanOrEqualTo?: yup.Maybe<number | undefined>;
            text: string;
            ordinal: number;
            type: "numeric";
        } | {
            createdAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            strategiesPath?: string | undefined;
            text: string;
            ordinal: number;
            type: "string";
            value: string;
        };
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
    recording: {
        waveform?: string | null | undefined;
        localFilePath: string;
        remoteFilePath: string;
    };
}, yup.AnyObject, {
    type: undefined;
    profileId: undefined;
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
    setbackThreshold: undefined;
    optionsById: undefined;
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
    recording: {
        localFilePath: undefined;
        remoteFilePath: undefined;
        waveform: undefined;
    };
}, "">;
export type AudioTacticValue = yup.InferType<typeof audioTacticSchema>;
