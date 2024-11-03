import * as yup from 'yup';
export declare const multipleChoiceQuestionSchema: yup.ObjectSchema<{
    isPublic: boolean | undefined;
    categories: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
    prompt: string;
    type: "multipleChoice";
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
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    canAddNewOptions: NonNullable<boolean | undefined>;
}, yup.AnyObject, {
    isPublic: undefined;
    categories: "";
    prompt: undefined;
    type: undefined;
    options: "";
    ordinal: undefined;
    ordinals: undefined;
    templateFor: undefined;
    writeAnswerToProfileMemoryKey: undefined;
    recommendedForIssueIds: "";
    followUps: "";
    createdAt: undefined;
    updatedAt: undefined;
    canAddNewOptions: false;
}, "">;
export type MultipleChoiceQuestionValue = yup.InferType<typeof multipleChoiceQuestionSchema>;
