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
export type PatternGameplanValue = GameplanValueBase & {
    type: 'pattern';
    patternId: string;
    for: 'impulse' | 'success' | 'setback';
};
export type TimeGameplanValue = GameplanValueBase & {
    type: 'time';
    weekdays: Array<number>;
    hour: number;
    minute: number;
    timezone: string;
    scheduledNotificationIds?: Array<string>;
};
export type LocationGameplanValue = GameplanValueBase & {
    type: 'location';
    locationId?: string;
    mode: 'enter' | 'exit';
};
export type GameplanValue = PatternGameplanValue | TimeGameplanValue | LocationGameplanValue;
