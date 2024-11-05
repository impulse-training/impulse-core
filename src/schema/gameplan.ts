import * as yup from 'yup';
import { issueSchema } from './issue';
import { profileStrategySchema } from './profileStrategy';
import { optionalObjectOf } from './utils/objectOf';
import { optionalTimestampSchema } from './utils/timestamp';

// A gameplan is a set of strategies (strategies) for different issues. We copy data to the gameplan
// document before converting it to a graph format that is compatible with Bland pathways.
export const gameplanSchema = yup.object().shape({
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
  // For now, we don't type this object more specifically
  blandPathwayData: yup.object({
    nodes: yup.array().of(yup.object().required()),
    edges: yup.array().of(yup.object().required()),
  }),
  blandPathwayId: yup.string(),
  summary: yup.string(),
  issuesById: optionalObjectOf(issueSchema),
  profileStrategiesById: optionalObjectOf(profileStrategySchema),
});

export type GameplanValue = yup.InferType<typeof gameplanSchema>;
