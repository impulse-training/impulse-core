import { FakeTimestamp } from '../utils/FakeTimestamp';
import { GameplanValue } from './gameplan';
import { RecommendationValue } from './recommendation';

export interface RecommendationRuleValue {
  recommendation: Omit<
    RecommendationValue,
    'uid' | 'ordinal' | 'createdAt' | 'updatedAt' | 'appliedAt' | 'dismissedAt'
  >;
  forIssueIds: Array<string>;
  forAllIssues: boolean;
  forType: GameplanValue['type'];
  issueNames?: Record<string, string>;
  issueNamesSummary?: string;
  recommendationSummary?: string;
  uid: string;
  ordinal: number;
  createdAt: FakeTimestamp;
  updatedAt: FakeTimestamp;
}
