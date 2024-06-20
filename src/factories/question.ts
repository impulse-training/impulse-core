import * as Factory from 'factory.ts';
import { QuestionTimeValue } from '../schema/question';
import { TimestampLike } from '../utils/firestore/TimestampLike';

export const makeQuestionTimeTacticFactory = (
  TimestampKlass: typeof TimestampLike
) =>
  Factory.makeFactory<QuestionTimeValue>({
    prompt: 'How long did you spend?',
    type: 'time',
    ordinal: 0,
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
  });
