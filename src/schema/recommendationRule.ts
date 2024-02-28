import * as yup from 'yup';
import { RecommendationValue, recommendationSchema } from './recommendation';
import { WithTacticsById } from './tactic';
import { requiredStringArray } from './utils/array';
import { optionalObjectOf } from './utils/objectOf';
import { omitSchemaFields } from './utils/omitSchemaFields';
import { timestampSchema } from './utils/timestamp';

export const recommendationRuleSchema = yup.object().shape({
  recommendation: omitSchemaFields(recommendationSchema, [
    'uid',
    'ordinal',
    'createdAt',
    'updatedAt',
    'appliedAt',
    'dismissedAt',
  ]).required(),
  forIssueIds: requiredStringArray,
  issueNames: optionalObjectOf(yup.string()),
  issueNamesSummary: yup.string().nullable(),
  recommendationSummary: yup.string().nullable(),
  uid: yup.string().required(),
  ordinal: yup.number().required(),
  createdAt: timestampSchema.required(),
  updatedAt: timestampSchema.required(),
});

type RecommendationRuleValueBase = yup.InferType<
  typeof recommendationRuleSchema
>;

export type RecommendationRuleValue = Omit<
  RecommendationRuleValueBase,
  'recommendation'
> & {
  recommendation: WithTacticsById<
    Omit<
      RecommendationValue,
      | 'uid'
      | 'ordinal'
      | 'createdAt'
      | 'updatedAt'
      | 'appliedAt'
      | 'dismissedAt'
    >
  >;
};
