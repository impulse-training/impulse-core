import * as yup from 'yup';
export declare const timeQuestionSchema: yup.ObjectSchema<{
    categories: ("emotions" | "impulses" | "other" | "dailyReview" | "afterSuccess" | "afterSetback")[] | undefined;
    prompt: string;
    type: "time";
    options: ({
        label?: string | undefined;
        followUps?: ({
            message?: string | undefined;
            type: "askAnotherQuestion";
            questionId: string;
        } | {
            message?: string | undefined;
            type: "showTour";
            steps: {
                message: string;
                elementRefName: string;
                title: string;
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
        setbackThreshold?: number | undefined;
        greaterThan?: number | undefined;
        lessThanOrEqualTo?: number | undefined;
        text: string;
        type: "numeric";
    } | {
        label?: string | undefined;
        followUps?: ({
            message?: string | undefined;
            type: "askAnotherQuestion";
            questionId: string;
        } | {
            message?: string | undefined;
            type: "showTour";
            steps: {
                message: string;
                elementRefName: string;
                title: string;
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
        text: string;
        type: "string";
    })[] | undefined;
    ordinals: {
        [x: string]: number;
    } | null | undefined;
    templateFor: "onboarding" | undefined;
    writeAnswerToProfileMemoryKey: string | undefined;
    followUps: ({
        message?: string | undefined;
        type: "askAnotherQuestion";
        questionId: string;
    } | {
        message?: string | undefined;
        type: "showTour";
        steps: {
            message: string;
            elementRefName: string;
            title: string;
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
}, yup.AnyObject, {
    categories: "";
    prompt: undefined;
    type: undefined;
    options: "";
    ordinals: undefined;
    templateFor: undefined;
    writeAnswerToProfileMemoryKey: undefined;
    followUps: "";
    createdAt: undefined;
    updatedAt: undefined;
    setbackThreshold: undefined;
}, "">;
export type TimeQuestionValue = yup.InferType<typeof timeQuestionSchema>;
