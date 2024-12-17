import * as Factory from 'factory.ts';
import { BehaviorValue } from '../schema';
import { TimestampLike } from '../utils/firestore/TimestampLike';

export const makeBehaviorFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<BehaviorValue>({
    ordinal: 0,
    name: 'How long did you spend watching youtube?',
    trackingType: 'counter',
    isHelpful: null,
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
  });
