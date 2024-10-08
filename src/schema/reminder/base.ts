import * as yup from 'yup';
import { reminderSchema } from '.';
import { WithTacticsById } from '../tactic';
import { optionalTimestampSchema } from '../utils/timestamp';

export function reminderBaseSchema<K extends string>(type: K) {
  return yup.object({
    type: yup.mixed<K>().oneOf([type]).defined(),
    profileId: yup.string().required(),
    name: yup.string().required(),
    createdAt: optionalTimestampSchema,
    updatedAt: optionalTimestampSchema,
  });
}

export type ReminderValue = WithTacticsById<
  yup.InferType<typeof reminderSchema>
>;
