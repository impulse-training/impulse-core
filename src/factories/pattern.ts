import * as Factory from 'factory.ts';
import { PatternValue } from '../schema';
import { FakeTimestamp } from '../utils/FakeTimestamp';

export const makePatternFactory = (TimestampKlass: typeof FakeTimestamp) =>
  Factory.makeFactory<PatternValue>({
    uid: Factory.each(i => i.toString()),
    name: 'Cigarettes',
    ordinal: Factory.each(i => i),
    unit: 'custom',
    customUnit: 'cigarettes',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    impulseTacticIds: [],
    setbackTacticIds: [],
    successTacticIds: [],
    sendWeeklyReports: false,
  });
