import * as yup from 'yup';
import { WithTacticsById } from './tactic';
export declare const programSchema: yup.ObjectSchema<{
    title: string;
    forIssueIds: string[];
    issueNames: {
        [x: string]: string | undefined;
    } | null | undefined;
    issueNamesSummary: string | null | undefined;
    recommendationSummary: string | null | undefined;
    impulseStrategies: ({
        suggestedTacticIds?: string[] | undefined;
        prompt?: yup.Maybe<string | undefined>;
        type: "impulse";
        title: string;
        tacticIds: string[];
    } | {
        suggestedTacticIds?: string[] | undefined;
        prompt?: yup.Maybe<string | undefined>;
        type: "time";
        title: string;
        tacticIds: string[];
        weekdays: number[];
        hour: number;
        minute: number;
    } | {
        suggestedTacticIds?: string[] | undefined;
        prompt?: yup.Maybe<string | undefined>;
        type: "location";
        title: string;
        tacticIds: string[];
        locationId: string;
        mode: NonNullable<"enter" | "exit" | undefined>;
    })[] | undefined;
    scheduledStrategies: {
        suggestedTacticIds?: string[] | undefined;
        prompt?: yup.Maybe<string | undefined>;
        type: "time";
        title: string;
        tacticIds: string[];
        weekdays: number[];
        hour: number;
        minute: number;
    }[] | undefined;
    locationStrategies: {
        suggestedTacticIds?: string[] | undefined;
        prompt?: yup.Maybe<string | undefined>;
        type: "location";
        title: string;
        tacticIds: string[];
        locationId: string;
        mode: NonNullable<"enter" | "exit" | undefined>;
    }[] | undefined;
    tacticsById: any;
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
}, yup.AnyObject, {
    title: undefined;
    forIssueIds: "";
    issueNames: undefined;
    issueNamesSummary: undefined;
    recommendationSummary: undefined;
    impulseStrategies: undefined;
    scheduledStrategies: undefined;
    locationStrategies: undefined;
    tacticsById: any;
    createdAt: undefined;
    updatedAt: undefined;
}, "">;
export type ProgramValue = WithTacticsById<yup.InferType<typeof programSchema>>;
