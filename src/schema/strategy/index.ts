import * as yup from 'yup';
import { ImpulseStrategyValue, impulseStrategySchema } from './impulse';
import { LocationStrategyValue, locationStrategySchema } from './location';
import { TimeStrategyValue, timeStrategySchema } from './time';

export * from './impulse';
export * from './location';
export * from './time';

export type StrategyValue =
  | ImpulseStrategyValue
  | TimeStrategyValue
  | LocationStrategyValue;

export const strategySchemas: Record<
  StrategyValue['type'],
  yup.ObjectSchema<StrategyValue>
> = {
  impulse: impulseStrategySchema,
  time: timeStrategySchema,
  location: locationStrategySchema,
} as any;

export const strategySchema = yup.lazy(value => {
  if (typeof value.type === 'string' && value.type in strategySchemas) {
    return strategySchemas[value.type as StrategyValue['type']];
  }

  return yup.object({
    type: yup
      .mixed<StrategyValue['type']>()
      .oneOf(Object.keys(strategySchemas) as StrategyValue['type'][])
      .required(),
  });
}) as yup.Lazy<StrategyValue>;
