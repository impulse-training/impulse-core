import * as yup from 'yup';
export declare const choiceSchema: yup.ObjectSchema<{
    text: string;
    strategies: {
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
            ordinal?: yup.Maybe<number | undefined>;
            type: "impulse";
            tacticIds: string[];
            name: string;
        };
    };
    ordinal: number;
}, yup.AnyObject, {
    text: undefined;
    strategies: undefined;
    ordinal: undefined;
}, "">;
export declare const questionMultipleChoiceTacticSchema: yup.ObjectSchema<{
    type: "question-multiple-choice";
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
    choices: {
        [x: string]: {
            text: string;
            strategies: {
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
                    ordinal?: yup.Maybe<number | undefined>;
                    type: "impulse";
                    tacticIds: string[];
                    name: string;
                };
            };
            ordinal: number;
        };
    } | null | undefined;
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
    choices: undefined;
}, "">;
export type QuestionMultipleChoiceTacticValue = yup.InferType<typeof questionMultipleChoiceTacticSchema>;
