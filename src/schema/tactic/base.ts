import * as yup from 'yup';
import { fileSchema } from '../utils/file';
import { optionalTimestampSchema } from '../utils/timestamp';

// Define a base schema for TacticValueBase with generic type K to accommodate the type field.
export function tacticBaseSchema<K extends string>(type: K) {
  return yup.object({
    uid: yup.string(),
    prompt: yup.string(),
    description: yup.string().nullable(),
    type: yup.mixed<K>().oneOf([type]).defined(),
    createdAt: optionalTimestampSchema,
    updatedAt: optionalTimestampSchema,
    image: fileSchema.optional().default(undefined),
    backgroundColor: yup.string(),
    timerSeconds: yup.number().notRequired(),
  });
}
