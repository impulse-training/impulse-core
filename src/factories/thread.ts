import * as Factory from 'factory.ts';
import { ThreadValue } from '../schema';
import { TimestampLike } from '../utils/firestore/TimestampLike';

export const makeThreadFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<ThreadValue>({
    dateString: '2025-01-01',
    date: TimestampKlass.now(),
    title: 'Getting started with Impulse',
    logsById: {},
    gptSystemMessage: 'You are a helpful assistant.',
    behaviorsById: {},
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
  });
