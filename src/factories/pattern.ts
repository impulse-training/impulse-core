import { Timestamp } from '@google-cloud/firestore';
import * as Factory from 'factory.ts';
import { PatternValue } from '../schema';

export const patternFactory = Factory.makeFactory<PatternValue>({
  uid: Factory.each(i => i.toString()),
  name: 'Cigarettes',
  ordinal: Factory.each(i => i),
  unit: 'custom',
  customUnit: 'cigarettes',
  debriefAfterMinutes: 5,
  createdAt: Timestamp.now(),
});
