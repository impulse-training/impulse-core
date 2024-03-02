import * as Factory from 'factory.ts';
import { TimestampLike } from '../utils/TimestampLike';
export declare const makeImpulseRecommendationFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
    tacticsById?: any;
    explanation?: string | null | undefined;
    appliedAt?: import("yup").Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    dismissedAt?: import("yup").Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    ruleId?: string | null | undefined;
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
    uid: string;
    ordinal: number;
    title: string;
    type: "impulse";
    tacticIds: any[];
    recommenderUid: string;
    recommenderName: string;
    patternIds: any[];
}, "createdAt" | "updatedAt" | "uid" | "ordinal" | "title" | "type" | "tacticIds" | "recommenderUid" | "recommenderName" | "patternIds" | ("tacticsById" | "explanation" | "appliedAt" | "dismissedAt" | "ruleId")>;
export declare const makeImpulseDebriefRecommendationFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
    tacticsById?: any;
    explanation?: string | null | undefined;
    appliedAt?: import("yup").Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    dismissedAt?: import("yup").Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    ruleId?: string | null | undefined;
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
    uid: string;
    ordinal: number;
    title: string;
    type: "impulseDebrief";
    tacticIds: any[];
    recommenderUid: string;
    recommenderName: string;
    patternIds: any[];
}, "createdAt" | "updatedAt" | "uid" | "ordinal" | "title" | "type" | "tacticIds" | "recommenderUid" | "recommenderName" | "patternIds" | ("tacticsById" | "explanation" | "appliedAt" | "dismissedAt" | "ruleId")>;
export declare const makeTimeRecommendationFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
    tacticsById?: any;
    explanation?: string | null | undefined;
    appliedAt?: import("yup").Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    dismissedAt?: import("yup").Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    ruleId?: string | null | undefined;
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
    uid: string;
    ordinal: number;
    title: string;
    type: "time";
    tacticIds: any[];
    time: {
        weekdays: any[];
        hour: number;
        minute: number;
    };
    recommenderUid: string;
    recommenderName: string;
}, "createdAt" | "updatedAt" | "uid" | "ordinal" | "title" | "type" | "tacticIds" | "time" | "recommenderUid" | "recommenderName" | ("tacticsById" | "explanation" | "appliedAt" | "dismissedAt" | "ruleId")>;
export declare const makeLocationRecommendationFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
    tacticsById?: any;
    explanation?: string | null | undefined;
    appliedAt?: import("yup").Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    dismissedAt?: import("yup").Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    ruleId?: string | null | undefined;
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
    uid: string;
    ordinal: number;
    title: string;
    type: "location";
    tacticIds: any[];
    locationKey: string;
    recommenderUid: string;
    recommenderName: string;
}, "createdAt" | "updatedAt" | "uid" | "ordinal" | "title" | "type" | "tacticIds" | "locationKey" | "recommenderUid" | "recommenderName" | ("tacticsById" | "explanation" | "appliedAt" | "dismissedAt" | "ruleId")>;
