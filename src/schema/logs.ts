import * as Location from 'expo-location';
import { FakeTimestamp } from '../utils/FakeTimestamp';
import { Gameplan } from './gameplan';
import { PatternUsage, PatternValue } from './pattern';
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
  // Some tactics involve tracking steps (e.g. walking, running, etc.). As the bluetooth button
  // transmits this data to the app, we don't really want to do reconcilliation of the tactic on the
  // phone. Instead, we simply log the number of steps taken as a first-class property on the log
  // document, and then we can do reconcilliation on the server.
  steps?: number;

  // TODO: this shouldbe renamed to 'selectedTacticIds'
  tacticIds: Array<string>;

  // A gameplan is a set of tactics and suggestions that a user can follow to help them through an
  // impulse moment, or to help them prepare for a moment. Every log that has tactics has a
  // "gameplan".
  gameplan: { main: Gameplan } & Partial<
    Record<'success' | 'setback', Gameplan>
  >;

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

  tacticUsage?: Record<string, PatternUsage>;
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
  patternUsage: Record<string, PatternUsage>;
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

export type LogValue =
  | ImpulseLogValue
  | MotionLogValue
  | ButtonLogValue
  | LocationLogValue
  | TimeLogValue
  | DebriefLogValue;
