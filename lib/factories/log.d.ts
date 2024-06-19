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
    senderProfileId?: string | null | undefined;
    openAiChoiceResponse?: {} | undefined;
    date: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    type: "impulse";
    gptPayload: {
        role: NonNullable<"system" | "user" | "assistant" | undefined>;
        content: string;
    };
    issueName: string;
    parentIssueIds: string[];
}, "date" | "type" | "gptPayload" | "issueName" | "parentIssueIds" | ("createdAt" | "updatedAt" | "senderProfileId" | "openAiChoiceResponse")>;
