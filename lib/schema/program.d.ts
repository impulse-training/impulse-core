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
    impulseStrategy: {
        suggestedTacticIds?: string[] | undefined;
        tacticIds: string[];
    };
    timeStrategies: {
        [x: string]: {
            suggestedTacticIds?: string[] | undefined;
            title: string;
            tacticIds: string[];
            weekdays: number[];
            hour: number;
            minute: number;
        };
    } | null | undefined;
    locationStrategies: {
        [x: string]: {
            suggestedTacticIds?: string[] | undefined;
            title: string;
            tacticIds: string[];
            locationId: string;
            mode: NonNullable<"enter" | "exit" | undefined>;
        };
    } | null | undefined;
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
    impulseStrategy: {
        tacticIds: "";
        suggestedTacticIds: "";
    };
    timeStrategies: undefined;
    locationStrategies: undefined;
    tacticsById: any;
    createdAt: undefined;
    updatedAt: undefined;
}, "">;
export type ProgramValue = WithTacticsById<yup.InferType<typeof programSchema>>;
