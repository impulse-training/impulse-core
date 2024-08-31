import * as Factory from 'factory.ts';
import {
  MultipleChoiceQuestionValue,
  TimeQuestionValue,
} from '../schema/question';
import { TextQuestionValue } from '../schema/question/text';
import { TimestampLike } from '../utils/firestore/TimestampLike';

export const makeQuestionFactories = (
  TimestampKlass: typeof TimestampLike
) => ({
  textQuestionFactory: Factory.makeFactory<TextQuestionValue>({
    type: 'text',
    prompt: 'What did you do?',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
  }),
  timeQuestionFactory: Factory.makeFactory<TimeQuestionValue>({
    categories: ['impulses'],
    prompt: 'How long did you spend watching youtube?',
    type: 'time',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
  }),
  multipleChoiceQuestionFactory:
    Factory.makeFactory<MultipleChoiceQuestionValue>({
      categories: ['feelings'],
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
    }),
});
