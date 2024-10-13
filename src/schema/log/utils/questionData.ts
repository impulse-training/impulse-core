import * as yup from 'yup';
import { setbackThresholdMixin } from '../../question/utils/setbackThreshold';
import { timestampSchema } from '../../utils/timestamp';

// const logViewSchema = yup.object({
//   openTime: timestampSchema,
//   closeTime: timestampSchema,
// });

export const questionDataSchema = yup.object({
  idValue: yup.string(), // This is if the answer is an id
  numericValue: yup.number(), // ... or a number
  stringValue: yup.string().required(), // This is a string representation of the value
  label: yup.string(),
  color: yup.string(),
  unit: yup.string().required(),
  setAt: timestampSchema,
  ...setbackThresholdMixin,
});
export type QuestionDataValue = yup.InferType<typeof questionDataSchema>;
