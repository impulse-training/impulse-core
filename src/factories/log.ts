import * as Factory from 'factory.ts';
import {
  ImpulseLogValue,
  MessageLogValue,
  TacticsLogValue,
} from '../schema/log';
import { TimestampLike } from '../utils/firestore/TimestampLike';

export const makeLogFactories = (TimestampKlass: typeof TimestampLike) => ({
  impulseLogFactory: Factory.makeFactory<ImpulseLogValue>({
    profileId: '1',
    senderProfileId: Factory.each(i => i.toString()),
    type: 'impulse',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    date: TimestampKlass.now(),
    dateString: '2024-01-01',
    issueName: 'YouTube',
    parentIds: [],
  }),
  messageLogFactory: Factory.makeFactory<MessageLogValue>({
    profileId: '1',
    senderProfileId: Factory.each(i => i.toString()),
    type: 'message',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    date: TimestampKlass.now(),
    dateString: '2024-01-01',
    text: 'Hello, World!',
  }),
  tacticsLogFactory: Factory.makeFactory<TacticsLogValue>({
    profileId: '1',
    senderProfileId: Factory.each(i => i.toString()),
    title: 'Suggestions',
    type: 'tactics',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    date: TimestampKlass.now(),
    dateString: '2024-01-01',
    tacticsById: {},
    suggestedTacticDocPaths: [],
    completedTacticIds: [],
  }),
});
