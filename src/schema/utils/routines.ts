import * as yup from 'yup';
import { strategySchema } from './strategies';

export type TimeStrategy = yup.InferType<typeof timeStrategySchema>;
export const timeStrategySchema = strategySchema.shape({
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
  title: yup.string().required(),
});

export type LocationStrategy = yup.InferType<typeof locationStrategySchema>;
export const locationStrategySchema = strategySchema.shape({
  locationId: yup.string().required(),
  mode: yup.mixed<'enter' | 'exit'>().oneOf(['enter', 'exit']).required(),
  title: yup.string().required(),
});
