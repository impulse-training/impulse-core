import * as Factory from 'factory.ts';
import { LogSummaryValue } from '../schema';
import { TimestampLike } from '../utils/TimestampLike';

export const makeLogSummaryFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<LogSummaryValue>({
    uid: Factory.each(i => i.toString()),
    type: 'impulse',
    text: 'YT',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    startTime: TimestampKlass.now(),
    timezone: 'America/Bogota',
    debriefNotes: 'Hey',
    tacticsSummary: {},
    patternsSummary: {},
  });
