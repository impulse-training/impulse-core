import * as yup from 'yup';
import { recommendationBaseSchema, timeScheduleSchema } from './recommendation';
import { requiredStringArray } from './utils/array';
import { optionalObjectOf } from './utils/objectOf';
import { timestampSchema } from './utils/timestamp';

export const recommendationRuleBaseSchema = yup.object().shape({
  recommendation: recommendationBaseSchema,
  forIssueIds: requiredStringArray,
  issueNames: optionalObjectOf(yup.string()),
  issueNamesSummary: yup.string().nullable(),
  recommendationSummary: yup.string().nullable(),
  uid: yup.string().required(),
  ordinal: yup.number().required(),
  createdAt: timestampSchema.required(),
  updatedAt: timestampSchema.required(),
});

export type ImpulseRecommendationRuleValue = yup.InferType<
  typeof impulseRecommendationRuleSchema
>;
export const impulseRecommendationRuleSchema =
  recommendationRuleBaseSchema.shape({
    type: yup.mixed<'impulse'>().oneOf(['impulse']).required(),
  });

export type ImpulseDebriefRecommendationRuleValue = yup.InferType<
  typeof impulseDebriefRecommendationRuleSchema
>;
export const impulseDebriefRecommendationRuleSchema =
  recommendationRuleBaseSchema.shape({
    type: yup.mixed<'impulseDebrief'>().oneOf(['impulseDebrief']).required(),
  });

export type TimeRecommendationRuleValue = yup.InferType<
  typeof timeRecommendationRuleSchema
>;
export const timeRecommendationRuleSchema = recommendationRuleBaseSchema.shape({
  type: yup.mixed<'time'>().oneOf(['time']).required(),
  schedule: timeScheduleSchema.required(),
});

export type LocationRecommendationRuleValue = yup.InferType<
  typeof locationRecommendationRuleSchema
>;
export const locationRecommendationRuleSchema =
  recommendationRuleBaseSchema.shape({
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

export const recommendationRuleSchema = yup.lazy(value => {
  if (!value || typeof value !== 'object' || !value.type) {
    return defaultValidation;
  }

  switch (value.type) {
    case 'impulse':
      return impulseRecommendationRuleSchema;
    case 'impulseDebrief':
      return impulseDebriefRecommendationRuleSchema;
    case 'time':
      return timeRecommendationRuleSchema;
    case 'location':
      return locationRecommendationRuleSchema;
    default:
      return defaultValidation;
  }
});

export type RecommendationRuleValue =
  | ImpulseRecommendationRuleValue
  | ImpulseDebriefRecommendationRuleValue
  | TimeRecommendationRuleValue
  | LocationRecommendationRuleValue;
