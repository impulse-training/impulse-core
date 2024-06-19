import * as Factory from 'factory.ts';
import { TimestampLike } from '../utils/firestore/TimestampLike';
export declare const makeImpulseLogFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
    createdAt?: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt?: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    profileId: string;
    date: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    type: "impulse";
    systemMessage: string;
    issueName: string;
    parentIssueIds: string[];
}, "profileId" | "date" | "type" | "systemMessage" | "issueName" | "parentIssueIds" | ("createdAt" | "updatedAt")>;
