import { TimestampLike } from '../utils/TimestampLike';
import { RecommendationValue } from './recommendation';
import { RoutineValue } from './routine';
export interface RecommendationRuleValue {
    recommendation: Omit<RecommendationValue, 'uid' | 'ordinal' | 'createdAt' | 'updatedAt' | 'appliedAt' | 'dismissedAt'>;
    forIssueIds: Array<string>;
    forType: RoutineValue['type'];
    issueNames?: Record<string, string>;
    issueNamesSummary?: string;
    recommendationSummary?: string;
    uid: string;
    ordinal: number;
    createdAt: TimestampLike;
    updatedAt: TimestampLike;
}
