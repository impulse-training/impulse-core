import * as yup from 'yup';
import { LocationRoutineValue, locationRoutineSchema } from './location';
import { TimeRoutineValue, timeRoutineSchema } from './time';

export * from './location';
export * from './time';

export type RoutineValue = TimeRoutineValue | LocationRoutineValue;

export const routineSchemas: Record<
  RoutineValue['type'],
  yup.ObjectSchema<RoutineValue>
> = {
  time: timeRoutineSchema,
  location: locationRoutineSchema,
} as any;

export const routineSchema = yup.lazy(value => {
  if (typeof value.type === 'string' && value.type in routineSchemas) {
    return routineSchemas[value.type as RoutineValue['type']];
  }

  return yup.object({
    type: yup
      .mixed<RoutineValue['type']>()
      .oneOf(Object.keys(routineSchemas) as RoutineValue['type'][])
      .required(),
  });
}) as yup.Lazy<RoutineValue>;
