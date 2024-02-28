import * as yup from 'yup';
import { RecommendationValue } from './recommendation';
import { WithTacticsById } from './tactic';
export declare const recommendationRuleSchema: yup.ObjectSchema<{
    recommendation: {
        [x: string]: unknown;
        [x: number]: unknown;
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
        [x: string]: undefined;
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
type RecommendationRuleValueBase = yup.InferType<typeof recommendationRuleSchema>;
export type RecommendationRuleValue = Omit<RecommendationRuleValueBase, 'recommendation'> & {
    recommendation: WithTacticsById<Omit<RecommendationValue, 'uid' | 'ordinal' | 'createdAt' | 'updatedAt' | 'appliedAt' | 'dismissedAt'>>;
};
export {};
