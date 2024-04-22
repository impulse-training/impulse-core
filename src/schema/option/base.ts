import * as yup from 'yup';
import { optionalTimestampSchema } from '../utils/timestamp';

// Define a base schema for TacticValueBase with generic type K to accommodate the type field.
export function optionValueBaseSchema<K extends string>(type: K) {
  return yup.object({
    type: yup.mixed<K>().oneOf([type]).defined(),
    createdAt: optionalTimestampSchema,
    updatedAt: optionalTimestampSchema,
    text: yup.string().required(),
    label: yup.string(),
    color: yup.string(),
  });
}
