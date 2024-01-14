import { FakeTimestamp } from '../utils/FakeTimestamp';
import { TacticValue } from './tactic';
export type Gameplan = {
    tacticIds: Array<string>;
    suggestedTacticIds: Array<string>;
    tacticsById: Record<string, TacticValue>;
};
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
export type ImpulseGameplanValue = GameplanValueBase & {
    type: 'impulse' | 'success' | 'setback';
    patternId: string;
};
type SchedulableGameplanValue = GameplanValueBase & {
    weekdays: Array<number>;
    hour: number;
    minute: number;
    timezone: string;
    scheduledNotificationIds?: Array<string>;
};
export type TimeGameplanValue = SchedulableGameplanValue & {
    type: 'time';
};
export type LocationGameplanValue = GameplanValueBase & {
    type: 'location';
    locationId?: string;
    mode: 'enter' | 'exit';
};
export type GameplanValue = ImpulseGameplanValue | TimeGameplanValue | LocationGameplanValue;
export {};
