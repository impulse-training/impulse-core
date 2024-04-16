import * as yup from 'yup';
import { TacticData } from './log';
import { optionalTimestampSchema } from './utils/timestamp';

export const choiceSchema = yup
  .object({
    createdAt: optionalTimestampSchema,
    updatedAt: optionalTimestampSchema,
    text: yup.string().required(),
    strategiesPath: yup.string(),
    ordinal: yup.number().required(),
    // Conditions:
    greaterThanOrEqualTo: yup.number().notRequired(),
    lessThan: yup.number().notRequired(),
    equalTo: yup.mixed<string | number>().notRequired(),
  })
  .test(
    'validate-conditions',
    'Either greaterThan/lessThan or equalTo must be provided, but not both',
    function (values) {
      const { greaterThanOrEqualTo, lessThan, equalTo } = values;
      const hasRange = greaterThanOrEqualTo != null || lessThan != null;
      const hasEqualTo = equalTo != null;

      return (hasRange && !hasEqualTo) || (!hasRange && hasEqualTo);
    }
  );
export type ChoiceValue = yup.InferType<typeof choiceSchema>;

export function choiceMatches(choice: ChoiceValue, data: TacticData) {
  if (choice.equalTo != null) {
    return choice.equalTo === data.value;
  }
  if (choice.greaterThanOrEqualTo != null) {
    return (
      typeof data.value === 'number' &&
      data.value >= choice.greaterThanOrEqualTo
    );
  }
  if (choice.lessThan != null) {
    return typeof data.value === 'number' && data.value < choice.lessThan;
  }
}
