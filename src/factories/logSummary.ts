import * as Factory from 'factory.ts';
import { LogSummaryValue } from '../schema';
import { Timestamp } from '../utils/Timestamp';

export const logSummaryFactory = Factory.makeFactory<LogSummaryValue>({
  uid: Factory.each(i => i.toString()),
  type: 'tactics',
  text: 'YT',
  createdAt: Timestamp.now(),
  startTime: Timestamp.now(),
  timezone: 'America/Bogota',
  debriefNotes: 'Hey',
  tacticsSummary: {},
  patternsSummary: {},
});
