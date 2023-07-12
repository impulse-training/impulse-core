import * as Location from 'expo-location';
import { FakeTimestamp } from '../utils/FakeTimestamp';
import { Gameplan } from './gameplan';
import { PatternUsage, PatternValue } from './pattern';
import { ProfileValue } from './profile';
import { Recording } from './recording';
import { TacticValue } from './tactic';
import { TagValue } from './tag';

// Logs are records of either impulses (cravings or urges), or applied tactics (actions that we
// take)
export type Outcome = 'success' | 'setback' | 'indeterminate';

export interface BaseLogValue {
  uid: string;
  createdAt: FakeTimestamp;
  updatedAt: FakeTimestamp;
  startTime: FakeTimestamp;
  timezone: string;
  tagsByTacticId: Record<string, Record<string, TagValue>>;
  location: Partial<Location.LocationObjectCoords>;
  locationIsFetching: boolean;
  locationFormatted?: string;
  allTacticIds: Array<string>;
  tacticIds: Array<string>;

  // A gameplan is a set of tactics and suggestions that a user can follow to help them through an
  // impulse moment, or to help them prepare for a moment. Every log that has tactics has a
  // "gameplan".
  gameplan: Gameplan;

  // Deprecated - we used to store tactic ids directly -------------------------
  tactics: Record<string, TacticValue>;
  suggestedTacticIds?: Array<string>;
  // ---------------------------------------------------------------------------

  // This contains a map of suggestions of tactics, and the id of the suggester
  supportGroupSuggestedTacticIds?: {
    impulse: Record<string, string>;
    success: Record<string, string>;
    setback: Record<string, string>;
    all: Record<string, string>;
  };

  tacticResponses: Record<string, string>;
  tacticRecordings?: Record<string, Recording>;
  tags: Record<string, TagValue>;
  tagIds: Array<string>;
  tagValues: Record<string, number>;
  sharedWithSupportGroupIds?: Array<string>;
}

// Tactics logs are recorded when the user tracks tactics, standalone
export type TacticsLogValue = BaseLogValue & {
  isDisplayable: true;
  type: 'tactics';
};

// Location logs are recorded when the user enters or leaves a location, and is prompted to run
// through tactics
export type LocationLogValue = BaseLogValue & {
  type: 'location';
  locationId: string;
  isDisplayable: true;
  locationName: string;
  locationMode: 'enter' | 'exit';
};

// Tactics logs are created for a user's scheduled reminders are triggered
export type TimeLogValue = BaseLogValue & {
  type: 'time';
  isDisplayable: true;

  // TODO: deprecate / remove?
  gameplanId: string;
};

export type DebriefLogValue = BaseLogValue & {
  type: 'debrief';
  outcome: Outcome;
  patterns: Record<string, PatternValue>;
  isDisplayable: true;
  gameplanId: string;
  patternIds: Array<string>;
  patternUsage: Record<string, PatternUsage>;

  // While a little obscure, here we store a map of the pattern usage of all impulse log entries for
  // the day. When this is written, we can sum up the pattern usage to write to this record.
  patternUsageEntries: Record<string, Record<string, PatternUsage>>;
};

// Motion logs are recorded when the user wears the impulse button
export type MotionLogValue = BaseLogValue & {
  type: 'motion';
  isDisplayable: false;
};

export type ButtonLogValue = BaseLogValue & {
  type: 'button';
  isDisplayable: false;
  isDeviceConnected: boolean;
  characteristics: Record<string, unknown>;
};

// Impulse logs are recorded when the user presses the impulse button
export type ImpulseLogValue = BaseLogValue & {
  type: 'impulse';
  pressCount?: number;
  outcome: Outcome;
  isDisplayable: true;
  buttonPressSecondsSinceEpoch?: number;

  // This object contains the user's full gameplan (tactics and suggestions for all patterns)
  gameplans: ProfileValue['gameplans'];

  patterns: Record<string, PatternValue>;
  patternId: string;
  patternIds: Array<string>;
  patternUsage: Record<string, PatternUsage>;
  debriefNotes?: string;
  debriefReminderSentAt?: FakeTimestamp | null;
  debriefedAt?: FakeTimestamp | null;
};

export type LogValue =
  | TacticsLogValue
  | ImpulseLogValue
  | MotionLogValue
  | ButtonLogValue
  | LocationLogValue
  | TimeLogValue
  | DebriefLogValue;
