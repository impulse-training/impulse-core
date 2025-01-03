import * as yup from 'yup';

export enum MetricIcons {
  EMOTICON_OUTLINE = 'emoticon-outline',
  HEART = 'heart',
  STAR = 'star',
}

const metricAttributesSchema = yup.object({
  key: yup.string(),
  name: yup.string(),
  icon: yup
    .mixed<MetricIcons>()
    .oneOf(Object.values(MetricIcons), 'Invalid icon')
    .required(),
  color: yup.string(),
});

export const metricSchema = yup.object({
  key: yup.string(),
  positiveMetric: metricAttributesSchema.required(),
  negativeMetric: metricAttributesSchema.optional().default(undefined),
});
