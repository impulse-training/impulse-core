import * as yup from 'yup';
import { OptionValue } from '.';
import { optionValueBaseSchema } from './base';

export const numericOptionSchema = optionValueBaseSchema('numeric').shape({
  greaterThan: yup.number().notRequired(),
  lessThanOrEqualTo: yup.number().notRequired(),
});

export type NumericOptionValue = yup.InferType<typeof numericOptionSchema>;

export function optionIsNumericOption(
  option: OptionValue
): option is NumericOptionValue {
  return option.type === 'numeric';
}
