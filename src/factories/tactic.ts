import * as Factory from 'factory.ts';
import { TacticValue } from '../schema';

export const tacticFactory = Factory.makeFactory<TacticValue>({
  uid: Factory.each(i => i.toString()),
  type: 'task',
  title: 'Go outside',
  ordinal: Factory.each(i => i),
  subtitle: 'Go for a walk',
  language: 'english',
  createdAt: { toDate: () => new Date() } as any,
  updatedAt: { toDate: () => new Date() } as any,
  patternIds: [],
  patternAndSupportGroupIds: [],
});

export const scheduledTacticFactory = tacticFactory.extend({});
