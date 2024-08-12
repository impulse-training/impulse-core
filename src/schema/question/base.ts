import * as yup from 'yup';
import { optionSchema } from '../option';
import { followUpSchema } from '../option/followUp';
import { optionalObjectOf } from '../utils/objectOf';
import { optionalTimestampSchema } from '../utils/timestamp';

export const QUESTION_CATEGORIES = {
  emotions: 'Emotions',
  impulses: 'Impulses',
  other: 'Other',
  dayReview: 'Daily review',
  afterSuccess: 'Successes',
  afterSetback: 'Setbacks',
} as const;

export type QuestionCategory = keyof typeof QUESTION_CATEGORIES;

const categoryKeys = Object.keys(QUESTION_CATEGORIES) as QuestionCategory[];

const questionCategorySchema = yup
  .mixed<QuestionCategory>()
  .oneOf(categoryKeys);

export function questionBaseSchema<T extends string>(type: T) {
  return yup.object({
    categories: yup.array().of(questionCategorySchema.defined()),
    prompt: yup.string().required(),
    type: yup.mixed<T>().oneOf([type]).defined(),
    options: yup.array().of(optionSchema),
    ordinals: optionalObjectOf(yup.number().required()),
    templateFor: yup
      .mixed<'onboarding' | 'afterSuccess' | 'afterSetback'>()
      .oneOf(['onboarding', 'afterSetback', 'afterSuccess']),
    writeAnswerToProfileMemoryKey: yup.string(),
    followUps: yup.array().of(followUpSchema),
    createdAt: optionalTimestampSchema,
    updatedAt: optionalTimestampSchema,
  });
}
