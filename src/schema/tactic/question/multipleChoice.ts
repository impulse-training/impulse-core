import * as yup from 'yup';
import { choiceSchema } from '../../choice';
import { optionalObjectOf } from '../../utils/objectOf';
import { tacticValueBaseSchema } from '../base';

export const questionMultipleChoiceTacticSchema = tacticValueBaseSchema(
  'question-multiple-choice'
).shape({
  choicesById: optionalObjectOf(
    choiceSchema.shape({ strategiesPath: yup.string().required() }).required()
  ),
});

export type QuestionMultipleChoiceTacticValue = yup.InferType<
  typeof questionMultipleChoiceTacticSchema
>;
