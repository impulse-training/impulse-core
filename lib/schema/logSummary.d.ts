import { TimestampLike } from '../utils/TimestampLike';
import { LogValue, Outcome } from './logs';
export interface LogSummaryValue {
    uid: string;
    type: LogValue['type'];
    createdAt: TimestampLike;
    updatedAt: TimestampLike;
    startTime: TimestampLike;
    timezone: string;
    text: string;
    locationFormatted?: string;
    outcome?: Outcome;
    debriefNotes: string;
    sharedWithSupportGroupIds?: Array<string>;
    tacticsSummary: Record<string, {
        text: string;
        applied: boolean;
    }>;
    patternsSummary: Record<string, {
        name: string;
        usage: number;
        formattedUsage: string;
    }>;
}
