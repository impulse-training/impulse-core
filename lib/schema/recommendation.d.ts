import { TimestampLike } from '../utils/TimestampLike';
import { DayDebriefRoutineValue, LocationRoutineValue, TimeRoutineValue } from './routine';
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
export type NewRoutineRecommendationValue = RecommendationValueBase & {
    gameplan: TimeRoutineValue | LocationRoutineValue | DayDebriefRoutineValue;
};
export type ExistingRoutineRecommendationValue = RecommendationValueBase & {
    gameplanIds?: Array<string>;
};
export type RecommendationValue = NewRoutineRecommendationValue | ExistingRoutineRecommendationValue;
