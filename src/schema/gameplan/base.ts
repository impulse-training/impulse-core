import * as yup from 'yup';
import { tacticSchema } from '../tactic';
import { documentReferenceSchema } from '../utils/firestore';
import { objectOf } from '../utils/objectOf';
import { optionalTimestampSchema } from '../utils/timestamp';

export function gameplanBaseSchema<T extends string>(type: T) {
  return yup.object({
    name: yup.string().required(),
    checkboxLabel: yup.string().required(),
    type: yup.mixed<T>().oneOf([type]).required(),
    tacticsById: objectOf(
      yup.object({
        doc: documentReferenceSchema.required(),
        data: tacticSchema,
      })
    ),
    createdAt: optionalTimestampSchema,
    updatedAt: optionalTimestampSchema,
  });
}
