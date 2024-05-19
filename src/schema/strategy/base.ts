import * as yup from 'yup';
import { tacticsByIdSchema } from '..';
import { optionalStringArray, requiredStringArray } from '../utils/array';
import { optionalObjectOf } from '../utils/objectOf';
import { optionalTimestampSchema } from '../utils/timestamp';

export function strategyBaseSchema<K extends string>(type: K) {
  return yup.object({
    ordinal: yup.number().notRequired(),
    name: yup.string().required(),
    type: yup.mixed<K>().oneOf([type]).defined(),
    recommendedFor: yup.mixed<'impulse' | 'time'>().oneOf(['impulse', 'time']),
    recommendedForIssueIds: optionalStringArray,
    recommendedForIssueOrdinals: optionalObjectOf(yup.number().required()),
    tacticIds: requiredStringArray,
    tacticsById: tacticsByIdSchema,
    profileId: yup.string(),
    subscribeToAllTactics: yup.boolean(),
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
}
