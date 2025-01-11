import * as yup from 'yup';
import { tacticsById } from '../log/utils/tacticData';
import { optionalTimestampSchema } from '../utils/timestamp';

export function reminderBaseSchema<T extends string>(type: T) {
  return yup.object({
    name: yup.string().required(),
    type: yup.mixed<T>().oneOf([type]).required(),
    ordinal: yup.number(),
    tacticsById,
    createdAt: optionalTimestampSchema,
    updatedAt: optionalTimestampSchema,
  });
}
