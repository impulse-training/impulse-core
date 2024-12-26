import * as yup from 'yup';
import { profileStrategySchema } from './profileStrategy';
import { optionalObjectOf } from './utils/objectOf';
import { optionalTimestampSchema } from './utils/timestamp';

// A gameplan is a set of strategies (strategies) for different issues. We copy data to the gameplan
// document before converting it to a graph format that is compatible with Bland pathways.
export const gameplanSchema = yup.object().shape({
  name: yup.string().required(),
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
  profileStrategiesById: optionalObjectOf(profileStrategySchema),
});

export type GameplanValue = yup.InferType<typeof gameplanSchema>;
