import * as yup from 'yup';
import { optionalTimestampSchema } from './utils/timestamp';

type Inferred<T extends yup.ISchema<unknown>> = yup.InferType<T>;
export type Routine = Inferred<typeof routineBaseSchema>;

// Base schema for RoutineValueBase
const routineBaseSchema = yup.object({
  uid: yup.string().required(),
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
  title: yup.string().nullable(),
  navigationTitle: yup.string().nullable(),
  isTemplate: yup.boolean().nullable(),
  timezone: yup.string().nullable(),
});

export type SchedulableRoutineValue = Inferred<typeof schedulableRoutineSchema>;
const schedulableRoutineSchema = routineBaseSchema.concat(
  yup.object({
    type: yup
      .mixed<'time' | 'dayDebrief'>()
      .oneOf(['time', 'dayDebrief'])
      .required(),
    weekdays: yup.array().of(yup.number().min(1).max(7).required()).required(),
    hour: yup.number().min(0).max(23).required(),
    minute: yup.number().min(0).max(59).required(),
    timezone: yup.string().required(),
    scheduledNotificationIds: yup
      .array()
      .of(yup.string().required())
      .nullable(),
  })
);

export type TimeRoutineValue = Inferred<typeof timeRoutineSchema>;
const timeRoutineSchema = schedulableRoutineSchema.concat(
  yup.object({
    type: yup.mixed<'time'>().oneOf(['time']).required(),
  })
);

export type DayDebriefRoutineValue = Inferred<typeof dayDebriefRoutineSchema>;
const dayDebriefRoutineSchema = schedulableRoutineSchema.concat(
  yup.object({
    type: yup.mixed<'dayDebrief'>().oneOf(['dayDebrief']).required(),
  })
);

export type LocationRoutineValue = Inferred<typeof locationRoutineSchema>;
const locationRoutineSchema = routineBaseSchema.concat(
  yup.object({
    type: yup.mixed<'location'>().oneOf(['location']).required(),
    locationId: yup.string().nullable(),
    mode: yup.mixed().oneOf(['enter', 'exit']).required(),
  })
);

export type RoutineValue =
  | TimeRoutineValue
  | DayDebriefRoutineValue
  | LocationRoutineValue;

// Export the schemas
export { dayDebriefRoutineSchema, locationRoutineSchema, timeRoutineSchema };

export const routineSchema = yup.lazy(value => {
  switch (value.type) {
    case 'time':
      return timeRoutineSchema;
    case 'location':
      return locationRoutineSchema;
    case 'dayDebrief':
      return dayDebriefRoutineSchema;

    default:
      throw new yup.ValidationError(`Unknown type: ${value.type}`);
  }
});
