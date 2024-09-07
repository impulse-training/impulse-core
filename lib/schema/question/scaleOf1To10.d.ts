import * as yup from 'yup';
export declare const scaleOf1To10QuestionSchema: yup.ObjectSchema<{
    categories: ("dayReview" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback")[] | undefined;
    prompt: string;
    type: "scaleOf1To10";
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
    })[] | undefined;
    ordinals: {
        [x: string]: number;
    } | null | undefined;
    templateFor: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
    writeAnswerToProfileMemoryKey: string | undefined;
    recommendedForIssueIds: string[] | undefined;
    followUps: ({
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
    createdAt: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    setbackThreshold: number | undefined;
    lowEmoji: yup.Maybe<string | undefined>;
    highEmoji: yup.Maybe<string | undefined>;
}, yup.AnyObject, {
    categories: "";
    prompt: undefined;
    type: undefined;
    options: "";
    ordinals: undefined;
    templateFor: undefined;
    writeAnswerToProfileMemoryKey: undefined;
    recommendedForIssueIds: "";
    followUps: "";
    createdAt: undefined;
    updatedAt: undefined;
    setbackThreshold: undefined;
    lowEmoji: undefined;
    highEmoji: undefined;
}, "">;
export type ScaleOf1To10QuestionValue = yup.InferType<typeof scaleOf1To10QuestionSchema>;
