import * as yup from 'yup';
import { routineSchema } from '.';
import { WithTacticsById } from '../tactic';
import { optionalTimestampSchema } from '../utils/timestamp';

export function routineBaseSchema<K extends string>(type: K) {
  return yup.object({
    type: yup.mixed<K>().oneOf([type]).defined(),
    name: yup.string().required(),
    createdAt: optionalTimestampSchema,
    updatedAt: optionalTimestampSchema,
  });
}

export type RoutineValue = WithTacticsById<yup.InferType<typeof routineSchema>>;
