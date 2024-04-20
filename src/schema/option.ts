import * as yup from 'yup';
import { TacticData } from './log';
import { optionalTimestampSchema } from './utils/timestamp';

export const optionSchema = yup
  .object({
    createdAt: optionalTimestampSchema,
    updatedAt: optionalTimestampSchema,
    text: yup.string().required(),
    strategiesPath: yup.string(),
    ordinal: yup.number().required(),
    // Conditions:
    greaterThan: yup.number().notRequired(),
    lessThanOrEqualTo: yup.number().notRequired(),
    equalTo: yup.mixed<string | number>().notRequired(),
  })
  .test(
    'validate-conditions',
    'Either greaterThan/lessThanOrEqualTo or equalTo must be provided, but not both',
    function (values) {
      const { greaterThan, lessThanOrEqualTo, equalTo } = values;
      const hasRange = greaterThan != null || lessThanOrEqualTo != null;
      const hasEqualTo = equalTo != null;

      return (hasRange && !hasEqualTo) || (!hasRange && hasEqualTo);
    }
  );
export type OptionValue = yup.InferType<typeof optionSchema>;

export function optionMatches(option: OptionValue, data: TacticData) {
  if (option.equalTo != null) {
    return option.equalTo === data.value;
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
