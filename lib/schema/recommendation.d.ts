import { TimestampLike } from '../utils/TimestampLike';
import { DayDebriefGameplanValue, LocationGameplanValue, TimeGameplanValue } from './gameplan';
import { TacticValue } from './tactic';
export interface RecommendationValueBase {
    uid: string;
    ordinal: number;
    title: string;
    explanation: string;
    gameplanExplanation?: string;
    recommenderUid: string;
    recommenderName: string;
    createdAt: TimestampLike;
    updatedAt: TimestampLike;
    appliedAt: TimestampLike | null;
    dismissedAt: TimestampLike | null;
    tacticIds: Array<string>;
    tacticsById: Record<string, TacticValue>;
    ruleId?: string;
    gameplanIds?: Array<string>;
    defaultSelected?: 'all' | 'first' | 'none';
}
export type NewGameplanRecommendationValue = RecommendationValueBase & {
    gameplan: TimeGameplanValue | LocationGameplanValue | DayDebriefGameplanValue;
};
export type ExistingGameplanRecommendationValue = RecommendationValueBase & {
    gameplanIds?: Array<string>;
};
export type RecommendationValue = NewGameplanRecommendationValue | ExistingGameplanRecommendationValue;
