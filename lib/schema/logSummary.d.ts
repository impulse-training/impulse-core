import { FakeTimestamp } from '../utils/FakeTimestamp';
import { LogValue, Outcome } from './logs';
export interface LogSummaryValue {
    uid: string;
    type: LogValue['type'];
    createdAt: FakeTimestamp;
    updatedAt: FakeTimestamp;
    startTime: FakeTimestamp;
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
