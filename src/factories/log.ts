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
    senderProfileId: Factory.each(i => i.toString()),
    type: 'impulse',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    date: TimestampKlass.now(),
    issueName: 'YouTube',
    parentIssueIds: [],
  }),
  messageLogFactory: Factory.makeFactory<MessageLogValue>({
    senderProfileId: Factory.each(i => i.toString()),
    type: 'message',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    date: TimestampKlass.now(),
    text: 'Hello, World!',
  }),
  questionsLogFactory: Factory.makeFactory<QuestionsLogValue>({
    senderProfileId: Factory.each(i => i.toString()),
    type: 'questions',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    date: TimestampKlass.now(),
    questionsById: {},
  }),
  strategiesLogFactory: Factory.makeFactory<StrategiesLogValue>({
    senderProfileId: Factory.each(i => i.toString()),
    type: 'strategies',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    date: TimestampKlass.now(),
    strategiesById: {},
    suggestedStrategyDocPaths: [],
    completedTacticIds: [],
    followedUpTacticIds: [],
  }),
});
