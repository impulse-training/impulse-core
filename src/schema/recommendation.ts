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
  explanationMarkdown: string;
  tacticIds: Array<string>;
  tacticsById: Record<string, TacticValue>;
}

// These recommendations are to create a new gameplan that includes tactics. For example, "Reminder
// to wear your impulse button every morning at 8am". In this case the gameplan property would
// specify a time gameplan for every day at 8am, and the tactics fields would specify the reminder
// to wear the impulse button.
export type NewGameplanRecommendationValue = RecommendationValueBase & {
  gameplan: TimeGameplanValue | LocationGameplanValue;
};

// These recommendations are for additional tactics to add to an existing gameplan.
export type ExistingGameplanRecommendationValue = RecommendationValueBase & {
  gameplanId: string;
};

export type RecommendationValue =
  | NewGameplanRecommendationValue
  | ExistingGameplanRecommendationValue;
