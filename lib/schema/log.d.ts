import * as Location from 'expo-location';
import { Timestamp } from '../utils/Timestamp';
import { PatternValue } from './pattern';
import { TacticValue } from './tactic';
import { TagValue } from './tag';
export type Outcome = 'success' | 'setback' | 'indeterminate';
export interface ImpulseValue {
    uid: string;
    createdAt: Timestamp;
    startTime: Timestamp;
    timezone: string;
    patterns: Record<string, PatternValue>;
    tactics: Record<string, TacticValue>;
    tagsByTacticId: Record<string, Record<string, TagValue>>;
    location: Partial<Location.LocationObjectCoords>;
    locationIsFetching: boolean;
    locationFormatted?: string;
    outcome: Outcome;
    debriefNotes: string;
    patternIds: Array<string>;
    patternUsage: Record<string, number>;
    tacticIds: Array<string>;
    tacticResponses: Record<string, string>;
    tagIds: Array<string>;
    tagResponses: Record<string, {
        applied?: boolean;
        value?: number;
    }>;
}
