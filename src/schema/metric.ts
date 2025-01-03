import * as yup from 'yup';

export enum MetricIcons {
  Happy = 'happy',
  Sad = 'sad',
  Calm = 'calm',
  Anxious = 'anxious',
  Excited = 'excited',
  Bored = 'bored',
  Grateful = 'grateful',
  Resentful = 'resentful',
  Confident = 'confident',
  Unsure = 'unsure',
  Energetic = 'energetic',
  Tired = 'tired',
  Hopeful = 'hopeful',
  Hopeless = 'hopeless',
  Relaxed = 'relaxed',
  Stressed = 'stressed',
  Connected = 'connected',
  Lonely = 'lonely',
  Focused = 'focused',
  Distracted = 'distracted',
}

export const metricAttributeSchema = yup.object({
  key: yup.string().required('is required'),
  name: yup.string().required('is required'),
  icon: yup
    .mixed<MetricIcons>()
    .oneOf(Object.values(MetricIcons), 'Invalid icon')
    .required(),
});

export const metricSchema = yup.object({
  positiveAttribute: metricAttributeSchema.required(),
  negativeAttribute: metricAttributeSchema.optional().default(undefined),
});
export type MetricValue = yup.InferType<typeof metricSchema>;
