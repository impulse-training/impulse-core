import * as Factory from 'factory.ts';
import { PatternValue } from '../schema';
import { TimestampLike } from '../utils/TimestampLike';

export const makePatternFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<PatternValue>({
    uid: Factory.each(i => i.toString()),
    name: 'Cigarettes',
    ordinal: Factory.each(i => i),
    unit: 'custom',
    customUnit: 'cigarettes',
    setbackThreshold: 0,
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    sendWeeklyReports: false,
    gameplanId: Factory.each(i => i.toString()),
    debriefGameplanId: Factory.each(i => i.toString()),
  });
