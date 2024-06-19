import * as yup from 'yup';
import { QuestionCounterValue, questionCounterSchema } from './counter';
import {
  QuestionMultipleChoiceValue,
  questionMultipleChoiceSchema,
} from './multipleChoice';
import { QuestionSliderValue, questionSliderSchema } from './slider';
import { QuestionTextValue, questionTextSchema } from './text';
import { QuestionTimeValue, questionTimeSchema } from './time';

export * from './counter';
export * from './multipleChoice';
export * from './slider';
export * from './time';
export * from './utils/guards';

export const questionSchemas: Record<
  QuestionValue['type'],
  yup.ObjectSchema<QuestionValue>
> = {
  'question-text': questionTextSchema,
  'question-time': questionTimeSchema,
  'question-counter': questionCounterSchema,
  'question-slider': questionSliderSchema,
  'question-multiple-choice': questionMultipleChoiceSchema,
} as any;

export const questionSchema = yup.lazy(value => {
  if (!value) return yup.mixed().required();

  if (typeof value.type === 'string' && value.type in questionSchemas) {
    return questionSchemas[value.type as QuestionValue['type']];
  }

  return yup.object({
    type: yup
      .mixed<QuestionValue['type']>()
      .oneOf(Object.keys(questionSchemas) as QuestionValue['type'][])
      .required(),
  });
}) as yup.Lazy<ValidatedQuestion>;

// / This type represents the union of all possible validated tactic objects
type ValidatedQuestion = {
  [K in QuestionValue['type']]: yup.InferType<(typeof questionSchemas)[K]>;
}[QuestionValue['type']];

export type QuestionValue =
  | QuestionTextValue
  | QuestionSliderValue
  | QuestionTimeValue
  | QuestionCounterValue
  | QuestionMultipleChoiceValue;
