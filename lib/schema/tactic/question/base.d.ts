import { QuestionKeyType } from '../../utils/questionType';
export declare function questionTacticValueBaseSchema(type: QuestionKeyType): import("yup").ObjectSchema<{
    type: QuestionKeyType;
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
    subtitle: import("yup").Maybe<string | undefined>;
    description: string | null | undefined;
    image: {
        localFilePath?: import("yup").Maybe<string | undefined>;
        storagePath?: import("yup").Maybe<string | undefined>;
        uri?: import("yup").Maybe<string | undefined>;
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
            setbackThreshold?: number | undefined;
            color?: string | undefined;
            strategiesPath?: string | undefined;
            greaterThan?: number | undefined;
            lessThanOrEqualTo?: number | undefined;
            text: string;
            type: "question-time";
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
            color?: string | undefined;
            strategiesPath?: string | undefined;
            greaterThan?: number | undefined;
            lessThanOrEqualTo?: number | undefined;
            text: string;
            type: "question-counter";
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
            color?: string | undefined;
            strategiesPath?: string | undefined;
            text: string;
            type: "question-multiple-choice";
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
    timerSeconds: import("yup").Maybe<number | undefined>;
    isAvailableForRecommendation: boolean | null | undefined;
    numberOfLikes: number | null | undefined;
    isSuggested: boolean | undefined;
}, import("yup").AnyObject, {
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
}, "">;
