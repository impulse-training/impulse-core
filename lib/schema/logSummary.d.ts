import { Timestamp } from '../utils/Timestamp';
import { LogValue, Outcome } from './logs';
export interface LogSummaryValue {
    uid: string;
    type: LogValue['type'];
    createdAt: Timestamp;
    updatedAt: Timestamp;
    startTime: Timestamp;
    timezone: string;
    text: string;
    locationFormatted?: string;
    outcome?: Outcome;
    debriefNotes: string;
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
