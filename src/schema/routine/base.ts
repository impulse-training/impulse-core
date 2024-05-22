import * as yup from 'yup';
import { routineSchema } from '.';
import { WithTacticsById } from '../tactic';
import { documentReferenceSchema } from '../utils/firestore';
import { optionalTimestampSchema } from '../utils/timestamp';

export function routineBaseSchema<K extends string>(type: K) {
  return yup.object({
    type: yup.mixed<K>().oneOf([type]).defined(),
    profileId: yup.string().required(),
    name: yup.string().required(),
    supportGroups: yup.array().of(documentReferenceSchema).required(),
    createdAt: optionalTimestampSchema,
    updatedAt: optionalTimestampSchema,
  });
}

export type RoutineValue = WithTacticsById<yup.InferType<typeof routineSchema>>;
