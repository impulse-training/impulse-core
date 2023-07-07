import * as Location from 'expo-location';
import { FakeTimestamp } from '../utils/FakeTimestamp';
import { Gameplan } from './gameplan';
import { PatternUsage, PatternValue } from './pattern';
import { ProfileValue } from './profile';
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
    tagsByTacticId: Record<string, Record<string, TagValue>>;
    location: Partial<Location.LocationObjectCoords>;
    locationIsFetching: boolean;
    locationFormatted?: string;
    allTacticIds: Array<string>;
    tacticIds: Array<string>;
    gameplan: Gameplan;
    tactics: Record<string, TacticValue>;
    suggestedTacticIds?: Array<string>;
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
    patternUsageEntries: Record<string, Record<string, PatternUsage>>;
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
    gameplans: ProfileValue['gameplans'];
    patterns: Record<string, PatternValue>;
    patternId: string;
    patternIds: Array<string>;
    patternUsage: Record<string, PatternUsage>;
    debriefNotes?: string;
    debriefReminderSentAt?: FakeTimestamp | null;
    debriefedAt?: FakeTimestamp | null;
};
export type LogValue = TacticsLogValue | ImpulseLogValue | MotionLogValue | ButtonLogValue | LocationLogValue | TimeLogValue | DebriefLogValue;
