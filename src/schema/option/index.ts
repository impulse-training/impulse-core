import * as yup from 'yup';
import { TacticData } from '../log';
import {
  MultipleChoiceOptionValue,
  multipleChoiceOptionSchema,
  optionIsMultipleChoiceOption,
} from './multipleChoice';
import {
  CounterOptionValue,
  TimeOptionValue,
  counterOptionSchema,
  timeOptionSchema,
} from './numeric';

export * from './multipleChoice';
export * from './numeric';

export const optionSchemas: Record<
  OptionValue['type'],
  yup.ObjectSchema<OptionValue>
> = {
  'question-time': timeOptionSchema,
  'question-counter': counterOptionSchema,
  'question-multiple-choice': multipleChoiceOptionSchema,
};

export const optionSchema = yup.lazy(value => {
  if (!value) return yup.mixed().required();

  if (typeof value.type === 'string' && value.type in optionSchemas) {
    return optionSchemas[value.type as OptionValue['type']];
  }

  return yup.object({
    type: yup
      .mixed<OptionValue['type']>()
      .oneOf(Object.keys(optionSchemas) as OptionValue['type'][])
      .required(),
  });
}) as yup.Lazy<ValidatedOption>;

// / This type represents the union of all possible validated tactic objects
type ValidatedOption = {
  [K in OptionValue['type']]: yup.InferType<(typeof optionSchemas)[K]>;
}[OptionValue['type']];

export type OptionValue =
  | TimeOptionValue
  | CounterOptionValue
  | MultipleChoiceOptionValue;

export function optionMatches(option: OptionValue, data: TacticData) {
  if (optionIsMultipleChoiceOption(option)) {
    return option.value === data.value;
  }
  if (option.greaterThan != null) {
    return typeof data.value === 'number' && data.value > option.greaterThan;
  }
  if (option.lessThanOrEqualTo != null) {
    return (
      typeof data.value === 'number' && data.value <= option.lessThanOrEqualTo
    );
  }
}
