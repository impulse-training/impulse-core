import * as Factory from 'factory.ts';
import { TacticValue } from '../schema';
import { FakeTimestamp } from '../utils/FakeTimestamp';

export const makeTacticFactory = (TimestampKlass: typeof FakeTimestamp) =>
  Factory.makeFactory<TacticValue>({
    uid: Factory.each(i => i.toString()),
    type: 'task',
    title: 'Go outside',
    ordinal: Factory.each(i => i),
    subtitle: 'Go for a walk',
    language: 'english',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    patternIds: [],
    patternAndSupportGroupIds: [],
  });
