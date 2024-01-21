import { FakeTimestamp } from '../utils/FakeTimestamp';
import { DebriefGameplanValue, LocationGameplanValue, TimeGameplanValue } from './gameplan';
import { TacticValue } from './tactic';
export interface RecommendationValueBase {
    uid: string;
    ordinal: number;
    title: string;
    explanation: string;
    gameplanExplanation?: string;
    recommenderUid: string;
    recommenderName: string;
    createdAt: FakeTimestamp;
    updatedAt: FakeTimestamp;
    appliedAt: FakeTimestamp | null;
    dismissedAt: FakeTimestamp | null;
    tacticIds: Array<string>;
    tacticsById: Record<string, TacticValue>;
    ruleId?: string;
    gameplanIds?: Array<string>;
    defaultSelected?: 'all' | 'first' | 'none';
}
export type NewGameplanRecommendationValue = RecommendationValueBase & {
    gameplan: TimeGameplanValue | LocationGameplanValue | DebriefGameplanValue;
};
export type ExistingGameplanRecommendationValue = RecommendationValueBase & {
    gameplanIds?: Array<string>;
};
export type RecommendationValue = NewGameplanRecommendationValue | ExistingGameplanRecommendationValue;
