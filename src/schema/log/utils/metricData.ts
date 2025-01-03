import * as yup from 'yup';
import { metricAttributeSchema } from '../../metric';
import { documentReferenceSchema } from '../../utils/firestore';

export const metricDataSchema = yup.object({
  metricInputValue: yup.number().required(),
  absoluteAttributeValue: yup.number().required(),
  label: yup.string().required(),
});
export type MetricDataValue = yup.InferType<typeof metricDataSchema>;

export const metricAttributeAndDataSchema = yup.object({
  doc: documentReferenceSchema,
  attribute: metricAttributeSchema,
  data: metricDataSchema,
});
export type MetricAndMetricDataValue = yup.InferType<
  typeof metricAttributeAndDataSchema
>;
