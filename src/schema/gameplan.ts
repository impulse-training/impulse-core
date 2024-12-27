import * as yup from 'yup';
import { tacticSchema, WithTacticsById } from './tactic';
import { objectOf } from './utils/objectOf';
import { optionalTimestampSchema } from './utils/timestamp';

const gameplanTypes = [
  'craving', // For specific urges/cravings
  'location', // When arriving/leaving places
  'time', // Daily/weekly scheduled actions
  'routine', // For specific routines (morning, evening)
  'emotion', // When feeling specific ways
] as const;

// Different gameplan configurations based on type
const cravingConfigSchema = yup.object({
  behaviorId: yup.string().required(), // The behavior this craving is for
  // intensity: yup.string().oneOf(['mild', 'moderate', 'severe']),
});

const locationConfigSchema = yup.object({
  name: yup.string().required(),
  type: yup.string().oneOf(['arrival', 'departure', 'both']).required(),
});

const timeConfigSchema = yup.object({
  schedule: yup
    .array()
    .of(
      yup.object({
        hour: yup.number().required(),
        minute: yup.number().required(),
        weekdays: yup.array().of(yup.number().min(0).max(6)).required().min(1),
      })
    )
    .required(),
});

const routineConfigSchema = yup.object({
  name: yup.string().required(), // e.g., "Morning Routine"
  suggestedTime: yup.string().matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/),
});

const emotionConfigSchema = yup.object({
  emotions: yup.array().of(yup.string()).required().min(1),
});

export const gameplanSchema = yup.object({
  name: yup.string().required(),
  type: yup.string().oneOf(gameplanTypes).required(),
  config: yup
    .mixed()
    .when('type', {
      is: 'craving',
      then: () => cravingConfigSchema,
    })
    .when('type', {
      is: 'location',
      then: () => locationConfigSchema,
    })
    .when('type', {
      is: 'time',
      then: () => timeConfigSchema,
    })
    .when('type', {
      is: 'routine',
      then: () => routineConfigSchema,
    })
    .when('type', {
      is: 'emotion',
      then: () => emotionConfigSchema,
    })
    .required(),
  tacticsById: objectOf(tacticSchema),
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
});

export type GameplanValue = WithTacticsById<
  yup.InferType<typeof gameplanSchema>
>;
