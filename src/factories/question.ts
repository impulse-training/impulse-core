import * as Factory from 'factory.ts';
import { QuestionTimeValue } from '../schema/question';
import { TimestampLike } from '../utils/firestore/TimestampLike';

export const makeQuestionTimeTacticFactory = (
  TimestampKlass: typeof TimestampLike
) =>
  Factory.makeFactory<QuestionTimeValue>({
    ordinal: 0,
    profileId: Factory.each(i => i.toString()),
    type: 'question-time',
    commentCount: 0,
    title: 'How long did you spend?',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    backgroundColor: '#FF0000',
  });
