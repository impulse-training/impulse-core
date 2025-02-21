import * as Factory from 'factory.ts';
import { AgentType, ThreadValue } from '../schema';
import { TimestampLike } from '../utils/firestore/TimestampLike';

export const makeThreadFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<ThreadValue>({
    isDisplayable: true,
    dateString: '2025-01-01',
    date: TimestampKlass.now(),
    title: 'Getting started with Impulse',
    logsById: {},
    agentType: AgentType.ONBOARDING,
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
  });
