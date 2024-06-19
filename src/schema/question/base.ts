import * as yup from 'yup';
import { optionSchema } from '../option';
import { tacticValueBaseSchema } from '../strategy/tactic/base';
import { QuestionKeyType } from './utils/questionKeyType';

export function questionValueBaseSchema(type: QuestionKeyType) {
  return tacticValueBaseSchema(type).shape({
    options: yup.array().of(optionSchema),
  });
}
