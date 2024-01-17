import { FakeTimestamp } from '../utils/FakeTimestamp';
import { LocationGameplanValue, TimeGameplanValue } from './gameplan';
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
  // This property is actually a hack to work around an issue with factory type protection with the
  // union type
  gameplanIds?: Array<string>;
  defaultSelected?: 'all' | 'first' | 'none'; // undefined means 'none'
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
  // This field is required, but omitted for template recommendations
  gameplanIds?: Array<string>;
};

export type RecommendationValue =
  | NewGameplanRecommendationValue
  | ExistingGameplanRecommendationValue;
