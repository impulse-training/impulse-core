import * as yup from 'yup';
import { optionalTimestampSchema, timestampSchema } from '../utils/timestamp';
import { gptGeneratedMixin } from './utils/generated';

export function logBaseSchema<K extends string>(type: K) {
  return yup.object({
    createdAt: optionalTimestampSchema,
    updatedAt: optionalTimestampSchema,
    type: yup.mixed<K>().oneOf([type]).defined(),
    date: timestampSchema,
    profileId: yup.string().required(),
    gptPayload: yup
      .object({
        role: yup
          .mixed<'system' | 'user' | 'assistant'>()
          .oneOf(['assistant', 'system', 'user'])
          .required(),
        content: yup.string().required(),
      })
      .required(),
    ...gptGeneratedMixin,
  });
}
