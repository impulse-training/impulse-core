import * as yup from 'yup';
import { CounterQuestionValue, counterQuestionSchema } from './counter';
import { IssueQuestionValue, issueQuestionSchema } from './issue';
import {
  MultipleChoiceQuestionValue,
  multipleChoiceQuestionSchema,
} from './multipleChoice';
import {
  ScaleOf1To10QuestionValue,
  scaleOf1To10QuestionSchema,
} from './scaleOf1To10';
import { TextQuestionValue, textQuestionSchema } from './text';
import { TimeQuestionValue, timeQuestionSchema } from './time';

export * from './base';
export * from './counter';
export * from './issue';
export * from './multipleChoice';
export * from './scaleOf1To10';
export * from './time';
export * from './utils/guards';

export const questionSchemas: Record<
  QuestionValue['type'],
  yup.ObjectSchema<QuestionValue>
> = {
  time: timeQuestionSchema,
  counter: counterQuestionSchema,
  text: textQuestionSchema,
  issue: issueQuestionSchema,
  scaleOf1To10: scaleOf1To10QuestionSchema,
  multipleChoice: multipleChoiceQuestionSchema,
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
  | ScaleOf1To10QuestionValue
  | TimeQuestionValue
  | TextQuestionValue
  | CounterQuestionValue
  | MultipleChoiceQuestionValue
  | IssueQuestionValue;

export type QuestionKeyType = QuestionValue['type'];
