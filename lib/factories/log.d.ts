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
    text?: string | undefined;
    senderProfileId?: string | null | undefined;
    views?: {
        openTime: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        };
        closeTime: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        };
    }[] | undefined;
    agent?: import("..").AgentName | undefined;
    gptPayload?: {
        role: NonNullable<"system" | "user" | "assistant" | undefined>;
        content: string;
    }[] | undefined;
    openAiChoiceResponse?: {} | undefined;
    issueName: string;
    parentIssueIds: string[];
    date: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    type: "impulse";
}, "issueName" | "parentIssueIds" | "date" | "type" | ("createdAt" | "updatedAt" | "text" | "senderProfileId" | "views" | "agent" | "gptPayload" | "openAiChoiceResponse")>;
