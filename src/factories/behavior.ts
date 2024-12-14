import * as Factory from 'factory.ts';
import { TimeBehaviorValue } from '../schema/behavior';
import { TimestampLike } from '../utils/firestore/TimestampLike';

export const makeBehaviorFactories = (
  TimestampKlass: typeof TimestampLike
) => ({
  counterBehaviorFactory: Factory.makeFactory<TimeBehaviorValue>({
    ordinal: 0,
    prompt: 'How long did you spend watching youtube?',
    type: 'time',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
  }),
  timeBehaviorFactory: Factory.makeFactory<TimeBehaviorValue>({
    ordinal: 0,
    prompt: 'How long did you spend watching youtube?',
    type: 'time',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
  }),
});
