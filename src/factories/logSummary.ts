import * as Factory from 'factory.ts';
import { LogSummaryValue } from '../schema';
import { FakeTimestamp } from '../utils/FakeTimestamp';

export const makeLogSummaryFactory = (TimestampKlass: typeof FakeTimestamp) =>
  Factory.makeFactory<LogSummaryValue>({
    uid: Factory.each(i => i.toString()),
    type: 'tactics',
    text: 'YT',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    startTime: TimestampKlass.now(),
    timezone: 'America/Bogota',
    debriefNotes: 'Hey',
    tacticsSummary: {},
    patternsSummary: {},
  });
