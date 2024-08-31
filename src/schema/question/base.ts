import { some } from 'lodash';
import * as yup from 'yup';
import { DocumentSnapshotLike } from '../../utils/firestore/DocumentSnapshotLike';
import { optionSchema } from '../option';
import { followUpSchema } from '../option/followUp';
import { optionalStringArray } from '../utils/array';
import { optionalObjectOf } from '../utils/objectOf';
import { optionalTimestampSchema } from '../utils/timestamp';

export const QUESTION_CATEGORIES = {
  impulses: {
    label: 'Impulse moments',
    order: 0,
    hint: 'Answer these questions when you have an impulse moment.',
    isVisible: () => true,
  },
  debriefing: {
    label: 'Debriefing',
    order: 1,
    hint: "Answer these questions after an impulse moment, when it's time to reflect.",
    isVisible: () => true,
  },
  afterSuccess: {
    label: 'After a success',
    order: 2,
    hint: 'Ask questions after an impulse moment when you achieve your goal.',
    isVisible: (questions: DocumentSnapshotLike<any>) =>
      some(questions, question => question.setbackThreshold !== undefined),
  },
  afterSetback: {
    label: 'After a setback',
    order: 3,
    hint: "Ask questions after an impulse moment when you don't achieve your goal.",
    isVisible: (questions: DocumentSnapshotLike<any>) =>
      some(questions, question => question.setbackThreshold !== undefined),
  },
  dayReview: {
    label: 'Daily review',
    order: 4,
    hint: 'Answer these questions at a scheduled time of day, to reflect on the day gone by.',
    isVisible: () => true,
  },
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
    recommendedForIssueIds: optionalStringArray,
    followUps: yup.array().of(followUpSchema),
    createdAt: optionalTimestampSchema,
    updatedAt: optionalTimestampSchema,
  });
}
