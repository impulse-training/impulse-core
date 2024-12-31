import * as yup from 'yup';
import { WithTacticsById } from '../tactic';
import { cravingGameplanSchema, CravingGameplanValue } from './craving';
import { locationGameplanSchema, LocationGameplanValue } from './location';
import { scheduledGameplanSchema, ScheduledGameplanValue } from './scheduled';

export * from './craving';
export * from './emotions';
export * from './location';
export * from './scheduled';

export type GameplanValue =
  | CravingGameplanValue
  | ScheduledGameplanValue
  | LocationGameplanValue;

// Utility to dynamically select the correct schema based on the Gameplan type
export const GameplanSchemas: Record<
  GameplanValue['type'],
  yup.ObjectSchema<GameplanValue>
> = {
  craving: cravingGameplanSchema,
  scheduled: scheduledGameplanSchema,
  location: locationGameplanSchema,
} as any;

export const gameplanSchema = yup.lazy(value => {
  if (typeof value.type === 'string' && value.type in GameplanSchemas) {
    return GameplanSchemas[value.type as GameplanValue['type']];
  }

  return yup.object({
    type: yup
      .mixed<GameplanValue['type']>()
      .oneOf(Object.keys(GameplanSchemas) as GameplanValue['type'][])
      .required(),
  });
}) as yup.Lazy<GameplanTypes[GameplanValue['type']]>;

// / This type represents the union of all possible validated Gameplan objects
export type GameplanTypes = {
  [K in GameplanValue['type']]: WithTacticsById<
    yup.InferType<(typeof GameplanSchemas)[K]>
  >;
};
