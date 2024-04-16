import * as yup from 'yup';
import { optionalTimestampSchema } from './utils/timestamp';

export const choiceSchema = yup
  .object({
    createdAt: optionalTimestampSchema,
    updatedAt: optionalTimestampSchema,
    text: yup.string().required(),
    strategiesPath: yup.string(),
    ordinal: yup.number().required(),
    // Conditions:
    greaterThan: yup.number().notRequired(),
    lessThan: yup.number().notRequired(),
    equalTo: yup.mixed<string | number>().notRequired(),
  })
  .test(
    'validate-conditions',
    'Either greaterThan/lessThan or equalTo must be provided, but not both',
    function (values) {
      const { greaterThan, lessThan, equalTo } = values;
      const hasRange = greaterThan != null || lessThan != null;
      const hasEqualTo = equalTo != null;

      return (hasRange && !hasEqualTo) || (!hasRange && hasEqualTo);
    }
  );
export type ChoiceValue = yup.InferType<typeof choiceSchema>;
