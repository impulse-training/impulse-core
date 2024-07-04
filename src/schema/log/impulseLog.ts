import * as yup from 'yup';
import { strategySchema } from '../strategy';
import { requiredStringArray } from '../utils/array';
import { objectOf } from '../utils/objectOf';
import { logBaseSchema } from './base';

export const impulseLogSchema = logBaseSchema('impulse').shape({
  issueName: yup.string().required(),
  parentIssueIds: requiredStringArray,
  strategiesById: objectOf(strategySchema),
  // These are the tactics that the user has completed
  completedTacticIds: requiredStringArray,
});

export type ImpulseLogValue = yup.InferType<typeof impulseLogSchema>;
