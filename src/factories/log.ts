import * as Factory from 'factory.ts';
import { ImpulseLogValue, QuestionsLogValue } from '../schema/log';
import { TimestampLike } from '../utils/firestore/TimestampLike';

export const makeImpulseLogFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<ImpulseLogValue>({
    senderProfileId: Factory.each(i => i.toString()),
    type: 'impulse',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    date: TimestampKlass.now(),
    issueName: 'YouTube',
    strategiesById: {},
    // These are the tactics that the user has completed
    completedTacticIds: [],
    parentIssueIds: [],
    gptPayload: [
      {
        role: 'user',
        content: "I'm having an impulse!",
      },
    ],
  });

export const makeQuestionsLogFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<QuestionsLogValue>({
    senderProfileId: Factory.each(i => i.toString()),
    type: 'questions',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    date: TimestampKlass.now(),
    gptPayload: [],
    questionsById: {},
  });
