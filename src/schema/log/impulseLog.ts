import * as yup from 'yup';
import { questionSchema } from '../question';
import { strategySchema } from '../strategy';
import { optionalStringArray, requiredStringArray } from '../utils/array';
import { objectOf, optionalObjectOf } from '../utils/objectOf';
import { optionalTimestampSchema } from '../utils/timestamp';
import { logBaseSchema } from './base';
import { questionDataSchema } from './questionsLog';

export const impulseLogSchema = logBaseSchema('impulse').shape({
  issueName: yup.string().required(),
  parentIssueIds: requiredStringArray,
  strategiesById: objectOf(strategySchema),
  // These are the tactics that the user has completed
  completedTacticIds: requiredStringArray,
  trackingQuestionIds: optionalStringArray,
  debriefingQuestionIds: optionalStringArray,
  questionsById: objectOf(questionSchema),
  questionData: optionalObjectOf(questionDataSchema),
  submittedAt: optionalTimestampSchema,
  isDebrief: yup.boolean(),
  followedUpQuestionIds: optionalStringArray,
});

export type ImpulseLogValue = yup.InferType<typeof impulseLogSchema>;
