import * as yup from 'yup';
import { issueSchema } from './issue';
import { optionalObjectOf } from './utils/objectOf';
import { optionalTimestampSchema } from './utils/timestamp';

// A gameplan is a set of strategies (strategies) for different issues. We copy data to the gameplan
// document before converting it to a graph format that is compatible with Bland pathways.
export const gameplanSchema = yup.object().shape({
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
  blandPathwayId: yup.string(),
  issuesById: optionalObjectOf(issueSchema),

  // strategiesById: optionalObjectOf(strategySchema),
});

export type GameplanValue = yup.InferType<typeof gameplanSchema>;
