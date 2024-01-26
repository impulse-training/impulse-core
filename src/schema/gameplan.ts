import * as yup from 'yup';
import { TimestampLike } from '../utils/TimestampLike';
import { WithTacticsById, tacticSchema } from './tactic';

export const gameplanBaseSchema = yup.object().shape({
  tacticIds: yup.array().of(yup.string().required()).required(),
  suggestedTacticIds: yup.array().of(yup.string().required()).required(),
  tacticsById: yup
    .object()
    .shape({
      [yup.ref('$placeholderKey') as unknown as string]: tacticSchema,
    })
    .required(),
});

type Inferred<T extends yup.ISchema<unknown>> = WithTacticsById<
  yup.InferType<T>
>;
export type Gameplan = Inferred<typeof gameplanBaseSchema>;

// Base schema for GameplanValueBase
const gameplanValueBaseSchema = gameplanBaseSchema.concat(
  yup.object().shape({
    uid: yup.string().required(),
    createdAt: yup
      .mixed()
      .test(
        'is-fake-timestamp',
        'Must be a TimestampLike',
        value => value instanceof TimestampLike
      )
      .required(),
    updatedAt: yup
      .mixed()
      .test(
        'is-fake-timestamp',
        'Must be a TimestampLike',
        value => value instanceof TimestampLike
      )
      .required(),
    title: yup.string().nullable(),
    navigationTitle: yup.string().nullable(),
    isTemplate: yup.boolean().nullable(),
    tacticsUpdatedAt: yup
      .mixed()
      .test(
        'is-fake-timestamp',
        'Must be a TimestampLike',
        value => value instanceof TimestampLike
      )
      .nullable(),
    timezone: yup.string().nullable(),
    patternName: yup.string().nullable(),
    issueId: yup.string().nullable(),
    parentIssueIds: yup.array().of(yup.string().required()).nullable(),
  })
);

const impulseGameplanSchema = gameplanValueBaseSchema.concat(
  yup.object().shape({
    type: yup
      .mixed<'impulse' | 'success' | 'setback'>()
      .oneOf(['impulse', 'success', 'setback'])
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

export type DebriefGameplanValue = Inferred<typeof debriefGameplanSchema>;
const debriefGameplanSchema = schedulableGameplanSchema.concat(
  yup.object().shape({
    type: yup.mixed<'debrief'>().oneOf(['debrief']).required(),
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
  | DebriefGameplanValue
  | LocationGameplanValue;

// Export the schemas
export {
  debriefGameplanSchema,
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
      return impulseGameplanSchema;
    case 'debrief':
      return debriefGameplanSchema;
    default:
      throw new yup.ValidationError(`Unknown type: ${value.type}`);
  }
});
