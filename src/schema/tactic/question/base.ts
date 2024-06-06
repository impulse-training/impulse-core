import * as yup from 'yup';
import { optionSchema } from '../../option';
import { tacticValueBaseSchema } from '../base';
import { QuestionKeyType } from './questionKeyType';

export function questionTacticValueBaseSchema(type: QuestionKeyType) {
  return tacticValueBaseSchema(type).shape({
    options: yup.array().of(optionSchema),
  });
}
