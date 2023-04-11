import * as Location from 'expo-location';
import { Timestamp } from '../utils/Timestamp';
import { PatternValue } from './pattern';
import { TacticValue } from './tactic';
import { TagValue } from './tag';

// Logs are records of either impulses (cravings or urges), or applied tactics (actions that we
// take)
export type Outcome = 'success' | 'setback' | 'indeterminate';

export interface BaseLogValue {
  uid: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  startTime: Timestamp;
  timezone: string;
  tactics: Record<string, TacticValue>;
  tagsByTacticId: Record<string, Record<string, TagValue>>;
  location: Partial<Location.LocationObjectCoords>;
  locationIsFetching: boolean;
  locationFormatted?: string;
  tacticIds: Array<string>;
  tacticResponses: Record<string, string>;
  tagIds: Array<string>;
  tagValues: Record<string, number>;
}

// Tactics logs are recorded when the user tracks tactics, standalone
export type TacticsLogValue = BaseLogValue & {
  type: 'tactics';
};

// Location logs are recorded when the user enters or leaves a location, and is prompted to run
// through tactics
export type LocationLogValue = BaseLogValue & {
  type: 'location';
  locationId: string;
};

// Tactics logs are created for a user's scheduled reminders are triggered
export type TimeLogValue = BaseLogValue & {
  type: 'time';
  reminderId: string;
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
  patterns: Record<string, PatternValue>;
  patternIds: Array<string>;
  patternUsage: Record<string, PatternUsage>;
  debriefNotes?: string;
  debriefReminderSentAt?: Timestamp | null;
  debriefedAt?: Timestamp | null;
};

export interface PatternUsage {
  value: number;
  transformedValue: number;
  formattedValue: string;
}

export type LogValue =
  | TacticsLogValue
  | ImpulseLogValue
  | MotionLogValue
  | ButtonLogValue
  | LocationLogValue
  | TimeLogValue;
