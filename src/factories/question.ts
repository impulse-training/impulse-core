import * as Factory from 'factory.ts';
import {
  MultipleChoiceQuestionValue,
  TimeQuestionValue,
} from '../schema/question';
import { TimestampLike } from '../utils/firestore/TimestampLike';

export const makeQuestionTimeTacticFactory = (
  TimestampKlass: typeof TimestampLike
) =>
  Factory.makeFactory<TimeQuestionValue>({
    categories: ['impulses'],
    prompt: 'How long did you spend?',
    type: 'time',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
  });

export const makeQuestionMultipleChoiceTacticFactory = (
  TimestampKlass: typeof TimestampLike
) =>
  Factory.makeFactory<MultipleChoiceQuestionValue>({
    categories: ['emotions'],
    prompt: 'How are you feeling?',
    type: 'multipleChoice',
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
