import * as yup from 'yup';
import { QuestionCounterValue, questionCounterSchema } from './counter';
import {
  QuestionMultipleChoiceValue,
  questionMultipleChoiceSchema,
} from './multipleChoice';
import {
  QuestionScaleOf1To10Value,
  questionScaleOf1To10Schema,
} from './scaleOf1To10';
import { QuestionTextValue, questionTextSchema } from './text';
import { QuestionTimeValue, questionTimeSchema } from './time';

export * from './counter';
export * from './multipleChoice';
export * from './scaleOf1To10';
export * from './time';
export * from './utils/guards';

export const questionSchemas: Record<
  QuestionValue['type'],
  yup.ObjectSchema<QuestionValue>
> = {
  text: questionTextSchema,
  time: questionTimeSchema,
  counter: questionCounterSchema,
  scaleOf1To10: questionScaleOf1To10Schema,
  multipleChoice: questionMultipleChoiceSchema,
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
  | QuestionScaleOf1To10Value
  | QuestionTimeValue
  | QuestionCounterValue
  | QuestionMultipleChoiceValue;
