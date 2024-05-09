import * as yup from 'yup';
import { WithTacticsById, tacticsByIdSchema } from '.';
import { optionalStringArray, requiredStringArray } from './utils/array';
import { optionalObjectOf } from './utils/objectOf';
import { optionalTimestampSchema } from './utils/timestamp';

export const strategySchema = yup.object({
  ordinal: yup.number().notRequired(),
  name: yup.string().required(),
  type: yup
    .mixed<'impulse' | 'time' | 'debrief'>()
    .oneOf(['impulse', 'time', 'debrief'])
    .required(),
  recommendedForIssueIds: optionalStringArray,
  recommendedForIssueOrdinals: optionalObjectOf(yup.number().required()),
  tacticIds: requiredStringArray,
  tacticsById: tacticsByIdSchema,
  profileId: yup.string(),
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
});

export type StrategyValue = WithTacticsById<
  yup.InferType<typeof strategySchema>
>;
