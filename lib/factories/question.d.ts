import * as Factory from 'factory.ts';
import { TimestampLike } from '../utils/firestore/TimestampLike';
export declare const makeQuestionTimeTacticFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
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
    setbackThreshold?: number | undefined;
    options?: ({
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
        label?: string | undefined;
        setbackThreshold?: number | undefined;
        greaterThan?: number | undefined;
        lessThanOrEqualTo?: number | undefined;
        text: string;
        type: "numeric";
        color: string;
        textColor: string;
    } | {
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
        label?: string | undefined;
        text: string;
        type: "string";
        color: string;
        textColor: string;
    })[] | undefined;
    templateFor?: "onboarding" | undefined;
    writeAnswerToMemoryKey?: string | undefined;
    type: import("..").QuestionKeyType;
    prompt: string;
    ordinal: number;
}, "type" | "prompt" | "ordinal" | ("createdAt" | "updatedAt" | "setbackThreshold" | "options" | "templateFor" | "writeAnswerToMemoryKey")>;
