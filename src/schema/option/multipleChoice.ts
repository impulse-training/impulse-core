import * as yup from 'yup';
import { OptionValue } from '.';
import { optionValueBaseSchema } from './base';

export const multipleChoiceOptionSchema = optionValueBaseSchema(
  'question-multiple-choice'
).shape({
  value: yup.string().required(),
});

export type MultipleChoiceOptionValue = yup.InferType<
  typeof multipleChoiceOptionSchema
>;

export function optionIsMultipleChoiceOption(
  option: OptionValue
): option is MultipleChoiceOptionValue {
  return option.type === 'question-multiple-choice';
}
