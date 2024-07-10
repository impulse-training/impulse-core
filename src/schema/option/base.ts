import * as yup from 'yup';
import { followUpSchema } from './followUp';

// Define a base schema for TacticValueBase with generic type K to accommodate the type field.
export function optionValueBaseSchema<K extends string>(type: K) {
  return yup.object({
    type: yup.mixed<K>().oneOf([type]).defined(),
    followUps: yup.array().of(followUpSchema),
    text: yup.string().required(),
    color: yup.string(),
    textColor: yup.string(),
    label: yup.string(),
  });
}
