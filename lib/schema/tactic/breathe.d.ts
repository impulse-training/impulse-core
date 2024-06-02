import * as yup from 'yup';
export declare const breatheTacticSchema: yup.ObjectSchema<{
    type: "breathe";
    profileId: string | null | undefined;
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
    ordinal: number;
    title: string;
    pastTenseTitle: string | undefined;
    commentCount: number;
    description: string | null | undefined;
    debriefAfterMinutes: number | null | undefined;
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
            label?: string | undefined;
            text: string;
            type: "question-multiple-choice";
            color: string;
            textColor: string;
            strategiesPath: string;
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
            label?: string | undefined;
            setbackThreshold?: number | undefined;
            greaterThan?: number | undefined;
            lessThanOrEqualTo?: number | undefined;
            text: string;
            type: "question-time";
            color: string;
            textColor: string;
            strategiesPath: string;
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
            label?: string | undefined;
            setbackThreshold?: number | undefined;
            greaterThan?: number | undefined;
            lessThanOrEqualTo?: number | undefined;
            text: string;
            type: "question-counter";
            color: string;
            textColor: string;
            strategiesPath: string;
        };
    } | null | undefined;
    backgroundColor: string | undefined;
    language: string | null | undefined;
    linkUrl: string | null | undefined;
    likesCount: number | null | undefined;
    timerSeconds: yup.Maybe<number | undefined>;
    isSuggested: boolean | undefined;
    inFor: number;
    holdFor: number;
    outFor: number;
    repeat: yup.Maybe<number | undefined>;
}, yup.AnyObject, {
    type: undefined;
    profileId: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    ordinal: undefined;
    title: undefined;
    pastTenseTitle: undefined;
    commentCount: undefined;
    description: undefined;
    debriefAfterMinutes: undefined;
    image: {
        localFilePath: undefined;
        storagePath: undefined;
        uri: undefined;
    };
    setbackThreshold: undefined;
    optionsById: undefined;
    backgroundColor: undefined;
    language: undefined;
    linkUrl: undefined;
    likesCount: undefined;
    timerSeconds: undefined;
    isSuggested: undefined;
    inFor: undefined;
    holdFor: undefined;
    outFor: undefined;
    repeat: undefined;
}, "">;
export type BreatheTacticValue = yup.InferType<typeof breatheTacticSchema>;
