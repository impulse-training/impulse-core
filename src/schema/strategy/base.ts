import * as yup from 'yup';
import { documentReferenceSchema } from '../utils/firestore';
import { optionalTimestampSchema } from '../utils/timestamp';

type Schema = yup.ObjectSchema<yup.AnyObject> | yup.Lazy<unknown, unknown>;

// Define a base schema for TacticValueBase with generic type K to accommodate the type field.
export function strategyValueBaseSchema<T extends string, K extends Schema>(
  type: T,
  schema: K
) {
  return yup.object({
    createdAt: optionalTimestampSchema,
    updatedAt: optionalTimestampSchema,
    type: yup.mixed<T>().oneOf([type]).required(),
    docRef: documentReferenceSchema.required(),
    docData: schema,
    ordinal: yup.number().required(),
  });
}
