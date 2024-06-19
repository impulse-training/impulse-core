import * as Factory from 'factory.ts';
import { ImpulseLogValue } from '../schema/log';
import { TimestampLike } from '../utils/firestore/TimestampLike';

export const makeImpulseLogFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<ImpulseLogValue>({
    profileId: Factory.each(i => i.toString()),
    type: 'impulse',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    date: TimestampKlass.now(),
    issueName: 'YouTube',
    parentIssueIds: [],
    systemMessage: "I'm having an impulse!",
  });
