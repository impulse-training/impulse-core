import * as yup from 'yup';
import { OptionValue } from '.';
import { optionValueBaseSchema } from './base';

export const timeOptionSchema = numericOptionSchema('time');
export const counterOptionSchema = numericOptionSchema('counter');

export type TimeOptionValue = yup.InferType<typeof timeOptionSchema>;
export type CounterOptionValue = yup.InferType<typeof counterOptionSchema>;
export type NumericOptionValue = TimeOptionValue | CounterOptionValue;

export function optionIsTimeOption(
  option: OptionValue
): option is TimeOptionValue {
  return option.type === 'time';
}

export function optionIsCounterOption(
  option: OptionValue
): option is TimeOptionValue {
  return option.type === 'counter';
}

// Both time and counter options are "numeric", in the sense that we measure them with greaterThan
// and lessThanOrEqualTo conditions
function numericOptionSchema<K extends string>(type: K) {
  return optionValueBaseSchema(type)
    .shape({
      greaterThan: yup.number().notRequired(),
      lessThanOrEqualTo: yup.number().notRequired(),
    })
    .test(
      'validate-conditions',
      'Either greaterThan or lessThanOrEqualTo must be provided, but not both',
      function (values) {
        const { greaterThan, lessThanOrEqualTo } = values;
        const hasGreaterThan = typeof greaterThan !== 'undefined';
        const hasLessThanOrEqualTo = typeof lessThanOrEqualTo !== 'undefined';

        if (!hasGreaterThan && !hasLessThanOrEqualTo) return false;
        if (hasGreaterThan && hasLessThanOrEqualTo) return false;
        return true;
      }
    );
}
