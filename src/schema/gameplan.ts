import { FakeTimestamp } from '../utils/FakeTimestamp';
import { TacticValue } from './tactic';

// We add the suffix "Value" to all of our document types, but here we define the concept of a
// "Gameplan", which refers to the core kernel of tactic data (things that a user can do in an
// impulse moment, or ahead of time). // This Gameplan is mixed into the actual gameplan document,
// but is also added to other documents, including the profile document, and the log document.
export type Gameplan = {
  // The user's chosen tactics
  tacticIds: Array<string>;
  // Some pre-prepared suggested tactics that are shown to the user
  suggestedTacticIds: Array<string>;
  // Finally, we prefetch the actual tactic data so it's available immediately
  tacticsById: Record<string, TacticValue>;
};

// Now, we define a base gameplan type, which is extended for pattern, tactic, location and impulse
// gameplans, etc.
export type GameplanValueBase = Gameplan & {
  uid: string;
  createdAt: FakeTimestamp;
  updatedAt: FakeTimestamp;
  title?: string;
  navigationTitle?: string;
  isTemplate?: boolean;
  tacticsUpdatedAt?: FakeTimestamp;
  timezone?: string;
  patternName?: string;
  issueId?: string;
  parentIssueIds?: Array<string>;
};

// A pattern gameplan is the set of tactics that we use in an impulse moment
export type ImpulseGameplanValue = GameplanValueBase & {
  // TODO: this would be more appropriate as 'impulse'
  type: 'impulse' | 'success' | 'setback';
  patternId: string;
};

// A time gameplan is a set of tactics that we do at a scheduled time in the week
type SchedulableGameplanValue = GameplanValueBase & {
  weekdays: Array<number>; // 1 = sun, 2 = mon, 3 = tue, etc
  hour: number;
  minute: number;
  timezone: string;
  scheduledNotificationIds?: Array<string>;
};

export type TimeGameplanValue = SchedulableGameplanValue & {
  type: 'time';
};

export type DebriefGameplanValue = SchedulableGameplanValue & {
  type: 'debrief';
};

export type LocationGameplanValue = GameplanValueBase & {
  type: 'location';
  // A location gameplan without a location id is not "valid", but it still can exist, as this is
  // the state that we have immediately after creating one, but before choosing a location.
  locationId?: string;
  mode: 'enter' | 'exit';
};

export type GameplanValue =
  | ImpulseGameplanValue
  | TimeGameplanValue
  | DebriefGameplanValue
  | LocationGameplanValue;
