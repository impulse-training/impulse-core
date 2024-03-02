import * as yup from 'yup';
export declare const recommendationRuleBaseSchema: yup.ObjectSchema<{
    recommendation: {
        tacticsById?: any;
        explanation?: string | null | undefined;
        title: string;
        tacticIds: string[];
        recommenderUid: string;
        recommenderName: string;
    };
    forIssueIds: string[];
    issueNames: {
        [x: string]: string | undefined;
    } | null | undefined;
    issueNamesSummary: string | null | undefined;
    recommendationSummary: string | null | undefined;
    uid: string;
    ordinal: number;
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
}, yup.AnyObject, {
    recommendation: {
        title: undefined;
        explanation: undefined;
        recommenderUid: undefined;
        recommenderName: undefined;
        tacticIds: "";
        tacticsById: any;
    };
    forIssueIds: "";
    issueNames: undefined;
    issueNamesSummary: undefined;
    recommendationSummary: undefined;
    uid: undefined;
    ordinal: undefined;
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
}, "">;
export type ImpulseRecommendationRuleValue = yup.InferType<typeof impulseRecommendationRuleSchema>;
export declare const impulseRecommendationRuleSchema: yup.ObjectSchema<{
    recommendation: {
        tacticsById?: any;
        explanation?: string | null | undefined;
        title: string;
        tacticIds: string[];
        recommenderUid: string;
        recommenderName: string;
    };
    forIssueIds: string[];
    issueNames: {
        [x: string]: string | undefined;
    } | null | undefined;
    issueNamesSummary: string | null | undefined;
    recommendationSummary: string | null | undefined;
    uid: string;
    ordinal: number;
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
    type: "impulse";
}, yup.AnyObject, {
    recommendation: {
        title: undefined;
        explanation: undefined;
        recommenderUid: undefined;
        recommenderName: undefined;
        tacticIds: "";
        tacticsById: any;
    };
    forIssueIds: "";
    issueNames: undefined;
    issueNamesSummary: undefined;
    recommendationSummary: undefined;
    uid: undefined;
    ordinal: undefined;
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
    type: undefined;
}, "">;
export type ImpulseDebriefRecommendationRuleValue = yup.InferType<typeof impulseDebriefRecommendationRuleSchema>;
export declare const impulseDebriefRecommendationRuleSchema: yup.ObjectSchema<{
    recommendation: {
        tacticsById?: any;
        explanation?: string | null | undefined;
        title: string;
        tacticIds: string[];
        recommenderUid: string;
        recommenderName: string;
    };
    forIssueIds: string[];
    issueNames: {
        [x: string]: string | undefined;
    } | null | undefined;
    issueNamesSummary: string | null | undefined;
    recommendationSummary: string | null | undefined;
    uid: string;
    ordinal: number;
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
    type: "impulseDebrief";
}, yup.AnyObject, {
    recommendation: {
        title: undefined;
        explanation: undefined;
        recommenderUid: undefined;
        recommenderName: undefined;
        tacticIds: "";
        tacticsById: any;
    };
    forIssueIds: "";
    issueNames: undefined;
    issueNamesSummary: undefined;
    recommendationSummary: undefined;
    uid: undefined;
    ordinal: undefined;
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
    type: undefined;
}, "">;
export type TimeRecommendationRuleValue = yup.InferType<typeof timeRecommendationRuleSchema>;
export declare const timeRecommendationRuleSchema: yup.ObjectSchema<{
    recommendation: {
        tacticsById?: any;
        explanation?: string | null | undefined;
        title: string;
        tacticIds: string[];
        recommenderUid: string;
        recommenderName: string;
    };
    forIssueIds: string[];
    issueNames: {
        [x: string]: string | undefined;
    } | null | undefined;
    issueNamesSummary: string | null | undefined;
    recommendationSummary: string | null | undefined;
    uid: string;
    ordinal: number;
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
    type: "time";
    schedule: {
        weekdays: string[];
        hour: number;
        minute: number;
    };
}, yup.AnyObject, {
    recommendation: {
        title: undefined;
        explanation: undefined;
        recommenderUid: undefined;
        recommenderName: undefined;
        tacticIds: "";
        tacticsById: any;
    };
    forIssueIds: "";
    issueNames: undefined;
    issueNamesSummary: undefined;
    recommendationSummary: undefined;
    uid: undefined;
    ordinal: undefined;
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
    type: undefined;
    schedule: {
        hour: undefined;
        minute: undefined;
        weekdays: "";
    };
}, "">;
export type LocationRecommendationRuleValue = yup.InferType<typeof locationRecommendationRuleSchema>;
export declare const locationRecommendationRuleSchema: yup.ObjectSchema<{
    recommendation: {
        tacticsById?: any;
        explanation?: string | null | undefined;
        title: string;
        tacticIds: string[];
        recommenderUid: string;
        recommenderName: string;
    };
    forIssueIds: string[];
    issueNames: {
        [x: string]: string | undefined;
    } | null | undefined;
    issueNamesSummary: string | null | undefined;
    recommendationSummary: string | null | undefined;
    uid: string;
    ordinal: number;
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
    type: "location";
    locationKey: string;
}, yup.AnyObject, {
    recommendation: {
        title: undefined;
        explanation: undefined;
        recommenderUid: undefined;
        recommenderName: undefined;
        tacticIds: "";
        tacticsById: any;
    };
    forIssueIds: "";
    issueNames: undefined;
    issueNamesSummary: undefined;
    recommendationSummary: undefined;
    uid: undefined;
    ordinal: undefined;
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
    type: undefined;
    locationKey: undefined;
}, "">;
export declare const recommendationRuleSchema: yup.Lazy<{
    type: NonNullable<"impulse" | "impulseDebrief" | "time" | "location" | undefined>;
}, yup.AnyObject, any>;
export type RecommendationRuleValue = ImpulseRecommendationRuleValue | ImpulseDebriefRecommendationRuleValue | TimeRecommendationRuleValue | LocationRecommendationRuleValue;
