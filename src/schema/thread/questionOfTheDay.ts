import * as yup from 'yup';
import threadBase from './base';

export const questionOfTheDayThreadSchema = threadBase('questionOfTheDay');
export type QuestionOfTheDayThreadValue = yup.InferType<
  typeof questionOfTheDayThreadSchema
>;
