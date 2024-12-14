import * as yup from 'yup';
import { optionalStringArray } from '../utils/array';
import { optionalTimestampSchema } from '../utils/timestamp';

export function behaviorBaseSchema<T extends string>(type: T) {
  return yup.object({
    prompt: yup.string().required(),
    type: yup.mixed<T>().oneOf([type]).defined(),
    ordinal: yup.number().required(),
    templateFor: yup
      .mixed<'onboarding' | 'afterSuccess' | 'afterSetback'>()
      .oneOf(['onboarding', 'afterSetback', 'afterSuccess']),
    recommendedForIssueIds: optionalStringArray,
    createdAt: optionalTimestampSchema,
    updatedAt: optionalTimestampSchema,
  });
}
