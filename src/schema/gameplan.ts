import * as yup from 'yup';
import { WithTacticsById, tacticSchema } from './tactic';
import { objectOf } from './utils/objectOf';
import { timestampSchema } from './utils/timestamp';

export const gameplanBaseSchema = yup.object().shape({
  tacticIds: yup.array().of(yup.string().required()).required(),
  suggestedTacticIds: yup.array().of(yup.string().required()).required(),
  tacticsById: objectOf(tacticSchema),
});

type Inferred<T extends yup.ISchema<unknown>> = WithTacticsById<
  yup.InferType<T>
>;
export type Gameplan = Inferred<typeof gameplanBaseSchema>;

// Base schema for GameplanValueBase
const gameplanValueBaseSchema = gameplanBaseSchema.concat(
  yup.object().shape({
    uid: yup.string().required(),
    createdAt: timestampSchema.required(),
    updatedAt: timestampSchema.required(),
    title: yup.string().nullable(),
    navigationTitle: yup.string().nullable(),
    isTemplate: yup.boolean().nullable(),
    timezone: yup.string().nullable(),
    patternName: yup.string().nullable(),
    issueId: yup.string().nullable(),
    parentIssueIds: yup.array().of(yup.string().required()).nullable(),
  })
);

const impulseGameplanSchema = gameplanValueBaseSchema.concat(
  yup.object().shape({
    type: yup
      .mixed<'impulse' | 'impulseDebrief'>()
      .oneOf(['impulse', 'impulseDebrief'])
      .required(),
    patternId: yup.string().required(),
  })
);
export type ImpulseGameplanValue = Inferred<typeof impulseGameplanSchema>;

export type SchedulableGameplanValue = Inferred<
  typeof schedulableGameplanSchema
>;
const schedulableGameplanSchema = gameplanValueBaseSchema.concat(
  yup.object().shape({
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

export type TimeGameplanValue = Inferred<typeof timeGameplanSchema>;
const timeGameplanSchema = schedulableGameplanSchema.concat(
  yup.object().shape({
    type: yup.mixed<'time'>().oneOf(['time']).required(),
  })
);

export type DayDebriefGameplanValue = Inferred<typeof dayDebriefGameplanSchema>;
const dayDebriefGameplanSchema = gameplanValueBaseSchema.concat(
  yup.object().shape({
    type: yup.mixed<'dayDebrief'>().oneOf(['dayDebrief']).required(),
  })
);

export type LocationGameplanValue = Inferred<typeof locationGameplanSchema>;
const locationGameplanSchema = gameplanValueBaseSchema.concat(
  yup.object().shape({
    type: yup.mixed<'location'>().oneOf(['location']).required(),
    locationId: yup.string().nullable(),
    mode: yup.mixed().oneOf(['enter', 'exit']).required(),
  })
);

export type GameplanValue =
  | ImpulseGameplanValue
  | TimeGameplanValue
  | DayDebriefGameplanValue
  | LocationGameplanValue;

// Export the schemas
export {
  dayDebriefGameplanSchema,
  impulseGameplanSchema,
  locationGameplanSchema,
  timeGameplanSchema,
};

export const gameplanSchema = yup.lazy(value => {
  switch (value.type) {
    case 'time':
      return timeGameplanSchema;
    case 'location':
      return locationGameplanSchema;
    case 'impulse':
    case 'impulseDebrief':
      return impulseGameplanSchema;
    case 'dayDebrief':
      return dayDebriefGameplanSchema;

    default:
      throw new yup.ValidationError(`Unknown type: ${value.type}`);
  }
});
