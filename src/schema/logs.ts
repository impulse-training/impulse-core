import * as Location from 'expo-location';
import { Timestamp } from '../utils/Timestamp';

// Logs are records of either impulses (cravings or urges), or applied tactics (actions that we
// take)
export type Outcome = 'success' | 'setback' | 'indeterminate';

export interface BaseLogValue {
  uid: string;
  createdAt: Timestamp;
  isDisplayable: boolean;
  startTime: Timestamp;
  timezone: string;
  location: Partial<Location.LocationObjectCoords>;
  locationIsFetching: boolean;
  locationFormatted?: string;
  allTacticIds?: Array<string>;
  tacticIds?: Array<string>;
  tacticsSummary?: Record<string, string>;
  patternsSummary?: Record<string, string>;
  patternsUsageSummary?: Record<string, string>;
}

// Tactics logs are recorded when the user tracks tactics, standalone
export type TacticsLogValue = BaseLogValue & {
  type: 'tactics';
  reminderId?: string;
};

// Motion logs are recorded when the user wears the impulse button
export type MotionLogValue = BaseLogValue & {
  type: 'motion';
};

export type ButtonLogValue = BaseLogValue & {
  type: 'button';
  characteristics: Record<string, unknown>;
};

// Impulse logs are recorded when the user presses the impulse button
export type ImpulseLogValue = BaseLogValue & {
  type: 'impulse';
  pressCount?: number;
  outcome: Outcome;
  buttonPressSecondsSinceEpoch?: number;
  patternIds: Array<string>;
  debriefNotes?: string;
  debriefReminderSentAt?: Timestamp | null;
  debriefedAt?: Timestamp | null;
};

export type LogValue =
  | TacticsLogValue
  | ImpulseLogValue
  | MotionLogValue
  | ButtonLogValue;
