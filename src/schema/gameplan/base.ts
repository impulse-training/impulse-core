import * as yup from 'yup';
import { tacticsById } from '../utils/tacticsById';
import { optionalTimestampSchema } from '../utils/timestamp';

export function gameplanBaseSchema<T extends string>(type: T) {
  return yup.object({
    name: yup.string().required(),
    checkboxLabel: yup.string().required(),
    type: yup.mixed<T>().oneOf([type]).required(),
    ordinal: yup.number(),
    tacticsById,
    createdAt: optionalTimestampSchema,
    updatedAt: optionalTimestampSchema,
  });
}