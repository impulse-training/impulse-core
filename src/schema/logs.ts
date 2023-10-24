import * as Location from 'expo-location';
import { FakeTimestamp } from '../utils/FakeTimestamp';
import { Gameplan } from './gameplan';
import { PatternValue, Usage } from './pattern';
import { ProfileValue } from './profile';
import { TacticValue } from './tactic';

// Logs are records of either impulses (cravings or urges), or applied tactics (actions that we
// take)
export type Outcome = 'success' | 'setback' | 'indeterminate';

export interface BaseLogValue {
  uid: string;
  createdAt: FakeTimestamp;
  updatedAt: FakeTimestamp;
  startTime: FakeTimestamp;
  timezone: string;
  location: Partial<Location.LocationObjectCoords>;
  locationIsFetching: boolean;
  locationFormatted?: string;
  allTacticIds: Array<string>;
  commentCount?: number;

  // TODO: this shouldbe renamed to 'selectedTacticIds'
  tacticIds: Array<string>;

  // A gameplan is a set of tactics and suggestions that a user can follow to help them through an
  // impulse moment, or to help them prepare for a moment. Every log that has tactics has a
  // "gameplan".
  gameplan: Gameplan;

  // Deprecated - we used to store tactic ids directly -------------------------
  tactics: Record<string, TacticValue>;
  suggestedTacticIds?: Array<string>;
  // ---------------------------------------------------------------------------

  isUpdatingSuggestions?: boolean;

  // This contains a map of suggestions of tactics, and the id of the suggester
  supportGroupSuggestedTacticIds?: {
    impulse: Record<string, string>;
    success: Record<string, string>;
    setback: Record<string, string>;
    all: Record<string, string>;
  };

  tacticUsage?: Record<string, Usage>;
  tacticData?: Record<string, unknown>;

  sharedWithSupportGroupIds?: Array<string>;
}

// Impulse logs are recorded when the user presses the impulse button
export type ImpulseLogValue = BaseLogValue & {
  type: 'impulse';
  // If set, the activeImpulseId property is set on the user's profile document after create
  setAsActiveImpulse?: boolean;
  pressCount?: number;
  outcome: Outcome;
  isDisplayable: true;
  buttonPressSecondsSinceEpoch?: number;

  // This object contains the user's full gameplan (tactics and suggestions for all patterns)
  gameplans: ProfileValue['gameplans'];

  patterns: Record<string, PatternValue>;
  patternId: string;
  // Deprecated ------------------------------------------------------------------------------------
  patternIds: Array<string>;
  // -----------------------------------------------------------------------------------------------
  patternUsage: Record<string, Usage>;
  debriefNotes?: string;
  debriefReminderSentAt?: FakeTimestamp | null;
  debriefedAt?: FakeTimestamp | null;
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
  patternUsage: Record<string, Usage>;

  // While a little obscure, here we store a map of the pattern usage of all impulse log entries for
  // the day. When this is written, we can sum up the pattern usage to write to this record.
  patternUsageEntries: Record<string, Record<string, Usage>>;
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

export type LogValue =
  | ImpulseLogValue
  | MotionLogValue
  | ButtonLogValue
  | LocationLogValue
  | TimeLogValue
  | DebriefLogValue;
