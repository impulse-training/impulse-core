import * as yup from 'yup';
import { questionSchema } from '../question';
import { strategySchema } from '../strategy';
import { requiredStringArray } from '../utils/array';
import { objectOf, optionalObjectOf } from '../utils/objectOf';
import { optionalTimestampSchema } from '../utils/timestamp';
import { logBaseSchema } from './base';
import { questionDataSchema } from './questionsLog';

export const impulseLogSchema = logBaseSchema('impulse').shape({
  issueName: yup.string(),
  parentIssueIds: requiredStringArray,
  gameplanStrategyIds: requiredStringArray,
  strategiesById: objectOf(strategySchema),
  // These are the tactics that the user has completed
  completedTacticIds: requiredStringArray,
  questionsById: objectOf(questionSchema),
  questionData: optionalObjectOf(questionDataSchema),
  submittedAt: optionalTimestampSchema,
  isDebrief: yup.boolean(),
  followedUpQuestionIds: requiredStringArray,
});

export type ImpulseLogValue = yup.InferType<typeof impulseLogSchema>;
