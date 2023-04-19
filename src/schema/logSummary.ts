import { FakeTimestamp } from '../utils/FakeTimestamp';
import { LogValue, Outcome } from './logs';

// A log summary is a simplified, lightweight summary of a log, that's displayed on the today screen
// and logs screens. Note that a log summary always has the same id as its corresponding log.

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
  tacticsSummary: Record<string, { text: string; applied: boolean }>;
  patternsSummary: Record<
    string,
    { name: string; usage: number; formattedUsage: string }
  >;
}
