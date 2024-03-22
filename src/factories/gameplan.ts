import * as Factory from 'factory.ts';
import { GameplanValue } from '../schema';
import { TimestampLike } from '../utils/TimestampLike';

export const makeGameplanFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<GameplanValue>({
    profileId: Factory.each(i => i.toString()),
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    main: {},
    success: {},
    setback: {},
    tacticsById: {},
    measureTacticIds: {},
    time: {},
    location: {},
    scheduledNotificationIds: [],
  });
