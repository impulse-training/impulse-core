import * as yup from 'yup';
import { WithTacticsById, tacticSchema } from './tactic';
import { requiredStringArray } from './utils/array';
import { objectOf } from './utils/objectOf';
import { optionalTimestampSchema, timestampSchema } from './utils/timestamp';

// We export this, and our recommendation rule schema uses it to define base recommendation
// properties
export type RecommendationBaseValue = yup.InferType<
  typeof recommendationBaseSchema
>;
export const recommendationBaseSchema = yup.object().shape({
  title: yup.string().required(),
  explanation: yup.string().nullable(),
  recommenderUid: yup.string().required(),
  recommenderName: yup.string().required(),
  tacticIds: requiredStringArray,
  tacticsById: objectOf(tacticSchema) as any,
});

// Here we extend this base schema with properties that are user-specific, or include a reference to
// the recommendation rule
const extendedRecommendationSchema = recommendationBaseSchema.shape({
  ordinal: yup.number().required(),
  uid: yup.string().required(),
  createdAt: timestampSchema,
  updatedAt: timestampSchema,
  appliedAt: optionalTimestampSchema,
  dismissedAt: optionalTimestampSchema,
  ruleId: yup.string().nullable(),
});

export const timeScheduleSchema = yup.object({
  hour: yup.number().required(),
  minute: yup.number().required(),
  weekdays: requiredStringArray,
});

// Finally, we export specific recommendation types
export type ImpulseRecommendationValue = yup.InferType<
  typeof impulseRecommendationSchema
>;
const impulseRecommendationSchema = extendedRecommendationSchema.shape({
  type: yup.mixed<'impulse'>().oneOf(['impulse']).required(),
  patternIds: requiredStringArray,
});

export type ImpulseDebriefRecommendationValue = yup.InferType<
  typeof impulseDebriefRecommendationSchema
>;
const impulseDebriefRecommendationSchema = extendedRecommendationSchema.shape({
  type: yup.mixed<'impulseDebrief'>().oneOf(['impulseDebrief']).required(),
  patternIds: requiredStringArray,
});

export type TimeRecommendationValue = yup.InferType<
  typeof timeRecommendationSchema
>;
const timeRecommendationSchema = extendedRecommendationSchema.shape({
  type: yup.mixed<'time'>().oneOf(['time']).required(),
  time: timeScheduleSchema.required(),
});

export type LocationRecommendationValue = yup.InferType<
  typeof locationRecommendationSchema
>;
const locationRecommendationSchema = extendedRecommendationSchema.shape({
  type: yup.mixed<'location'>().oneOf(['location']).required(),
  locationKey: yup.string().required(),
});

const defaultValidation = yup
  .object({
    type: yup
      .mixed<'impulse' | 'impulseDebrief' | 'time' | 'location'>()
      .oneOf(['impulse', 'impulseDebrief', 'time', 'location'])
      .required(),
  })
  .required();

export const recommendationSchema = yup.lazy(value => {
  if (!value || typeof value !== 'object' || !value.type) {
    return defaultValidation;
  }

  switch (value.type) {
    case 'impulse':
      return impulseRecommendationSchema;
    case 'impulseDebrief':
      return impulseDebriefRecommendationSchema;
    case 'time':
      return timeRecommendationSchema;
    case 'location':
      return locationRecommendationSchema;
    default:
      return defaultValidation;
  }
});

export type RecommendationValue = WithTacticsById<
  | ImpulseRecommendationValue
  | ImpulseDebriefRecommendationValue
  | TimeRecommendationValue
  | LocationRecommendationValue
>;
