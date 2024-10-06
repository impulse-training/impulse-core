import * as Factory from 'factory.ts';
import { StrategyValue } from '../schema';
import { TimestampLike } from '../utils/firestore/TimestampLike';

export const makeStrategyFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<StrategyValue>({
    tacticsById: {},
    name: 'Distractions',
    isShared: false,
    invitationCode: 'abc123',
    invitationUrl: 'https://google.com',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
  });
