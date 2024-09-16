import * as yup from 'yup';
import { DocumentSnapshotLike } from '../../utils/firestore/DocumentSnapshotLike';
export declare const QUESTION_CATEGORIES: {
    readonly questionOfTheDay: {
        readonly label: "Question of the day";
        readonly order: -1;
        readonly hint: "Answer these questions at a scheduled time of day";
        readonly isVisible: () => boolean;
    };
    readonly debriefing: {
        readonly label: "Debriefing";
        readonly order: 0;
        readonly hint: "Answer these questions after an impulse moment, when it's time to reflect.";
        readonly isVisible: () => boolean;
    };
    readonly impulses: {
        readonly label: "Impulse moments";
        readonly order: 1;
        readonly hint: "Answer these questions when you have an impulse moment, which is the craving or urge.";
        readonly isVisible: () => boolean;
    };
    readonly afterSuccess: {
        readonly label: "After a success";
        readonly order: 2;
        readonly hint: "Ask questions after an impulse moment when you achieve your goal.";
        readonly isVisible: (questions: DocumentSnapshotLike<any>[]) => boolean;
    };
    readonly afterSetback: {
        readonly label: "After a setback";
        readonly order: 3;
        readonly hint: "Ask questions after an impulse moment when you don't achieve your goal.";
        readonly isVisible: (questions: DocumentSnapshotLike<any>[]) => boolean;
    };
    readonly dayReview: {
        readonly label: "Daily review";
        readonly order: 4;
        readonly hint: "Answer these questions at a scheduled time of day, to reflect on the day gone by.";
        readonly isVisible: () => boolean;
    };
};
export type QuestionCategory = keyof typeof QUESTION_CATEGORIES;
export declare function questionBaseSchema<T extends string>(type: T): yup.ObjectSchema<{
    isPublic: boolean | undefined;
    categories: ("dayReview" | "questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback")[] | undefined;
    prompt: string;
    type: yup.Defined<T>;
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
    ordinal: number | undefined;
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
}, "">;
