import * as Factory from 'factory.ts';
import {
  ImpulseLogValue,
  MessageLogValue,
  QuestionsLogValue,
  StrategiesLogValue,
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
    parentIssueIds: [],
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
  questionsLogFactory: Factory.makeFactory<QuestionsLogValue>({
    profileId: '1',
    senderProfileId: Factory.each(i => i.toString()),
    type: 'questions',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    date: TimestampKlass.now(),
    dateString: '2024-01-01',
    questionsById: {},
  }),
  strategiesLogFactory: Factory.makeFactory<StrategiesLogValue>({
    profileId: '1',
    senderProfileId: Factory.each(i => i.toString()),
    type: 'strategies',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    date: TimestampKlass.now(),
    dateString: '2024-01-01',
    strategiesById: {},
    suggestedStrategyDocPaths: [],
    completedTacticIds: [],
    followedUpTacticIds: [],
  }),
});
