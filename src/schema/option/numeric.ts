import { isUndefined } from 'lodash';
import * as yup from 'yup';
import { OptionValue } from '.';
import { QuestionKeyType } from '../utils/questionType';
import { formatSecondsInWords } from '../utils/time';
import { optionValueBaseSchema } from './base';

export const timeOptionSchema = numericOptionSchema('question-time');
export const counterOptionSchema = numericOptionSchema('question-counter');

export type TimeOptionValue = yup.InferType<typeof timeOptionSchema>;
export type CounterOptionValue = yup.InferType<typeof counterOptionSchema>;
export type NumericOptionValue = TimeOptionValue | CounterOptionValue;

export function optionIsTimeOption(
  option: OptionValue
): option is TimeOptionValue {
  return option.type === 'question-time';
}

export function optionIsCounterOption(
  option: OptionValue
): option is TimeOptionValue {
  return option.type === 'question-counter';
}

export function optionIsNumericOption(
  option: OptionValue
): option is NumericOptionValue {
  return optionIsTimeOption(option) || optionIsCounterOption(option);
}

// Both time and counter options are "numeric", in the sense that we measure them with greaterThan
// and lessThanOrEqualTo conditions
function numericOptionSchema<K extends QuestionKeyType>(type: K) {
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

export function numericOptionText(option: NumericOptionValue) {
  const { greaterThan, lessThanOrEqualTo } = option;
  if (isUndefined(greaterThan) && isUndefined(lessThanOrEqualTo)) return '';
  const formatter = optionIsTimeOption(option) ? formatSecondsInWords : String;
  const unit = isUndefined(greaterThan) ? 'Up to' : 'More than';
  const value = [greaterThan, lessThanOrEqualTo].filter(
    v => v !== undefined
  )[0]!;
  return [unit, formatter(value)].join(' ');
}
