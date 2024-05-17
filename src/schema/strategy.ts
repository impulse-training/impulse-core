import * as yup from 'yup';
import { WithTacticsById, tacticsByIdSchema } from '.';
import { optionalStringArray, requiredStringArray } from './utils/array';
import { optionalObjectOf } from './utils/objectOf';
import { optionalTimestampSchema } from './utils/timestamp';

export const strategySchema = yup.object({
  ordinal: yup.number().notRequired(),
  name: yup.string().required(),
  type: yup
    .mixed<'impulse' | 'time' | 'debrief' | 'daily'>()
    .oneOf(['impulse', 'time', 'debrief', 'daily'])
    .required(),
  recommendedForIssueIds: optionalStringArray,
  recommendedForIssueOrdinals: optionalObjectOf(yup.number().required()),
  tacticIds: requiredStringArray,
  tacticsById: tacticsByIdSchema,
  profileId: yup.string(),
  supportGroup: yup
    .object({
      id: yup.string().required(),
      name: yup.string().required(),
      avatarUrl: yup.string().required(),
    })
    .notRequired()
    .default(undefined),
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
});

export type StrategyValue = WithTacticsById<
  yup.InferType<typeof strategySchema>
>;
