import * as Location from 'expo-location';
import { Timestamp } from '../utils/Timestamp';
import { PatternValue } from './pattern';
import { TacticValue } from './tactic';
import { TagValue } from './tag';
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
export type TacticsLogValue = BaseLogValue & {
    type: 'tactics';
};
export type LocationLogValue = BaseLogValue & {
    type: 'location';
    locationId: string;
    locationName: string;
    locationMode: 'enter' | 'exit';
};
export type TimeLogValue = BaseLogValue & {
    type: 'time';
    reminderId: string;
};
export type MotionLogValue = BaseLogValue & {
    type: 'motion';
};
export type ButtonLogValue = BaseLogValue & {
    type: 'button';
    characteristics: Record<string, unknown>;
};
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
export type LogValue = TacticsLogValue | ImpulseLogValue | MotionLogValue | ButtonLogValue | LocationLogValue | TimeLogValue;
