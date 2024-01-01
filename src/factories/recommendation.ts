import * as Factory from 'factory.ts';
import { ExistingGameplanRecommendationValue } from '../schema';
import { FakeTimestamp } from '../utils/FakeTimestamp';

export const makeRecommendationFactory = (
  TimestampKlass: typeof FakeTimestamp
) =>
  Factory.makeFactory<ExistingGameplanRecommendationValue>({
    uid: Factory.each(i => i.toString()),
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    tacticIds: [],
    tacticsById: {},
    recommenderName: 'Michael',
    recommenderUid: 'abc123',
    explanationMarkdown: 'You should try this!',
    gameplanId: 'abc123',
  });
