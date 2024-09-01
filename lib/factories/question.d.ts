import * as Factory from 'factory.ts';
import { TimestampLike } from '../utils/firestore/TimestampLike';
export declare const makeQuestionFactories: (TimestampKlass: typeof TimestampLike) => {
    textQuestionFactory: Factory.Sync.Factory<{
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
        followUps?: ({
            message?: string | undefined;
            type: "askAnotherQuestion";
            questionId: string;
        } | {
            message?: string | undefined;
            animationFileName?: string | undefined;
            lowerMessage?: string | undefined;
            type: "showTour";
            steps: {
                title: string;
                message: string;
                elementRefName: string;
                confirmButtonLabel: string;
            }[];
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
        categories?: ("dayReview" | "impulses" | "debriefing" | "afterSuccess" | "afterSetback")[] | undefined;
        options?: ({
            label?: string | undefined;
            setbackThreshold?: number | undefined;
            followUps?: ({
                message?: string | undefined;
                type: "askAnotherQuestion";
                questionId: string;
            } | {
                message?: string | undefined;
                animationFileName?: string | undefined;
                lowerMessage?: string | undefined;
                type: "showTour";
                steps: {
                    title: string;
                    message: string;
                    elementRefName: string;
                    confirmButtonLabel: string;
                }[];
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
                animationFileName?: string | undefined;
                lowerMessage?: string | undefined;
                type: "showTour";
                steps: {
                    title: string;
                    message: string;
                    elementRefName: string;
                    confirmButtonLabel: string;
                }[];
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
        prompt: string;
        type: "text";
    }, "prompt" | "type" | ("recommendedForIssueIds" | "createdAt" | "updatedAt" | "followUps" | "categories" | "options" | "ordinals" | "templateFor" | "writeAnswerToProfileMemoryKey")>;
    timeQuestionFactory: Factory.Sync.Factory<{
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
        setbackThreshold?: number | undefined;
        followUps?: ({
            message?: string | undefined;
            type: "askAnotherQuestion";
            questionId: string;
        } | {
            message?: string | undefined;
            animationFileName?: string | undefined;
            lowerMessage?: string | undefined;
            type: "showTour";
            steps: {
                title: string;
                message: string;
                elementRefName: string;
                confirmButtonLabel: string;
            }[];
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
        categories?: ("dayReview" | "impulses" | "debriefing" | "afterSuccess" | "afterSetback")[] | undefined;
        options?: ({
            label?: string | undefined;
            setbackThreshold?: number | undefined;
            followUps?: ({
                message?: string | undefined;
                type: "askAnotherQuestion";
                questionId: string;
            } | {
                message?: string | undefined;
                animationFileName?: string | undefined;
                lowerMessage?: string | undefined;
                type: "showTour";
                steps: {
                    title: string;
                    message: string;
                    elementRefName: string;
                    confirmButtonLabel: string;
                }[];
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
                animationFileName?: string | undefined;
                lowerMessage?: string | undefined;
                type: "showTour";
                steps: {
                    title: string;
                    message: string;
                    elementRefName: string;
                    confirmButtonLabel: string;
                }[];
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
        prompt: string;
        type: "time";
    }, "prompt" | "type" | ("recommendedForIssueIds" | "createdAt" | "updatedAt" | "setbackThreshold" | "followUps" | "categories" | "options" | "ordinals" | "templateFor" | "writeAnswerToProfileMemoryKey")>;
    multipleChoiceQuestionFactory: Factory.Sync.Factory<{
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
        followUps?: ({
            message?: string | undefined;
            type: "askAnotherQuestion";
            questionId: string;
        } | {
            message?: string | undefined;
            animationFileName?: string | undefined;
            lowerMessage?: string | undefined;
            type: "showTour";
            steps: {
                title: string;
                message: string;
                elementRefName: string;
                confirmButtonLabel: string;
            }[];
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
        categories?: ("dayReview" | "impulses" | "debriefing" | "afterSuccess" | "afterSetback")[] | undefined;
        ordinals?: {
            [x: string]: number;
        } | null | undefined;
        templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
        writeAnswerToProfileMemoryKey?: string | undefined;
        prompt: string;
        type: "multipleChoice";
        options: ({
            label?: string | undefined;
            setbackThreshold?: number | undefined;
            followUps?: ({
                message?: string | undefined;
                type: "askAnotherQuestion";
                questionId: string;
            } | {
                message?: string | undefined;
                animationFileName?: string | undefined;
                lowerMessage?: string | undefined;
                type: "showTour";
                steps: {
                    title: string;
                    message: string;
                    elementRefName: string;
                    confirmButtonLabel: string;
                }[];
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
                animationFileName?: string | undefined;
                lowerMessage?: string | undefined;
                type: "showTour";
                steps: {
                    title: string;
                    message: string;
                    elementRefName: string;
                    confirmButtonLabel: string;
                }[];
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
        canAddNewOptions: NonNullable<boolean | undefined>;
    }, "prompt" | "type" | "options" | "canAddNewOptions" | ("recommendedForIssueIds" | "createdAt" | "updatedAt" | "followUps" | "categories" | "ordinals" | "templateFor" | "writeAnswerToProfileMemoryKey")>;
};
