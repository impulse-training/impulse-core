import * as yup from 'yup';
import { optionSchema } from '../option';
import { optionalTimestampSchema } from '../utils/timestamp';
import { QuestionKeyType } from './utils/questionKeyType';

export function questionBaseSchema(type: QuestionKeyType) {
  return yup.object({
    prompt: yup.string().required(),
    type: yup.mixed<QuestionKeyType>().oneOf([type]).defined(),
    options: yup.array().of(optionSchema),
    createdAt: optionalTimestampSchema,
    updatedAt: optionalTimestampSchema,
  });
}
