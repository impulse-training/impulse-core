import * as Factory from 'factory.ts';
import { LogSummaryValue } from '../schema';

export const logSummaryFactory = Factory.makeFactory<LogSummaryValue>({
  uid: Factory.each(i => i.toString()),
  type: 'tactics',
  text: 'YT',
  createdAt: { toDate: () => new Date() } as any,
  updatedAt: { toDate: () => new Date() } as any,
  startTime: { toDate: () => new Date() } as any,
  timezone: 'America/Bogota',
  debriefNotes: 'Hey',
  tacticsSummary: {},
  patternsSummary: {},
});
