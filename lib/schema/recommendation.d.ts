import { FakeTimestamp } from '../utils/FakeTimestamp';
import { LocationGameplanValue, TimeGameplanValue } from './gameplan';
import { TacticValue } from './tactic';
export interface RecommendationValueBase {
    uid: string;
    recommenderUid: string;
    recommenderName: string;
    createdAt: FakeTimestamp;
    updatedAt: FakeTimestamp;
    dismissedAt?: FakeTimestamp;
    explanation: string;
    tacticIds: Array<string>;
    tacticsById: Record<string, TacticValue>;
}
export type NewGameplanRecommendationValue = RecommendationValueBase & {
    gameplan: TimeGameplanValue | LocationGameplanValue;
};
export type ExistingGameplanRecommendationValue = RecommendationValueBase & {
    gameplanId: string;
};
export type RecommendationValue = NewGameplanRecommendationValue | ExistingGameplanRecommendationValue;
