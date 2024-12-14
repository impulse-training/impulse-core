import * as Factory from 'factory.ts';
import { BehaviorValue } from '../schema';
import { TimestampLike } from '../utils/firestore/TimestampLike';

export const makeBehaviorFactories = (
  TimestampKlass: typeof TimestampLike
) => ({
  counterBehaviorFactory: Factory.makeFactory<BehaviorValue>({
    ordinal: 0,
    name: 'How long did you spend watching youtube?',
    trackingType: 'counter',
    isHelpful: null,
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
  }),
  timeBehaviorFactory: Factory.makeFactory<BehaviorValue>({
    ordinal: 0,
    name: 'How long did you spend watching youtube?',
    trackingType: 'time',
    isHelpful: null,
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
  }),
});
