import * as Factory from 'factory.ts';
import {
  QuestionMultipleChoiceValue,
  QuestionTimeValue,
} from '../schema/question';
import { TimestampLike } from '../utils/firestore/TimestampLike';

export const makeQuestionTimeTacticFactory = (
  TimestampKlass: typeof TimestampLike
) =>
  Factory.makeFactory<QuestionTimeValue>({
    categories: ['impulses'],
    prompt: 'How long did you spend?',
    type: 'time',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
  });

export const makeQuestionMultipleChoiceTacticFactory = (
  TimestampKlass: typeof TimestampLike
) =>
  Factory.makeFactory<QuestionMultipleChoiceValue>({
    categories: ['emotions'],
    prompt: 'How are you feeling?',
    type: 'time',
    canAddNewOptions: false,
    options: [
      {
        type: 'string',
        text: 'Sad',
      },
      {
        type: 'string',
        text: 'Happy',
      },
    ],
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
  });
