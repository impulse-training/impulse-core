import * as yup from 'yup';
import { optionSchema } from '../option';
import { followUpSchema } from '../option/followUp';
import { optionalTimestampSchema } from '../utils/timestamp';
import { QuestionKeyType } from './utils/questionKeyType';

export function questionBaseSchema(type: QuestionKeyType) {
  return yup.object({
    prompt: yup.string().required(),
    type: yup.mixed<QuestionKeyType>().oneOf([type]).defined(),
    options: yup.array().of(optionSchema),
    ordinal: yup.number().required(),
    templateFor: yup.mixed<'onboarding'>().oneOf(['onboarding']),
    writeAnswerToProfileMemoryKey: yup.string(),
    followUp: followUpSchema.optional(),
    createdAt: optionalTimestampSchema,
    updatedAt: optionalTimestampSchema,
  });
}
