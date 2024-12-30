import * as yup from 'yup';
import { gameplanBaseSchema } from './base';

export const scheduledGameplanSchema = gameplanBaseSchema('scheduled').shape({
  schedule: yup
    .array()
    .of(
      yup.object({
        hour: yup.number().required(),
        minute: yup.number().required(),
        weekdays: yup.array().of(yup.number().min(0).max(6)).required().min(1),
      })
    )
    .required(),
});
export type ScheduledGameplanValue = yup.InferType<
  typeof scheduledGameplanSchema
>;
