import * as yup from 'yup';
import { WithTacticsById } from './tactic';
export type RecommendationBaseValue = yup.InferType<typeof recommendationBaseSchema>;
export declare const recommendationBaseSchema: yup.ObjectSchema<{
    title: string;
    explanation: string | null | undefined;
    recommenderUid: string;
    recommenderName: string;
    tacticIds: string[];
    tacticsById: any;
}, yup.AnyObject, {
    title: undefined;
    explanation: undefined;
    recommenderUid: undefined;
    recommenderName: undefined;
    tacticIds: "";
    tacticsById: any;
}, "">;
export declare const timeScheduleSchema: yup.ObjectSchema<{
    hour: number;
    minute: number;
    weekdays: string[];
}, yup.AnyObject, {
    hour: undefined;
    minute: undefined;
    weekdays: "";
}, "">;
export type ImpulseRecommendationValue = yup.InferType<typeof impulseRecommendationSchema>;
declare const impulseRecommendationSchema: yup.ObjectSchema<{
    title: string;
    explanation: string | null | undefined;
    recommenderUid: string;
    recommenderName: string;
    tacticIds: string[];
    tacticsById: any;
    ordinal: number;
    uid: string;
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
    ruleId: string | null | undefined;
    type: "impulse";
    patternIds: string[];
}, yup.AnyObject, {
    title: undefined;
    explanation: undefined;
    recommenderUid: undefined;
    recommenderName: undefined;
    tacticIds: "";
    tacticsById: any;
    ordinal: undefined;
    uid: undefined;
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
    ruleId: undefined;
    type: undefined;
    patternIds: "";
}, "">;
export type ImpulseDebriefRecommendationValue = yup.InferType<typeof impulseDebriefRecommendationSchema>;
declare const impulseDebriefRecommendationSchema: yup.ObjectSchema<{
    title: string;
    explanation: string | null | undefined;
    recommenderUid: string;
    recommenderName: string;
    tacticIds: string[];
    tacticsById: any;
    ordinal: number;
    uid: string;
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
    ruleId: string | null | undefined;
    type: "impulseDebrief";
    patternIds: string[];
}, yup.AnyObject, {
    title: undefined;
    explanation: undefined;
    recommenderUid: undefined;
    recommenderName: undefined;
    tacticIds: "";
    tacticsById: any;
    ordinal: undefined;
    uid: undefined;
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
    ruleId: undefined;
    type: undefined;
    patternIds: "";
}, "">;
export type TimeRecommendationValue = yup.InferType<typeof timeRecommendationSchema>;
declare const timeRecommendationSchema: yup.ObjectSchema<{
    title: string;
    explanation: string | null | undefined;
    recommenderUid: string;
    recommenderName: string;
    tacticIds: string[];
    tacticsById: any;
    ordinal: number;
    uid: string;
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
    ruleId: string | null | undefined;
    type: "time";
    time: {
        weekdays: string[];
        hour: number;
        minute: number;
    };
}, yup.AnyObject, {
    title: undefined;
    explanation: undefined;
    recommenderUid: undefined;
    recommenderName: undefined;
    tacticIds: "";
    tacticsById: any;
    ordinal: undefined;
    uid: undefined;
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
    ruleId: undefined;
    type: undefined;
    time: {
        hour: undefined;
        minute: undefined;
        weekdays: "";
    };
}, "">;
export type LocationRecommendationValue = yup.InferType<typeof locationRecommendationSchema>;
declare const locationRecommendationSchema: yup.ObjectSchema<{
    title: string;
    explanation: string | null | undefined;
    recommenderUid: string;
    recommenderName: string;
    tacticIds: string[];
    tacticsById: any;
    ordinal: number;
    uid: string;
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
    ruleId: string | null | undefined;
    type: "location";
    locationKey: string;
}, yup.AnyObject, {
    title: undefined;
    explanation: undefined;
    recommenderUid: undefined;
    recommenderName: undefined;
    tacticIds: "";
    tacticsById: any;
    ordinal: undefined;
    uid: undefined;
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
    ruleId: undefined;
    type: undefined;
    locationKey: undefined;
}, "">;
export declare const recommendationSchema: yup.Lazy<{
    type: NonNullable<"impulse" | "impulseDebrief" | "time" | "location" | undefined>;
}, yup.AnyObject, any>;
export type RecommendationValue = WithTacticsById<ImpulseRecommendationValue | ImpulseDebriefRecommendationValue | TimeRecommendationValue | LocationRecommendationValue>;
export {};
