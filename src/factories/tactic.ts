import { Timestamp } from '@google-cloud/firestore';
import * as Factory from 'factory.ts';
import { TacticValue } from '../schema';

export const tacticFactory = Factory.makeFactory<TacticValue>({
  uid: Factory.each(i => i.toString()),
  type: 'task',
  text: 'Go outside',
  ordinal: Factory.each(i => i),
  isSharingEnabled: false,
  subtitle: 'Go for a walk',
  language: 'english',
  createdAt: Timestamp.now(),
  patternIds: [],
});

export const scheduledTacticFactory = tacticFactory.extend({});
