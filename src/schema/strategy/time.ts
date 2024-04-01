import * as yup from 'yup';
import { strategyValueBaseSchema } from './base';
export const timeStrategySchema = strategyValueBaseSchema('time').shape({
  weekdays: yup
    .array()
    .of(
      yup
        .number()
        .integer()
        .min(1, 'Weekday must be a number between 1 and 7')
        .max(7, 'Weekday must be a number between 1 and 7')
        .required('Weekday is required')
    )
    .required()
    .min(1, 'Please select at least one day'),
  hour: yup.number().required(),
  minute: yup.number().required(),
});
export type TimeStrategyValue = yup.InferType<typeof timeStrategySchema>;
