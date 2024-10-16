import * as Factory from 'factory.ts';
import { TimestampLike } from '../utils/firestore/TimestampLike';
export declare const makeQuestionFactories: (TimestampKlass: typeof TimestampLike) => {
    textQuestionFactory: Factory.Sync.Factory<{
        followUps?: ({
            message?: string | undefined;
            type: "askAnotherQuestion";
            questionId: string;
        } | {
            message?: string | undefined;
            type: "writeAnswerToProfile";
            profileKey: string;
        } | {
            message?: string | undefined;
            type: "writeValueToProfile";
            profileKey: string;
            value: {};
        })[] | undefined;
        recommendedForIssueIds?: string[] | undefined;
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            toJSON?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            isEqual?: any;
            toMillis?: any;
            toJSON?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        isPublic?: boolean | undefined;
        categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
        options?: ({
            label?: string | undefined;
            followUps?: ({
                message?: string | undefined;
                type: "askAnotherQuestion";
                questionId: string;
            } | {
                message?: string | undefined;
                type: "writeAnswerToProfile";
                profileKey: string;
            } | {
                message?: string | undefined;
                type: "writeValueToProfile";
                profileKey: string;
                value: {};
            })[] | undefined;
            color?: string | undefined;
            textColor?: string | undefined;
            setbackThreshold?: number | undefined;
            greaterThan?: number | undefined;
            lessThanOrEqualTo?: number | undefined;
            type: "numeric";
            text: string;
        } | {
            label?: string | undefined;
            followUps?: ({
                message?: string | undefined;
                type: "askAnotherQuestion";
                questionId: string;
            } | {
                message?: string | undefined;
                type: "writeAnswerToProfile";
                profileKey: string;
            } | {
                message?: string | undefined;
                type: "writeValueToProfile";
                profileKey: string;
                value: {};
            })[] | undefined;
            color?: string | undefined;
            textColor?: string | undefined;
            type: "string";
            text: string;
        })[] | undefined;
        ordinals?: {
            [x: string]: number;
        } | null | undefined;
        templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
        writeAnswerToProfileMemoryKey?: string | undefined;
        type: "text";
        prompt: string;
        ordinal: number;
    }, "type" | "prompt" | "ordinal" | ("followUps" | "recommendedForIssueIds" | "createdAt" | "updatedAt" | "isPublic" | "categories" | "options" | "ordinals" | "templateFor" | "writeAnswerToProfileMemoryKey")>;
    timeQuestionFactory: Factory.Sync.Factory<{
        followUps?: ({
            message?: string | undefined;
            type: "askAnotherQuestion";
            questionId: string;
        } | {
            message?: string | undefined;
            type: "writeAnswerToProfile";
            profileKey: string;
        } | {
            message?: string | undefined;
            type: "writeValueToProfile";
            profileKey: string;
            value: {};
        })[] | undefined;
        setbackThreshold?: number | undefined;
        recommendedForIssueIds?: string[] | undefined;
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            toJSON?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            isEqual?: any;
            toMillis?: any;
            toJSON?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        isPublic?: boolean | undefined;
        categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
        options?: ({
            label?: string | undefined;
            followUps?: ({
                message?: string | undefined;
                type: "askAnotherQuestion";
                questionId: string;
            } | {
                message?: string | undefined;
                type: "writeAnswerToProfile";
                profileKey: string;
            } | {
                message?: string | undefined;
                type: "writeValueToProfile";
                profileKey: string;
                value: {};
            })[] | undefined;
            color?: string | undefined;
            textColor?: string | undefined;
            setbackThreshold?: number | undefined;
            greaterThan?: number | undefined;
            lessThanOrEqualTo?: number | undefined;
            type: "numeric";
            text: string;
        } | {
            label?: string | undefined;
            followUps?: ({
                message?: string | undefined;
                type: "askAnotherQuestion";
                questionId: string;
            } | {
                message?: string | undefined;
                type: "writeAnswerToProfile";
                profileKey: string;
            } | {
                message?: string | undefined;
                type: "writeValueToProfile";
                profileKey: string;
                value: {};
            })[] | undefined;
            color?: string | undefined;
            textColor?: string | undefined;
            type: "string";
            text: string;
        })[] | undefined;
        ordinals?: {
            [x: string]: number;
        } | null | undefined;
        templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
        writeAnswerToProfileMemoryKey?: string | undefined;
        type: "time";
        prompt: string;
        ordinal: number;
    }, "type" | "prompt" | "ordinal" | ("followUps" | "setbackThreshold" | "recommendedForIssueIds" | "createdAt" | "updatedAt" | "isPublic" | "categories" | "options" | "ordinals" | "templateFor" | "writeAnswerToProfileMemoryKey")>;
    multipleChoiceQuestionFactory: Factory.Sync.Factory<{
        followUps?: ({
            message?: string | undefined;
            type: "askAnotherQuestion";
            questionId: string;
        } | {
            message?: string | undefined;
            type: "writeAnswerToProfile";
            profileKey: string;
        } | {
            message?: string | undefined;
            type: "writeValueToProfile";
            profileKey: string;
            value: {};
        })[] | undefined;
        recommendedForIssueIds?: string[] | undefined;
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            toJSON?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            isEqual?: any;
            toMillis?: any;
            toJSON?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        isPublic?: boolean | undefined;
        categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
        ordinals?: {
            [x: string]: number;
        } | null | undefined;
        templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
        writeAnswerToProfileMemoryKey?: string | undefined;
        type: "multipleChoice";
        prompt: string;
        options: ({
            label?: string | undefined;
            followUps?: ({
                message?: string | undefined;
                type: "askAnotherQuestion";
                questionId: string;
            } | {
                message?: string | undefined;
                type: "writeAnswerToProfile";
                profileKey: string;
            } | {
                message?: string | undefined;
                type: "writeValueToProfile";
                profileKey: string;
                value: {};
            })[] | undefined;
            color?: string | undefined;
            textColor?: string | undefined;
            setbackThreshold?: number | undefined;
            greaterThan?: number | undefined;
            lessThanOrEqualTo?: number | undefined;
            type: "numeric";
            text: string;
        } | {
            label?: string | undefined;
            followUps?: ({
                message?: string | undefined;
                type: "askAnotherQuestion";
                questionId: string;
            } | {
                message?: string | undefined;
                type: "writeAnswerToProfile";
                profileKey: string;
            } | {
                message?: string | undefined;
                type: "writeValueToProfile";
                profileKey: string;
                value: {};
            })[] | undefined;
            color?: string | undefined;
            textColor?: string | undefined;
            type: "string";
            text: string;
        })[];
        ordinal: number;
        canAddNewOptions: NonNullable<boolean | undefined>;
    }, "type" | "prompt" | "options" | "ordinal" | "canAddNewOptions" | ("followUps" | "recommendedForIssueIds" | "createdAt" | "updatedAt" | "isPublic" | "categories" | "ordinals" | "templateFor" | "writeAnswerToProfileMemoryKey")>;
};
