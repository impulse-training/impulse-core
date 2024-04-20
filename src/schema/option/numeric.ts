import { compact } from 'lodash';
import * as yup from 'yup';
import { OptionValue } from '.';
import { QuestionKeyType } from '../utils/questionType';
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
  const unit = optionIsTimeOption(option) ? 'minutes' : null;

  if (typeof greaterThan !== 'undefined') {
    return compact([greaterThan!.toString(), unit, 'or more']).join(' ');
  }

  if (typeof lessThanOrEqualTo !== 'undefined') {
    return compact(['up to', lessThanOrEqualTo!.toString(), unit]).join(' ');
  }

  return '';
}
