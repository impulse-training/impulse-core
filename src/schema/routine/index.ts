import * as yup from 'yup';
import { WithTacticsById } from '../log';
import { locationRoutineSchema, LocationRoutineValue } from './location';
import { scheduledRoutineSchema, ScheduledRoutineValue } from './scheduled';

export * from './location';
// export * from './metrics';
export * from './scheduled';

export type RoutineValue = ScheduledRoutineValue | LocationRoutineValue;

// Utility to dynamically select the correct schema based on the Routine type
export const RoutineSchemas: Record<
  RoutineValue['type'],
  yup.ObjectSchema<RoutineValue>
> = {
  scheduled: scheduledRoutineSchema,
  location: locationRoutineSchema,
} as any;

export const reminderSchema = yup.lazy(value => {
  if (typeof value.type === 'string' && value.type in RoutineSchemas) {
    return RoutineSchemas[value.type as RoutineValue['type']];
  }

  return yup.object({
    type: yup
      .mixed<RoutineValue['type']>()
      .oneOf(Object.keys(RoutineSchemas) as RoutineValue['type'][])
      .required(),
  });
}) as yup.Lazy<RoutineTypes[RoutineValue['type']]>;

// / This type represents the union of all possible validated Routine objects
export type RoutineTypes = {
  [K in RoutineValue['type']]: WithTacticsById<
    yup.InferType<(typeof RoutineSchemas)[K]>
  >;
};
