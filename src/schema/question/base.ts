import * as yup from 'yup';
import { optionSchema } from '../option';
import { followUpSchema } from '../option/followUp';
import { optionalObjectOf } from '../utils/objectOf';
import { optionalTimestampSchema } from '../utils/timestamp';
import { QuestionKeyType } from './utils/questionKeyType';

export const QUESTION_CATEGORIES = {
  general: 'General',
  impulses: 'Impulses',
  debriefing: 'Debriefing',
  dailyReview: 'Daily review',
  afterSuccess: 'Successes',
  afterSetback: 'Setbacks',
} as const;

export type QuestionCategory = keyof typeof QUESTION_CATEGORIES;

const categoryKeys = Object.keys(QUESTION_CATEGORIES) as QuestionCategory[];

const questionCategorySchema = yup
  .mixed<QuestionCategory>()
  .oneOf(categoryKeys);

export function questionBaseSchema(type: QuestionKeyType) {
  return yup.object({
    categories: yup.array().of(questionCategorySchema.defined()),
    prompt: yup.string().required(),
    type: yup.mixed<QuestionKeyType>().oneOf([type]).defined(),
    options: yup.array().of(optionSchema),
    ordinals: optionalObjectOf(yup.number().required()),
    templateFor: yup.mixed<'onboarding'>().oneOf(['onboarding']),
    writeAnswerToProfileMemoryKey: yup.string(),
    followUps: yup.array().of(followUpSchema),
    createdAt: optionalTimestampSchema,
    updatedAt: optionalTimestampSchema,
  });
}
