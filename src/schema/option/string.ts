import * as yup from 'yup';
import { OptionValue } from '.';
import { optionValueBaseSchema } from './base';

export const stringOptionSchema = optionValueBaseSchema('string');

export type StringOptionValue = yup.InferType<typeof stringOptionSchema>;

export function optionIsStringOption(
  option: OptionValue
): option is StringOptionValue {
  return option.type === 'string';
}