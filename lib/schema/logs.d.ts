import * as Location from 'expo-location';
import { FakeTimestamp } from '../utils/FakeTimestamp';
import { CommentValue } from './comment';
import { Gameplan } from './gameplan';
import { PatternUsage, PatternValue } from './pattern';
import { ProfileValue } from './profile';
import { TacticValue } from './tactic';
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
    commentsById?: Record<string, CommentValue>;
    commentsByTacticId?: Record<string, Array<CommentValue>>;
    steps?: number;
    tacticIds: Array<string>;
    gameplan: {
        main: Gameplan;
    } & Partial<Record<'success' | 'setback', Gameplan>>;
    tactics: Record<string, TacticValue>;
    suggestedTacticIds?: Array<string>;
    isUpdatingSuggestions?: boolean;
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
export type ImpulseLogValue = BaseLogValue & {
    type: 'impulse';
    setAsActiveImpulse?: boolean;
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
export type LogValue = ImpulseLogValue | MotionLogValue | ButtonLogValue | LocationLogValue | TimeLogValue | DebriefLogValue;
