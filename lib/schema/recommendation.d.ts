import * as yup from 'yup';
import { WithTacticsById } from './tactic';
export declare const recommendationSchema: yup.ObjectSchema<{
    uid: string;
    ordinal: number;
    title: string;
    explanation: string;
    routineExplanation: string | null | undefined;
    recommenderUid: string;
    recommenderName: string;
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    appliedAt: yup.Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    dismissedAt: yup.Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    tacticIds: string[];
    tacticsById: any;
    property: NonNullable<"impulse" | "impulseDebrief" | "routine" | undefined>;
    ruleId: string | null | undefined;
    routine: yup.Maybe<{} | undefined>;
    patternIds: yup.Maybe<(string | undefined)[] | undefined>;
    defaultSelected: {} | null | undefined;
}, yup.AnyObject, {
    uid: undefined;
    ordinal: undefined;
    title: undefined;
    explanation: undefined;
    routineExplanation: undefined;
    recommenderUid: undefined;
    recommenderName: undefined;
    createdAt: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    updatedAt: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    appliedAt: undefined;
    dismissedAt: undefined;
    tacticIds: "";
    tacticsById: any;
    property: undefined;
    ruleId: undefined;
    routine: undefined;
    patternIds: "";
    defaultSelected: undefined;
}, "">;
export type RecommendationValue = WithTacticsById<yup.InferType<typeof recommendationSchema>>;
