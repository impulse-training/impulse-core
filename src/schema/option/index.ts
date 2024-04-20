import * as yup from 'yup';
import { TacticData } from '../log';
import { NumericOptionValue, numericOptionSchema } from './numeric';
import {
  StringOptionValue,
  optionIsStringOption,
  stringOptionSchema,
} from './string';

export * from './numeric';
export * from './string';

export const optionSchemas: Record<
  OptionValue['type'],
  yup.ObjectSchema<OptionValue>
> = {
  numeric: numericOptionSchema,
  string: stringOptionSchema,
} as any;

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

export type OptionValue = NumericOptionValue | StringOptionValue;

export function optionMatches(option: OptionValue, data: TacticData) {
  if (optionIsStringOption(option)) {
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
