import { FakeTimestamp } from '../utils/FakeTimestamp';

export interface GameplanValueBase {
  uid: string;
  createdAt: FakeTimestamp;
  updatedAt: FakeTimestamp;
  tacticIds: Array<string>;
  suggestedTacticIds: Array<string>;
  title?: string;
  navigationTitle?: string;
  isTemplate?: boolean;
}

// A pattern gameplan is the set of tactics that we use in an impulse moment, or after a success or
// setback.
export type PatternGameplanValue = GameplanValueBase & {
  type: 'pattern';
  patternId: string;
  for: 'impulse' | 'success' | 'setback';
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
  | PatternGameplanValue
  | TimeGameplanValue
  | LocationGameplanValue
  | DebriefGameplanValue;
