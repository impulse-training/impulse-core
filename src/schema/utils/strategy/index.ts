import * as yup from 'yup';
import { strategyBaseSchema } from './base';

const impulseStrategySchema = strategyBaseSchema('impulse');
export type ImpulseStrategySchema = yup.InferType<typeof impulseStrategySchema>;

export const timeStrategySchema = strategyBaseSchema('time').shape({
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
export type TimeStrategy = yup.InferType<typeof timeStrategySchema>;

export const locationStrategySchema = strategyBaseSchema('location').shape({
  locationId: yup.string().required(),
  mode: yup.mixed<'enter' | 'exit'>().oneOf(['enter', 'exit']).required(),
});
export type LocationStrategy = yup.InferType<typeof locationStrategySchema>;

export type Strategy = ImpulseStrategySchema | TimeStrategy | LocationStrategy;

export const strategySchemas: Record<
  Strategy['type'],
  yup.ObjectSchema<Strategy>
> = {
  impulse: impulseStrategySchema,
  time: timeStrategySchema,
  location: locationStrategySchema,
} as any;

export const strategySchema = yup.lazy(value => {
  if (typeof value.type === 'string' && value.type in strategySchemas) {
    return strategySchemas[value.type as Strategy['type']];
  }

  return yup.object({
    type: yup
      .mixed<Strategy['type']>()
      .oneOf(Object.keys(strategySchemas) as Strategy['type'][])
      .required(),
  });
}) as yup.Lazy<Strategy>;
