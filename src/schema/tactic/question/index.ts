import * as yup from 'yup';
import {
  QuestionCounterTacticValue,
  questionCounterTacticSchema,
} from './counter';
import {
  QuestionImpulseTacticValue,
  questionImpulseTacticSchema,
} from './impulse';
import {
  QuestionMultipleChoiceTacticValue,
  questionMultipleChoiceTacticSchema,
} from './multipleChoice';
import {
  QuestionSliderTacticValue,
  questionSliderTacticSchema,
} from './slider';
import { QuestionTextValue, questionTextSchema } from './text';
import { QuestionTimeTacticValue, questionTimeTacticSchema } from './time';

export * from './counter';
export * from './impulse';
export * from './multipleChoice';
export * from './slider';
export * from './time';

export const questionTacticSchemas: Record<
  QuestionTacticValue['type'],
  yup.ObjectSchema<QuestionTacticValue>
> = {
  'question-impulse': questionImpulseTacticSchema,
  'question-text': questionTextSchema,
  'question-time': questionTimeTacticSchema,
  'question-counter': questionCounterTacticSchema,
  'question-slider': questionSliderTacticSchema,
  'question-multiple-choice': questionMultipleChoiceTacticSchema,
} as any;

export const questionTacticSchema = yup.lazy(value => {
  if (!value) return yup.mixed().required();

  if (typeof value.type === 'string' && value.type in questionTacticSchemas) {
    return questionTacticSchemas[value.type as QuestionTacticValue['type']];
  }

  return yup.object({
    type: yup
      .mixed<QuestionTacticValue['type']>()
      .oneOf(
        Object.keys(questionTacticSchemas) as QuestionTacticValue['type'][]
      )
      .required(),
  });
}) as yup.Lazy<ValidatedQuestionTactic>;

// / This type represents the union of all possible validated tactic objects
type ValidatedQuestionTactic = {
  [K in QuestionTacticValue['type']]: yup.InferType<
    (typeof questionTacticSchemas)[K]
  >;
}[QuestionTacticValue['type']];

export type QuestionTacticValue =
  | QuestionTextValue
  | QuestionSliderTacticValue
  | QuestionTimeTacticValue
  | QuestionCounterTacticValue
  | QuestionMultipleChoiceTacticValue
  | QuestionImpulseTacticValue;
