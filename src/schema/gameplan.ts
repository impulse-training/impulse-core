import * as yup from 'yup';
import { TimestampLike } from '../utils/TimestampLike';
import { WithTacticsById, tacticSchema } from './tactic';

export const gameplanSchema = yup.object().shape({
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
export type Gameplan = Inferred<typeof gameplanSchema>;

// Base schema for GameplanValueBase
const gameplanValueBaseSchema = gameplanSchema.concat(
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

const impulseGameplanValueSchema = gameplanValueBaseSchema.concat(
  yup.object().shape({
    type: yup
      .mixed<'impulse' | 'success' | 'setback'>()
      .oneOf(['impulse', 'success', 'setback'])
      .required(),
    patternId: yup.string().required(),
  })
);
export type ImpulseGameplanValue = Inferred<typeof impulseGameplanValueSchema>;

export type SchedulableGameplanValue = Inferred<
  typeof schedulableGameplanValueSchema
>;
const schedulableGameplanValueSchema = gameplanValueBaseSchema.concat(
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

export type TimeGameplanValue = Inferred<typeof timeGameplanValueSchema>;
const timeGameplanValueSchema = schedulableGameplanValueSchema.concat(
  yup.object().shape({
    type: yup.mixed<'time'>().oneOf(['time']).required(),
  })
);

export type DebriefGameplanValue = Inferred<typeof debriefGameplanValueSchema>;
const debriefGameplanValueSchema = schedulableGameplanValueSchema.concat(
  yup.object().shape({
    type: yup.mixed<'debrief'>().oneOf(['debrief']).required(),
  })
);

export type LocationGameplanValue = Inferred<
  typeof locationGameplanValueSchema
>;
const locationGameplanValueSchema = gameplanValueBaseSchema.concat(
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
  debriefGameplanValueSchema,
  impulseGameplanValueSchema,
  locationGameplanValueSchema,
  timeGameplanValueSchema,
};
