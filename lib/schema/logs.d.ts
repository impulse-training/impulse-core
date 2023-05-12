import * as Location from 'expo-location';
import { FakeTimestamp } from '../utils/FakeTimestamp';
import { PatternValue } from './pattern';
import { Recording } from './recording';
import { TacticValue } from './tactic';
import { TagValue } from './tag';
export type Outcome = 'success' | 'setback' | 'indeterminate';
export interface BaseLogValue {
    uid: string;
    createdAt: FakeTimestamp;
    updatedAt: FakeTimestamp;
    startTime: FakeTimestamp;
    timezone: string;
    tactics: Record<string, TacticValue>;
    tagsByTacticId: Record<string, Record<string, TagValue>>;
    location: Partial<Location.LocationObjectCoords>;
    locationId?: string;
    locationIsFetching: boolean;
    locationFormatted?: string;
    tacticIds: Array<string>;
    tacticResponses: Record<string, string>;
    tacticRecordings?: Record<string, Recording>;
    tagIds: Array<string>;
    tagValues: Record<string, number>;
    sharedWithSupportGroupIds?: Array<string>;
}
export type TacticsLogValue = BaseLogValue & {
    isDisplayable: true;
    type: 'tactics';
};
export type LocationLogValue = BaseLogValue & {
    type: 'location';
    locationId: string;
    isDisplayable: true;
    locationName: string;
    locationMode: 'enter' | 'exit';
};
export type TimeLogValue = BaseLogValue & {
    type: 'time';
    isDisplayable: true;
    reminderId: string;
};
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
export type ImpulseLogValue = BaseLogValue & {
    type: 'impulse';
    pressCount?: number;
    outcome: Outcome;
    isDisplayable: true;
    buttonPressSecondsSinceEpoch?: number;
    patterns: Record<string, PatternValue>;
    patternIds: Array<string>;
    patternUsage: Record<string, PatternUsage>;
    debriefNotes?: string;
    debriefReminderSentAt?: FakeTimestamp | null;
    debriefedAt?: FakeTimestamp | null;
};
export interface PatternUsage {
    value: number;
    transformedValue: number;
    formattedValue: string;
}
export type LogValue = TacticsLogValue | ImpulseLogValue | MotionLogValue | ButtonLogValue | LocationLogValue | TimeLogValue;
