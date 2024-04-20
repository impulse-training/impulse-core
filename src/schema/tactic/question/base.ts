import { QuestionKeyType } from '../../utils/questionType';
import { tacticValueBaseSchema } from '../base';

export function questionTacticValueBaseSchema(type: QuestionKeyType) {
  return tacticValueBaseSchema(type);
}
