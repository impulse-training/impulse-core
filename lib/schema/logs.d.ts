import * as Location from 'expo-location';
import { Timestamp } from '../utils/Timestamp';
export type Outcome = 'success' | 'setback' | 'indeterminate';
export interface BaseLogValue {
    uid: string;
    createdAt: Timestamp;
    isDisplayable: boolean;
    startTime: Timestamp;
    timezone: string;
    location: Partial<Location.LocationObjectCoords>;
    locationIsFetching: boolean;
    locationFormatted?: string;
    tacticIds?: Array<string>;
    tacticsSummary?: Record<string, string>;
    patternsSummary?: Record<string, string>;
    patternsUsageSummary?: Record<string, string>;
}
export type TacticsLogValue = BaseLogValue & {
    type: 'tactics';
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
    patternIds: Array<string>;
    debriefNotes?: string;
    debriefReminderSentAt?: Timestamp | null;
    debriefedAt?: Timestamp | null;
};
export type LogValue = TacticsLogValue | ImpulseLogValue | MotionLogValue | ButtonLogValue;
