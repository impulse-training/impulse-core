import * as yup from 'yup';
import { WithTacticsById, tacticSchema } from './tactic';
import { requiredStringArray } from './utils/array';
import { objectOf, optionalObjectOf } from './utils/objectOf';
import {
  locationStrategySchema,
  strategySchema,
  timeStrategySchema,
} from './utils/strategy';
import { optionalTimestampSchema } from './utils/timestamp';

export const programSchema = yup.object().shape({
  title: yup.string().required(),
  forIssueIds: requiredStringArray,
  issueNames: optionalObjectOf(yup.string()),
  issueNamesSummary: yup.string().nullable(),
  recommendationSummary: yup.string().nullable(),
  impulseStrategies: yup.array(strategySchema),
  scheduledStrategies: yup.array(timeStrategySchema.required()),
  locationStrategies: yup.array(locationStrategySchema.required()),
  tacticsById: objectOf(tacticSchema) as any,
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
});

export type ProgramValue = WithTacticsById<yup.InferType<typeof programSchema>>;
