import { FakeTimestamp } from '../utils/FakeTimestamp';
import { GameplanValue, LocationGameplanValue, TimeGameplanValue } from './gameplan';
import { TacticValue } from './tactic';
export interface RecommendationValueBase {
    uid: string;
    ordinal: number;
    title: string;
    explanation: string;
    gameplanExplanation?: string;
    templateForGameplansOfType?: GameplanValue['type'];
    recommenderUid: string;
    recommenderName: string;
    createdAt: FakeTimestamp;
    updatedAt: FakeTimestamp;
    appliedAt: FakeTimestamp | null;
    dismissedAt: FakeTimestamp | null;
    tacticIds: Array<string>;
    tacticsById: Record<string, TacticValue>;
    gameplanId?: string;
    selectAllByDefault?: boolean;
}
export type NewGameplanRecommendationValue = RecommendationValueBase & {
    gameplan: TimeGameplanValue | LocationGameplanValue;
};
export type ExistingGameplanRecommendationValue = RecommendationValueBase & {
    gameplanId?: string;
};
export type RecommendationValue = NewGameplanRecommendationValue | ExistingGameplanRecommendationValue;
