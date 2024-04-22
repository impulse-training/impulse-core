import * as Factory from 'factory.ts';
import { PatternValue } from '../schema';
import { TimestampLike } from '../utils/firestore/TimestampLike';

export const makePatternFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<PatternValue>({
    profileId: Factory.each(i => i.toString()),
    name: 'Cigarettes',
    ordinal: Factory.each(i => i),
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    sendWeeklyReports: false,
  });
