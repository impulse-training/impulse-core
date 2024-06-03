import { tacticValueBaseSchema } from '../base';
import { QuestionKeyType } from './questionKeyType';

export function questionTacticValueBaseSchema(type: QuestionKeyType) {
  return tacticValueBaseSchema(type);
}
